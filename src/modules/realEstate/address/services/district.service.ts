import { DistrictEntity } from "../entities/district.entity";
import { inject, injectable } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { CreateDistrictUseCase } from "../use-cases/district/create.use-case";
import { GetAllDistrictUseCase } from "../use-cases/district/get-all.use-case";
import { UpdateDistrictUseCase } from "../use-cases/district/update.use-case";
import { DeleteDistrictUseCase } from "../use-cases/district/delete.use-case";

@injectable()
export class DistrictService {
  constructor(
    @inject(CreateDistrictUseCase) private _create: CreateDistrictUseCase,
    @inject(GetAllDistrictUseCase) private _getAll: GetAllDistrictUseCase,
    @inject(UpdateDistrictUseCase) private _update: UpdateDistrictUseCase,
    @inject(DeleteDistrictUseCase) private _delete: DeleteDistrictUseCase
  ) {}

  async register(input: DistrictEntity) {
    return await this._create.execute(input);
  }

  async update(input: DistrictEntity) {
    return await this._update.execute(input);
  }

  async delete(id: DistrictEntity) {
    return await this._delete.execute(id);
  }

  async getAll(
    input: IGPaginate<Pick<DistrictEntity, "name" | "province_id">>
  ): Promise<void | IResponse<IGPaginated<DistrictEntity>>> {
    return await this._getAll.execute(input);
  }
}
