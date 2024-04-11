import { object, string, ObjectSchema } from "yup";

interface ErrorMessages {
  village: string;
  location: string;
  name: string;
  wide: string;
}

// Define the schema function type alias
type HouseSchemaFunction = (
  errorMessages: ErrorMessages
) => ObjectSchema<ErrorMessages>;

// Define the schema function
const houseSchemaFunction: HouseSchemaFunction = (errorMessages) =>
  object({
    village: string().required(errorMessages.village),
    location: string().required(errorMessages.location),
    name: string().required(errorMessages.name),
    wide: string().required(errorMessages.wide),
  });

// Assign the schema function to customerSchema
export const houseSchema = houseSchemaFunction;
