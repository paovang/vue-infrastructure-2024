import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { RentAndBuyEntity } from "../entities/rent-buy-entity";

export interface IRentAndBuyRepository {
  create(input: RentAndBuyEntity): Promise<any>;

  update(input: RentAndBuyEntity): Promise<any>;

  delete(id: RentAndBuyEntity): Promise<any>;

  getAll(
    args: IGPaginate<
      Pick<RentAndBuyEntity, "service_model" | "from_date" | "to_date">
    >
  ): Promise<IResponse<IGPaginated<RentAndBuyEntity>>>;

  getOne(id: number): Promise<any>;

  getRealEstatePrices(id: number): Promise<any>;

  getRealEstateOnline(): Promise<any>;
}
