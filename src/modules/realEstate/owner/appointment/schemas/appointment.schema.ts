import { object, string, ObjectSchema } from "yup";

interface ErrorMessages {
  reason: string;
}

// Define the schema function type alias
type AppointmentSchemaFunction = (
  errorMessages: ErrorMessages
) => ObjectSchema<ErrorMessages>;

// Define the schema function
const appointmentSchemaFunction: AppointmentSchemaFunction = (errorMessages) =>
  object({
    reason: string().required(errorMessages.reason),
  });

// Assign the schema function to customerSchema
export const appointmentServiceSchema = appointmentSchemaFunction;
