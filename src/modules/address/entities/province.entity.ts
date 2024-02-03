export interface ProvinceEntity {
    id?: string
    name: string,
    country_id?: string,
    country?: {
        id: string,
        name: string
    },
    created_at?: string
    updated_at?: string
}