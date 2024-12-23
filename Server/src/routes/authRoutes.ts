import { Router } from "express";
import AuthController from "../controllers/AuthController";
import { validateSchema } from "../middlewares/authMiddlewares";
import { SignUpSchema } from "../schemas/authSchemas";

const router = Router();

// Authentication routes
router.post("/register", validateSchema(SignUpSchema), AuthController.signUp);
router.post("/login", validateSchema(SignUpSchema), AuthController.login);

export default router;
