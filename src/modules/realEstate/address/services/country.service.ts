import { GetAllCountryUseCase } from "../use-cases/country/get-all.use-case";
import { CountryEntity } from "../entities/country.entity";
import { CreateCountryUseCase } from "../use-cases/country/create.use-case";
import { inject, injectable } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { UpdateCountryUseCase } from "../use-cases/country/update.use-case";
import { DeleteCountryUseCase } from "../use-cases/country/delete.use-case";

@injectable()
export class CountryService {
  constructor(
    @inject(CreateCountryUseCase) private _create: CreateCountryUseCase,
    @inject(GetAllCountryUseCase) private _getAll: GetAllCountryUseCase,
    @inject(UpdateCountryUseCase) private _update: UpdateCountryUseCase,
    @inject(DeleteCountryUseCase) private _delete: DeleteCountryUseCase
  ) {}

  async register(input: CountryEntity) {
    return await this._create.execute(input);
  }

  async update(input: CountryEntity) {
    return await this._update.execute(input);
  }

  async delete(id: CountryEntity) {
    return await this._delete.execute(id);
  }

  async getAll(
    input: IGPaginate<Pick<CountryEntity, "name">>
  ): Promise<void | IResponse<IGPaginated<CountryEntity>>> {
    return await this._getAll.execute(input);
  }
}
