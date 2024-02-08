import { object, string, type ObjectSchema } from 'yup'

export const realEstateServiceSchema: ObjectSchema<any> = object({
    service_charge: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
})