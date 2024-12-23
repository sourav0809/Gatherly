import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ResponseUtil from "../utils/responseUtil"; // Assuming this is a utility for sending responses
import UserService from "../services/UserService";

class AuthController {
  async signUp(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { name, email, password } = req.body;

      // Check if the user already exists
      const userExists = await UserService.findByEmail(email);
      if (userExists) {
        return ResponseUtil.error(res, "Email already in use", null, 400);
      }

      // Create new user with hashed password
      const newUser = await UserService.createUser(name, email, password);
      const token = jwt.sign(
        {
          userId: newUser.id,
          email,
          password,
        },
        process.env.JWT_SECRET!
      );

      const data = {
        userId: newUser.id,
        email: newUser.email,
        name: newUser.name,
        token,
      };

      return ResponseUtil.success(
        res,
        "User registered successfully",
        data,
        201
      );
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await UserService.findByEmail(email);
      if (!user) {
        return ResponseUtil.error(res, "Invalid email or password", null, 401);
      }

      // Compare password using bcrypt
      const isPasswordValid = await UserService.comparePassword(
        password,
        user.password
      );
      if (!isPasswordValid) {
        return ResponseUtil.error(res, "Invalid email or password", null, 401);
      }

      // Generate JWT token
      const token = jwt.sign(
        {
          userId: user.id,
          password: user.password,
          email: user.email,
        },
        process.env.JWT_SECRET!
      );

      // Send success response
      return ResponseUtil.success(res, "Login successful", { token });
    } catch (error) {
      next(error); // Pass error to the next middleware
    }
  }
}

export default new AuthController(); // Exporting the instance
