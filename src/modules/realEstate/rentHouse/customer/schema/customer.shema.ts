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
  errorMessages: ErrorMessages,
  isEdit?: boolean // Add an optional parameter to indicate edit mode
) => ObjectSchema<ErrorMessages>;

// Define the schema function
const customerSchemaFunction: CustomerSchemaFunction = (
  errorMessages,
  isEdit = false // Default to false if not provided
) => {
  let schema = object({
    name: string().required(errorMessages.name),
    owner: string().required(errorMessages.owner),
    address: string().required(errorMessages.address),
    tel: string().required(errorMessages.tel),
    email: string().required(errorMessages.email),
  });

  if (isEdit) {
    schema = schema.shape({
      password: string().required(errorMessages.password),
      password_confirmation: string().required(
        errorMessages.password_confirmation
      ),
    });
  }

  return schema as ObjectSchema<ErrorMessages>;
};

// Assign the schema function to customerSchema
export const customerSchema = customerSchemaFunction;
