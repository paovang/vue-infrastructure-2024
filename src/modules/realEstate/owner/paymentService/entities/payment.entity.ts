export interface PaymentEntity {
  id?: string;
  real_estate_list_id?: string;
  service_charge_id?: string;
  fromDate?: Date;
  date_payment?: Date | null;
  quantity?: number;
  paySlip?: string;
  amount?: number;
  currency?: string;
  from_date?: Date;
  qty?: number;
  slip_payment?: string;
  status?: string;
  to_date?: Date;
  unit_price?: string;
  filename?: string;
  created_at?: string;
  updated_at?: string;
}
