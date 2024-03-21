import { inject, injectable } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { DashboardEntity } from "../entities/entity";
import { CreateUseCase } from "../use-cases/create.use-case";
import { GetAllUseCase } from "../use-cases/get-all.use-case";
import { UpdateUseCase } from "../use-cases/update.use-case";
import { DeleteUseCase } from "../use-cases/delete.use-case";
import { ReportRealEstateTypeUseCase } from "../use-cases/report-real-estate-type.use-case";
import { HouseEntity } from "@/modules/realEstate/owner/house/entities/house.entity";
import { getAllCountryUseCase } from "../use-cases/get-country.use-case";
import { getAllProvinceUseCase } from "../use-cases/get-province.use-case";
import { getAllDistrictUseCase } from "../use-cases/get-district.use-case";

@injectable()
export class DashboardService {
  constructor(
    @inject(CreateUseCase)
    private _create: CreateUseCase,
    @inject(GetAllUseCase)
    private _getAll: GetAllUseCase,
    @inject(UpdateUseCase)
    private _update: UpdateUseCase,
    @inject(DeleteUseCase)
    private _delete: DeleteUseCase,
    @inject(ReportRealEstateTypeUseCase)
    private _reportRealEstateType: ReportRealEstateTypeUseCase,
    @inject(getAllCountryUseCase) private _getCountry: getAllCountryUseCase,
    @inject(getAllProvinceUseCase) private _getProvince: getAllProvinceUseCase,
    @inject(getAllDistrictUseCase) private _getDistrict: getAllDistrictUseCase
  ) {}

  async register(input: DashboardEntity) {
    return await this._create.execute(input);
  }

  async update(input: DashboardEntity) {
    return await this._update.execute(input);
  }

  async delete(id: DashboardEntity) {
    return await this._delete.execute(id);
  }

  async getCountries(): Promise<any> {
    return await this._getCountry.execute();
  }

  async getAllProvinces(id: HouseEntity): Promise<any> {
    return await this._getProvince.execute(id);
  }

  async getAllDistricts(id: HouseEntity): Promise<any> {
    return await this._getDistrict.execute(id);
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

  async reportRealEstateTypes(): Promise<any> {
    return await this._reportRealEstateType.execute();
  }
}