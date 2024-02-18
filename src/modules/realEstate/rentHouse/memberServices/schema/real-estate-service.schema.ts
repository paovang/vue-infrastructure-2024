import { object, string, ObjectSchema } from "yup";

interface ErrorMessages {
  service_charge: string;
}

// Define the schema function type alias
type RealEstateSchemaFunction = (
  errorMessages: ErrorMessages
) => ObjectSchema<ErrorMessages>;

// Define the schema function
const realEstateSchemaFunction: RealEstateSchemaFunction = (errorMessages) =>
  object({
    service_charge: string().required(errorMessages.service_charge),
  });

// Assign the schema function to customerSchema
export const realEstateServiceSchema = realEstateSchemaFunction;
