import bcrypt from "bcrypt";
import db from "../models";
import { UserAttributes } from "../models/User";

const User = db.User;

class UserService {
  // Find user by email
  async findByEmail(email: string): Promise<UserAttributes | null> {
    return await User.findOne({ where: { email } });
  }

  // Create a new user
  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<UserAttributes> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await User.create({ name, email, password: hashedPassword });
  }

  // Compare password with the hashed password
  async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}

export default new UserService();
