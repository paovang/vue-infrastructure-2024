import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { RealEstateTypeEntity } from "../entities/real-estate-type.entity";

export interface ITranslateRealEstateTypeRepository {
  create(input: RealEstateTypeEntity): Promise<any>;

  update(input: RealEstateTypeEntity): Promise<any>;

  delete(id: RealEstateTypeEntity): Promise<any>;

  getAll(
    args: IGPaginate<Pick<RealEstateTypeEntity, "name" | "id">>
  ): Promise<IResponse<IGPaginated<RealEstateTypeEntity>>>;

  getById(id: number): Promise<any>;
}
