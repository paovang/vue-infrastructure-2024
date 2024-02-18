import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { HouseEntity } from "../entities/house.entity";

export interface IHouseRepository {
  create(input: HouseEntity): Promise<any>;

  update(input: HouseEntity): Promise<any>;

  delete(id: HouseEntity): Promise<any>;

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
        | "wide"
        | "long"
      >
    >
  ): Promise<IResponse<IGPaginated<HouseEntity>>>;

  getOne(id: number): Promise<any>;

  findRealEstateServiceById(id: HouseEntity): Promise<any>;

  /* Gallery */
  deleteGallery(id: string): Promise<any>;

  updateGallery(input: HouseEntity): Promise<any>;

  addGallery(input: HouseEntity): Promise<any>;

  paymentService(input: HouseEntity): Promise<any>;
}
