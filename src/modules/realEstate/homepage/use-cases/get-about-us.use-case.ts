import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import type { IHomeRealEstateRepository } from "../interfaces/home-real-estate.interface";
import { HomeRealEstateRepository } from "../repositories/home.repository";

@injectable()
export class GetAboutUsUseCase implements IUseCase {
  constructor(
    @inject(HomeRealEstateRepository) private _api: IHomeRealEstateRepository
  ) {}

  async execute(): Promise<any> {
    return await this._api.getAboutUs();
  }
}
