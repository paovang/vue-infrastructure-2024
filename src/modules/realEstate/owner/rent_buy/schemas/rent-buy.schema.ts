import { object, string, ObjectSchema } from "yup";

interface ErrorMessages {
  remark?: string;
  date?: string;
}

// Define the schema function type alias
type RentOrBuySchemaFunction = (
  errorMessages: ErrorMessages
) => ObjectSchema<ErrorMessages>;

// Define the schema function
const rendBuySchemaFunction: RentOrBuySchemaFunction = (errorMessages) =>
  object({
    remark: string().required(errorMessages.remark),
    date: string().required(errorMessages.date),
  });

// Assign the schema function to customerSchema
export const rentBuyServiceSchema = rendBuySchemaFunction;
