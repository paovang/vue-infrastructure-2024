import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import type { IHouseRepository } from "../interfaces/house.interface";
import { HouseRepository } from "../repositories/house.repository";
import { HouseEntity } from "../entities/house.entity";

@injectable()
export class CustomerReferUseCase implements IUseCase {
  constructor(@inject(HouseRepository) private _api: IHouseRepository) {}

  async execute(input: HouseEntity): Promise<any> {
    return await this._api.customerRefer(input);
  }
}
