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
    @inject(RegisterCustomerUseCase) private _register: RegisterCustomerUseCase
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
        | "wide"
        | "long"
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
}
