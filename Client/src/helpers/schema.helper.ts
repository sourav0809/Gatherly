import { ZodSchema } from "zod";
import { toast } from "sonner";

export const validateForm = (
  schema: ZodSchema,
  formData: Record<string, any>
) => {
  try {
    schema.parse(formData); // Validate form data
    return true; // Validation passed
  } catch (error: any) {
    const errorMessages: Record<string, string> = {};

    // Loop through the errors and show only the first one for each field
    for (const err of error.errors) {
      const field = err.path[0]; // Get the field name

      // Only show the first error for each field
      if (!errorMessages[field]) {
        errorMessages[field] = err.message;
        toast.error(err.message); // Show the first error for this field
        break; // Stop after the first error is displayed
      }
    }

    return false; // Validation failed
  }
};
