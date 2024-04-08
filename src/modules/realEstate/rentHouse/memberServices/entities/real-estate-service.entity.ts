interface ServicePrices {
  service_charge?: number | string;
  currency_id?: string;
}

export interface RealEstateServiceEntity {
  id?: string;
  country_id?: string;
  real_estate_type_id?: string;
  unit_price?: string;
  real_estate_type?: {
    id: string;
    name: string;
  };
  serviceChargePrices?: ServicePrices[];
  created_at?: string;
  updated_at?: string;
}
