import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import { RentAndBuyRepository } from "../repositories/rent-buy.repository";
import type { IRentAndBuyRepository } from "../interfaces/rent-buy.interface";
import { RentAndBuyEntity } from "../entities/rent-buy-entity";

@injectable()
export class UpdateRentAndBuyUseCase implements IUseCase {
  constructor(
    @inject(RentAndBuyRepository) private _api: IRentAndBuyRepository
  ) {}

  async execute(input: RentAndBuyEntity): Promise<any> {
    return await this._api.update(input);
  }
}
