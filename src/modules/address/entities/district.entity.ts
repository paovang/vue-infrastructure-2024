export interface DistrictEntity {
    id?: string
    name: string,
    province_id?: string,
    province?: {
        id: string,
        name: string
    },
    created_at?: string
    updated_at?: string
}