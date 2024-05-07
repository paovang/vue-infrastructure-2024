import { inject, injectable } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { GetAllHomeRealEstateUseCase } from "../use-cases/get-all.use-case";
import { HouseEntity } from "@/modules/realEstate/owner/house/entities/house.entity";
import { GetOneHomeRealEstateUseCase } from "../use-cases/get-one.use-case";
import { ReserveRealEstateUseCase } from "../use-cases/reserve.use-case";
import { ReserveRealEstateEntity } from "../entities/reserve.entity";
import { GetAllDataHomeRealEstateUseCase } from "../use-cases/get-all-data";
import { RegisterCustomerUseCase } from "../use-cases/register.use-case";
import { SignUpEntity } from "../entities/sign-up.entity";
import { GetAboutUsUseCase } from "../use-cases/get-about-us.use-case";
import { GetAllCurrenciesUseCase } from "../use-cases/get-currency";
import { GetAllPolicyUseCase } from "../use-cases/get-all-policy.use-case";

@injectable()
export class HomeRealEstateService {
  constructor(
    @inject(GetAllHomeRealEstateUseCase)
    private _getAll: GetAllHomeRealEstateUseCase,
    @inject(GetOneHomeRealEstateUseCase)
    private _getOne: GetOneHomeRealEstateUseCase,
    @inject(ReserveRealEstateUseCase)
    private _reserve: ReserveRealEstateUseCase,
    @inject(GetAllDataHomeRealEstateUseCase)
    private _getAllData: GetAllDataHomeRealEstateUseCase,
    @inject(RegisterCustomerUseCase) private _register: RegisterCustomerUseCase,
    @inject(GetAboutUsUseCase) private _getAboutUs: GetAboutUsUseCase,
    @inject(GetAllCurrenciesUseCase)
    private _getAllCurrencies: GetAllCurrenciesUseCase,
    @inject(GetAllPolicyUseCase) private _getAllPolicy: GetAllPolicyUseCase
  ) {}

  async reserve(input: ReserveRealEstateEntity) {
    return await this._reserve.execute(input);
  }

  async getAll(
    input: IGPaginate<
      Pick<
        HouseEntity,
        | "real_estate_type_id"
        | "service_model"
        | "room_type"
        | "village"
        | "district_id"
        | "province_id"
        | "country_id"
        | "total_bed"
        | "total_bath"
        | "search"
      >
    >
  ): Promise<void | IResponse<IGPaginated<HouseEntity>>> {
    return await this._getAll.execute(input);
  }

  async getOne(id: number): Promise<any> {
    return await this._getOne.execute(id);
  }

  async getAllData(filter: any): Promise<any> {
    return await this._getAllData.execute(filter);
  }

  async register(input: SignUpEntity): Promise<any> {
    return await this._register.execute(input);
  }

  async getAboutUs(): Promise<any> {
    return await this._getAboutUs.execute();
  }

  async getCurrencies(): Promise<any> {
    return await this._getAllCurrencies.execute();
  }

  async getAllPolicy(): Promise<any> {
    return await this._getAllPolicy.execute();
  }
}
