import { inject, injectable } from "tsyringe";
import { PaymentEntity } from "../entities/payment.entity";
import { PaymentServiceHouseUseCase } from "../use-cases/payment.use-case";
import { GetAllPaymentServiceHouseUseCase } from "../use-cases/get-all.use-case";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { GetOnePaymentServiceHouseUseCase } from "../use-cases/get-one.use-case";
import { UpdatePaymentServiceHouseUseCase } from "../use-cases/update.use-case";
import { DeletePaymentServiceHouseUseCase } from "../use-cases/delete.use-case";

@injectable()
export class PaymentHouseService {
  constructor(
    @inject(PaymentServiceHouseUseCase)
    private _payment: PaymentServiceHouseUseCase,
    @inject(GetAllPaymentServiceHouseUseCase)
    private _getAll: GetAllPaymentServiceHouseUseCase,
    @inject(GetOnePaymentServiceHouseUseCase)
    private _getOne: GetOnePaymentServiceHouseUseCase,
    @inject(UpdatePaymentServiceHouseUseCase)
    private _update: UpdatePaymentServiceHouseUseCase,
    @inject(DeletePaymentServiceHouseUseCase)
    private _delete: DeletePaymentServiceHouseUseCase
  ) {}

  async paymentService(input: PaymentEntity) {
    return await this._payment.execute(input);
  }

  async update(input: PaymentEntity) {
    return await this._update.execute(input);
  }

  async delete(id: PaymentEntity) {
    return await this._delete.execute(id);
  }

  async getAll(
    input: IGPaginate<Pick<PaymentEntity, "status" | "date_payment">>
  ): Promise<void | IResponse<IGPaginated<PaymentEntity>>> {
    return await this._getAll.execute(input);
  }

  async getOne(id: number): Promise<any> {
    return await this._getOne.execute(id);
  }
}
