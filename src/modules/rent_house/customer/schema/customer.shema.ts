import { object, string, ObjectSchema } from "yup";

interface ErrorMessages {
  name: string;
  owner: string;
  address: string;
  tel: string;
  email: string;
  password: string;
  password_confirmation: string;
}

// Define the schema function type alias
type CustomerSchemaFunction = (
  errorMessages: ErrorMessages
) => ObjectSchema<ErrorMessages>;

// Define the schema function
const customerSchemaFunction: CustomerSchemaFunction = (errorMessages) =>
  object({
    name: string().required(errorMessages.name),
    owner: string().required(errorMessages.owner),
    address: string().required(errorMessages.address),
    tel: string().required(errorMessages.tel),
    email: string().required(errorMessages.email),
    password: string().required(errorMessages.password),
    password_confirmation: string().required(
      errorMessages.password_confirmation
    ),
  });

// Assign the schema function to customerSchema
export const customerSchema = customerSchemaFunction;
