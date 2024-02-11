export interface RealEstateServiceEntity {
    id?: string
    country_id?: string,
    real_estate_type_id?: string,
    service_charge?: string,
    unit_price?: string,
    country?: {
        id: string
        name: string
    },
    real_estate_type?: {
        id: string,
        name: string
    }
    created_at?: string
    updated_at?: string
}