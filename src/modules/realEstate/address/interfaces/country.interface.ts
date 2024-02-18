import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { CountryEntity } from "../entities/country.entity";
import { IResponse } from "@/common/interfaces/response.interface";

export interface ICountryRepository {
  create(input: CountryEntity): Promise<any>;

  update(input: CountryEntity): Promise<any>;

  delete(id: CountryEntity): Promise<any>;

  getAll(
    args: IGPaginate<Pick<CountryEntity, "name">>
  ): Promise<IResponse<IGPaginated<CountryEntity>>>;

  getById(id: number): Promise<any>;
}
