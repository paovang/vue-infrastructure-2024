import { inject, injectable } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { CreateTranslateRealEstateTypeUseCase } from "../use-cases/trans/create.use-case";
import { GetAllTranslateRealEstateTypeUseCase } from "../use-cases/trans/get-all.use-case";
import { UpdateTranslateRealEstateTypeUseCase } from "../use-cases/trans/update.use-case";
import { DeleteTranslateRealEstateTypeUseCase } from "../use-cases/trans/delete.use-case";
import { TranslateRealEstateTypeEntity } from "../entities/trans-real-estate-type.entity";

@injectable()
export class TranslateRealEstateTypeService {
  constructor(
    @inject(CreateTranslateRealEstateTypeUseCase)
    private _create: CreateTranslateRealEstateTypeUseCase,
    @inject(GetAllTranslateRealEstateTypeUseCase)
    private _getAll: GetAllTranslateRealEstateTypeUseCase,
    @inject(UpdateTranslateRealEstateTypeUseCase)
    private _update: UpdateTranslateRealEstateTypeUseCase,
    @inject(DeleteTranslateRealEstateTypeUseCase)
    private _delete: DeleteTranslateRealEstateTypeUseCase
  ) {}

  async register(input: TranslateRealEstateTypeEntity) {
    return await this._create.execute(input);
  }

  async update(input: TranslateRealEstateTypeEntity) {
    return await this._update.execute(input);
  }

  async delete(id: TranslateRealEstateTypeEntity) {
    return await this._delete.execute(id);
  }

  async getAll(
    input: IGPaginate<Pick<TranslateRealEstateTypeEntity, "name">>
  ): Promise<void | IResponse<IGPaginated<TranslateRealEstateTypeEntity>>> {
    return await this._getAll.execute(input);
  }
}
