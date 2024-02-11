interface Price {
    price?: number | string;
    unit_price?: string;
    detail?: string;
}

export interface HouseEntity {
    id?: string,
    real_estate_type_id?: string,
    district_id?: string,
    province_id?: string,
    real_estate_type?: {
        id?: string,
        name?: string
    },
    service_model?: string,
    image?: string,
    room_type?: string,
    village?: string,
    district?: {
        id?: string,
        name?: string,
        province_id?: string,
        province: {
            id?: string,
            name?: string,
            countries_id?: string
        },
    },
    province?: {
        id?: string,
        name?: string,
    }
    location?: string,
    zip_code?: string,
    wide?: string,
    long?: string,
    remark?: string,
    prices?: Price[];
    gallery?: {
        id?: string,
        image?: string
    }
    created_at?: string
    updated_at?: string
}