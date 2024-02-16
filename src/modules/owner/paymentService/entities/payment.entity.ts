export interface PaymentEntity {
  id?: string;
  service_charge_id?: string;
  fromDate?: Date;
  date_payment?: Date;
  quantity?: number;
  paySlip?: string;
  created_at?: string;
  updated_at?: string;
}
