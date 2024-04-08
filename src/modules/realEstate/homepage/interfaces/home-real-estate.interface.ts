import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { HouseEntity } from "@/modules/realEstate/owner/house/entities/house.entity";
import { ReserveRealEstateEntity } from "../entities/reserve.entity";
import { SignUpEntity } from "../entities/sign-up.entity";

export interface IHomeRealEstateRepository {
  reserve(input: ReserveRealEstateEntity): Promise<any>;

  register(input: SignUpEntity): Promise<any>;

  getAll(
    args: IGPaginate<
      Pick<
        HouseEntity,
        | "real_estate_type_id"
        | "service_model"
        | "room_type"
        | "village"
        | "district_id"
        | "province_id"
        | "country_id"
        | "wide"
        | "long"
        | "search"
      >
    >
  ): Promise<IResponse<IGPaginated<HouseEntity>>>;

  getOne(id: number): Promise<any>;

  getAllData(filter: any): Promise<any>;

  getAboutUs(): Promise<any>;

  getCurrencies(): Promise<any>;

  getAllPolicy(): Promise<any>;
}
