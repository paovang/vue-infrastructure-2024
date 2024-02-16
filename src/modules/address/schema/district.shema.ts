import { object, string, ObjectSchema } from "yup";

interface ErrorMessages {
  name: string;
}

// Define the schema function type alias
type DistrictSchemaFunction = (
  errorMessages: ErrorMessages
) => ObjectSchema<ErrorMessages>;

// Define the schema function
const districtSchemaFunction: DistrictSchemaFunction = (errorMessages) =>
  object({
    name: string().required(errorMessages.name),
  });

// Assign the schema function to customerSchema
export const districtSchema = districtSchemaFunction;
