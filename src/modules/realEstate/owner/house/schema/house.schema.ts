import { object, string, type ObjectSchema } from "yup";

export const houseSchema: ObjectSchema<any> = object({
  village: string().required("ກະລຸນາປ້ອນກ່ອນ..."),
  location: string().required("ກະລຸນາປ້ອນກ່ອນ..."),
  name: string().required("ກະລຸນາປ້ອນກ່ອນ..."),
  wide: string().required("ກະລຸນາປ້ອນກ່ອນ..."),
  long: string().required("ກະລຸນາປ້ອນກ່ອນ..."),
});
