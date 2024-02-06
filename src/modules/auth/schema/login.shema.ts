import { object, string, type ObjectSchema } from 'yup'

export const loginSchema: ObjectSchema<any> = object({
  email: string().required('ກະລຸນາປ້ອນອີເມວ'),
  password: string().required('ກະລຸນາປ້ອນລະຫັດຜ່ານ')
})