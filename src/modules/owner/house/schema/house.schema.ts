import { object, string, type ObjectSchema } from 'yup'

export const houseSchema: ObjectSchema<any> = object({
    village: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
    // real_estate_type: string().required('ກະລຸນາເລືອກກ່ອນ...'),
    // image: string().required('ກະລຸນາເລືອກກ່ອນ...'),
    // gallery: string().required('ກະລຸນາເລືອກກ່ອນ...'),
    // location: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
    // wide: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
    // long: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
    // zipcode: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
    // remark: string().required('ກະລຸນາປ້ອນກ່ອນ...'),
})