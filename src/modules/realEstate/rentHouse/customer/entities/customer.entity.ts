export interface CustomerEntity {
    id?: string
    name: string,
    owner?: string,
    address?: string,
    tel?: string,
    email?: string,
    password?: string,
    password_confirmation?: string,
    country_id?: string,
    country?: {
        id?: string,
        name?: string,
    },
    created_at?: string
    updated_at?: string
}