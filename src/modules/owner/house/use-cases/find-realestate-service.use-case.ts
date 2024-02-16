import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import { HouseRepository } from "../repositories/house.repository";
import type { IHouseRepository } from "../interfaces/house.interface";
import { HouseEntity } from "../entities/house.entity";

@injectable()
export class FindRealEstateSeviceByHouseUseCase implements IUseCase {
  constructor(@inject(HouseRepository) private _api: IHouseRepository) {}

  async execute(id: HouseEntity): Promise<any> {
    return await this._api.findRealEstateServiceById(id);
  }
}
