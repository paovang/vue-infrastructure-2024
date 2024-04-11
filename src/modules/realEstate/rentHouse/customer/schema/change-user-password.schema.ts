import { object, string, ObjectSchema } from "yup";

interface ErrorMessages {
  password: string;
  password_confirmation: string;
}

// Define the schema function type alias
type ChangePasswordSchemaFunction = (
  errorMessages: ErrorMessages
) => ObjectSchema<ErrorMessages>;

// Define the schema function
const changePasswordSchemaFunction: ChangePasswordSchemaFunction = (
  errorMessages
) =>
  object({
    password: string().required(errorMessages.password),
    password_confirmation: string().required(
      errorMessages.password_confirmation
    ),
  });

// Assign the schema function to customerSchema
export const changePasswordSchema = changePasswordSchemaFunction;
