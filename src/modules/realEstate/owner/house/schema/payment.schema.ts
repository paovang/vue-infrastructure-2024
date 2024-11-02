import { object, string, type ObjectSchema } from "yup";

export const paymentSchema: ObjectSchema<any> = object({
  quantity: string().required("ກະລຸນາປ້ອນກ່ອນ..."),
  name: string().required("ກະລຸນາປ້ອນກ່ອນ..."),
  phone_number: string().required(""),
});
