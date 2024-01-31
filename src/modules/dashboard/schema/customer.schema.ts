import { object, string, type ObjectSchema } from 'yup'

export const createCustomerSchema: ObjectSchema<any> = object({
  id: string(),
  referal_code: string().required('ກະລຸນາປ້ອ referal_code ນກ່ອນ...'),
})