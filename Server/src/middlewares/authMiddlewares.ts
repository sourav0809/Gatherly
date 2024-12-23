import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validateSchema = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction): any => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    next(); // If validation is successful, pass control to the next handler
  };
};
