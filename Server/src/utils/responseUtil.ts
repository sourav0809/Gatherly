import { Response } from "express";

class ResponseUtil {
  // Standard success response
  static success(
    res: Response,
    message: string,
    data?: any,
    statusCode: number = 200
  ): Response {
    return res.status(statusCode).json({
      success: true,
      message,
      data: data || null,
    });
  }

  // Standard error response
  static error(
    res: Response,
    message: string,
    errorDetails?: any,
    statusCode: number = 400
  ): Response {
    return res.status(statusCode).json({
      success: false,
      message,
      error: errorDetails || null,
    });
  }

  // Standard server error response
  static serverError(res: Response, errorDetails: any): Response {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: errorDetails,
    });
  }

  // Response for validation failure
  static validationError(
    res: Response,
    message: string,
    validationErrors: any
  ): Response {
    return res.status(422).json({
      success: false,
      message,
      validationErrors,
    });
  }
}

export default ResponseUtil;
