import { object, string, type ObjectSchema } from "yup";

export const reserveSchema: ObjectSchema<any> = object({
  customer: string().required("ກະລຸນາປ້ອນກ່ອນ..."),
  phone_number: string().required("ກະລຸນາປ້ອນກ່ອນ..."),
});
