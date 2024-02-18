import { object, string, ObjectSchema } from "yup";

interface ErrorMessages {
  name: string;
  currency: string;
}

// Define the schema function type alias
type CountrySchemaFunction = (
  errorMessages: ErrorMessages
) => ObjectSchema<ErrorMessages>;

// Define the schema function
const countrySchemaFunction: CountrySchemaFunction = (errorMessages) =>
  object({
    name: string().required(errorMessages.name),
    currency: string().required(errorMessages.currency),
  });

// Assign the schema function to customerSchema
export const countrySchema = countrySchemaFunction;
