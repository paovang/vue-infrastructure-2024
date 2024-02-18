import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import { PaymentEntity } from "../entities/payment.entity";
import type { IPaymentServiceHouseRepository } from "../interfaces/payment.interface";
import { PaymentServiceHouseRepository } from "../repositories/payment.repository";

@injectable()
export class UpdatePaymentServiceHouseUseCase implements IUseCase {
  constructor(
    @inject(PaymentServiceHouseRepository)
    private _api: IPaymentServiceHouseRepository
  ) {}

  async execute(input: PaymentEntity): Promise<any> {
    return await this._api.update(input);
  }
}
