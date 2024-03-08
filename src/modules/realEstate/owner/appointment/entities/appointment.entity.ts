interface Prices {
  id?: number | string;
  price?: number | string;
  unit_price?: string;
  currency?: string;
  detail?: string;
}

interface Gallery {
  id?: number | string;
  image?: string;
}

export interface AppointmentEntity {
  id?: string;
  name?: string;
  reason?: string;
  customer_name?: string;
  customer_tel?: string;
  date_appointment?: Date | string;
  status?: string;
  prices?: Prices[];
  gallery?: Gallery[];
  estate_list?: {
    id: number | string;
    service_model?: string;
    image?: string;
    location?: string;
    zip_code?: string;
    wide?: string;
    long?: string;
    remark?: string;
    real_estate_type?: {
      id?: string;
      name?: string;
    };
  };
  created_at?: string;
  updated_at?: string;
}
