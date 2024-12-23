import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Mount routes
app.use("/api/auth", authRoutes);

// Health check route
app.get("/", (req: Request, res: Response) => {
  res.send("API is working");
});

export default app;
