import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import type { IRentAndBuyRepository } from "../interfaces/rent-buy.interface";
import { RentAndBuyRepository } from "../repositories/rent-buy.repository";

@injectable()
export class GetOneRentAndBuyUseCase implements IUseCase {
  constructor(
    @inject(RentAndBuyRepository) private _api: IRentAndBuyRepository
  ) {}

  async execute(id: number): Promise<any> {
    return await this._api.getOne(id);
  }
}
