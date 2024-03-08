import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import type { IRentAndBuyRepository } from "../interfaces/rent-buy.interface";
import { RentAndBuyRepository } from "../repositories/rent-buy.repository";
import { RentAndBuyEntity } from "../entities/rent-buy-entity";

@injectable()
export class DeleteRentAndBuyUseCase implements IUseCase {
  constructor(
    @inject(RentAndBuyRepository) private _api: IRentAndBuyRepository
  ) {}

  async execute(input: RentAndBuyEntity): Promise<any> {
    return await this._api.delete(input);
  }
}
