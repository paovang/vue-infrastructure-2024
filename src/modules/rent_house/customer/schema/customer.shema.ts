import { object, string, type ObjectSchema } from 'yup'

export const customerSchema: ObjectSchema<any> = object({
  name: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
  owner: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
  address: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
  tel: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
  email: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
  password: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
  password_confirmation: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
})