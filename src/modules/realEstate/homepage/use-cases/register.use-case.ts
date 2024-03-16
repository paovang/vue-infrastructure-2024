import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import type { IHomeRealEstateRepository } from "../interfaces/home-real-estate.interface";
import { HomeRealEstateRepository } from "../repositories/home.repository";
import { SignUpEntity } from "../entities/sign-up.entity";

@injectable()
export class RegisterCustomerUseCase implements IUseCase {
  constructor(
    @inject(HomeRealEstateRepository) private _api: IHomeRealEstateRepository
  ) {}

  async execute(input: SignUpEntity): Promise<any> {
    return await this._api.register(input);
  }
}
