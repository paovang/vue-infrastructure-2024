interface Price {
  price?: number | string;
  unit_price?: string;
  detail?: string;
}

export interface HouseEntity {
  id?: string;
  real_estate_type_id?: string;
  district_id?: string;
  province_id?: string;
  service_charge_id?: string;
  real_estate_type?: {
    id?: string;
    name?: string;
  };
  service_model?: string;
  image?: string;
  name?: string;
  room_type?: string;
  village?: string;
  district?: {
    id?: string;
    name?: string;
    province_id?: string;
    province: {
      id?: string;
      name?: string;
      countries_id?: string;
    };
  };
  province?: {
    id?: string;
    name?: string;
  };
  country?: {
    id?: string;
    name?: string;
    currency?: string;
  };
  location?: string;
  zip_code?: string;
  wide?: string;
  long?: string;
  remark?: string;
  status?: string;
  price?: Price[];
  prices?: Price[];
  gallery?: {
    id?: string;
    image?: string;
  };
  payment?: {
    id?: string;
    quantity?: number;
    fromDate?: Date;
    filezPaySlip: string;
  };
  created_at?: string;
  updated_at?: string;
}
