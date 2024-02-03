import { object, string, type ObjectSchema } from 'yup'

export const districtSchema: ObjectSchema<any> = object({
  name: string().required('ກະລຸນາປ້ອນຊື່ກ່ອນ...')
})