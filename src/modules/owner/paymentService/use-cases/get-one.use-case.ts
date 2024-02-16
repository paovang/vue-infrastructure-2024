import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import type { IPaymentServiceHouseRepository } from "../interfaces/payment.interface";
import { PaymentServiceHouseRepository } from "../repositories/payment.repository";

@injectable()
export class GetOnePaymentServiceHouseUseCase implements IUseCase {
  constructor(
    @inject(PaymentServiceHouseRepository)
    private _api: IPaymentServiceHouseRepository
  ) {}

  async execute(id: number): Promise<any> {
    return await this._api.getOne(id);
  }
}
