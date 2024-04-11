import { object, string, ObjectSchema } from "yup";

interface ErrorMessages {
  name: string;
  address: string;
  phone_number: string;
  email: string;
  password: string;
  password_confirmation: string;
}

// Define the schema function type alias
type schemaFunction = (
  errorMessages: ErrorMessages
) => ObjectSchema<ErrorMessages>;

// Define the schema function
const signUpSchemaFunction: schemaFunction = (errorMessages) =>
  object({
    name: string().required(errorMessages.name),
    address: string().required(errorMessages.address),
    phone_number: string().required(errorMessages.phone_number),
    email: string().required(errorMessages.email),
    password: string().required(errorMessages.password),
    password_confirmation: string().required(
      errorMessages.password_confirmation
    ),
  });

// Assign the schema function to customerSchema
export const signUpSchema = signUpSchemaFunction;
