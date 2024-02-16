import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { PaymentEntity } from "../entities/payment.entity";

export interface IPaymentServiceHouseRepository {
  paymentService(input: PaymentEntity): Promise<any>;

  update(input: PaymentEntity): Promise<any>;

  delete(id: PaymentEntity): Promise<any>;

  getAll(
    args: IGPaginate<Pick<PaymentEntity, "service_charge_id" | "date_payment">>
  ): Promise<IResponse<IGPaginated<PaymentEntity>>>;

  getOne(id: number): Promise<any>;
}
