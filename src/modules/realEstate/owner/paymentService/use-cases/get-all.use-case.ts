import type { IGUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import { IResponse } from "@/common/interfaces/response.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { PaymentServiceHouseRepository } from "../repositories/payment.repository";
import type { IPaymentServiceHouseRepository } from "../interfaces/payment.interface";
import { PaymentEntity } from "../entities/payment.entity";

@injectable()
export class GetAllPaymentServiceHouseUseCase
  implements
    IGUseCase<IResponse<IGPaginated<PaymentEntity>>, IGPaginate<PaymentEntity>>
{
  constructor(
    @inject(PaymentServiceHouseRepository)
    private _api: IPaymentServiceHouseRepository
  ) {}

  async execute(
    input: IGPaginate<Pick<PaymentEntity, "status" | "date_payment">>
  ): Promise<void | IResponse<IGPaginated<PaymentEntity>>> {
    try {
      return await this._api.getAll(input);
    } catch (error: any) {
      if (error.response.status === 422) {
        Object.keys(error.response.data.errors)
          .map((key) => `${key}: ${error.response.data.errors[key].join(", ")}`)
          .join("; ");
      }
    }
  }
}
