import type { IGUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import { IResponse } from "@/common/interfaces/response.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { TranslateRealEstateTypeRepository } from "../../repositories/trans-real-estate-type.repository";
import type { ITranslateRealEstateTypeRepository } from "../../interfaces/trans-real-estate-type.interface";
import { TranslateRealEstateTypeEntity } from "../../entities/trans-real-estate-type.entity";

@injectable()
export class GetAllTranslateRealEstateTypeUseCase
  implements
    IGUseCase<
      IResponse<IGPaginated<TranslateRealEstateTypeEntity>>,
      IGPaginate<TranslateRealEstateTypeEntity>
    >
{
  constructor(
    @inject(TranslateRealEstateTypeRepository)
    private _api: ITranslateRealEstateTypeRepository
  ) {}

  async execute(
    input: IGPaginate<Pick<TranslateRealEstateTypeEntity, "name" | "id">>
  ): Promise<void | IResponse<IGPaginated<TranslateRealEstateTypeEntity>>> {
    try {
      return await this._api.getAll(input);
    } catch (error: any) {
      if (error.response.status === 422) {
        Object.keys(error.response.data.errors)
          .map((key) => `${key}: ${error.response.data.errors[key].join(", ")}`)
          .join("; ");
      }
    }
  }
}
