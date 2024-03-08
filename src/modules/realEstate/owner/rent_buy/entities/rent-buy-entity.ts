export interface RentAndBuyEntity {
  id?: string;
  name?: string;
  reason?: string;
  service_model?: string;
  customer_name?: string;
  customer_tel?: string;
  date_appointment?: Date | string;
  from_date?: Date | string;
  to_date?: Date | string;
  qty?: number | string;
  price?: number | string;
  unit_price?: string;
  currency?: string;
  detail?: string;
  status?: string;
  appointment_id?: string;
  estate_list?: {
    id: number | string;
    real_esate_number?: string;
    name?: string;
    service_model?: string;
    image?: string;
    room_type?: string;
    village?: string;
    location?: string;
    zip_code?: string;
    wide?: string;
    long?: string;
    remark?: string;
    real_estate_type?: {
      id?: number | string;
      name?: string;
    };
    account?: {
      id: number | string;
      name: string;
      customer_number?: string;
      owner?: string;
      address?: string;
      tel?: string;
    };
    district?: {
      id: number | string;
      name: string;
      province?: {
        id: number | string;
        name: string;
      };
      country?: {
        id: number | string;
        name: string;
        currency?: string;
      };
    };
  };
  created_at?: string;
  updated_at?: string;
}
