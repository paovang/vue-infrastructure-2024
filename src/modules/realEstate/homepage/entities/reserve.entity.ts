export interface ReserveRealEstateEntity {
  id?: string;
  date_appointment?: Date | string;
  customer_name?: string;
  customer_tel?: string;
  real_estate_type_id?: string;
  service_model?: string;
  description?: string;
  room_type?: string;
  total_bed?: string;
  total_bath?: string;
  province_id?: string;
  district_id?: string;
  country_id?: string;
  created_at?: string;
  updated_at?: string;
}
