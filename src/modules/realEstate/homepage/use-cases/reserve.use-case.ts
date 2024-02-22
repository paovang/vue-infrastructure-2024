import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import type { IHomeRealEstateRepository } from "../interfaces/home-real-estate.interface";
import { HomeRealEstateRepository } from "../repositories/home.repository";
import { ReserveRealEstateEntity } from "../entities/reserve.entity";

@injectable()
export class ReserveRealEstateUseCase implements IUseCase {
  constructor(
    @inject(HomeRealEstateRepository) private _api: IHomeRealEstateRepository
  ) {}

  async execute(input: ReserveRealEstateEntity): Promise<any> {
    return await this._api.reserve(input);
  }
}
