import { ProvinceEntity } from "../entities/province.entity";
import { inject, injectable } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { CreateProvinceUseCase } from "../use-cases/province/create.use-case";
import { GetAllProvinceUseCase } from "../use-cases/province/get-all.use-case";
import { UpdateProvinceUseCase } from "../use-cases/province/update.use-case";
import { DeleteProvinceUseCase } from "../use-cases/province/delete.use-case";

@injectable()
export class ProvinceService {
  constructor(
    @inject(CreateProvinceUseCase) private _create: CreateProvinceUseCase,
    @inject(GetAllProvinceUseCase) private _getAll: GetAllProvinceUseCase,
    @inject(UpdateProvinceUseCase) private _update: UpdateProvinceUseCase,
    @inject(DeleteProvinceUseCase) private _delete: DeleteProvinceUseCase
  ) {}

  async register(input: ProvinceEntity) {
    return await this._create.execute(input);
  }

  async update(input: ProvinceEntity) {
    return await this._update.execute(input);
  }

  async delete(id: ProvinceEntity) {
    return await this._delete.execute(id);
  }

  async getAll(
    input: IGPaginate<Pick<ProvinceEntity, "name">>
  ): Promise<void | IResponse<IGPaginated<ProvinceEntity>>> {
    return await this._getAll.execute(input);
  }
}
