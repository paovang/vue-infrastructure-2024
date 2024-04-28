import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import { TranslateRealEstateTypeRepository } from "../../repositories/trans-real-estate-type.repository";
import type { ITranslateRealEstateTypeRepository } from "../../interfaces/trans-real-estate-type.interface";
import { TranslateRealEstateTypeEntity } from "../../entities/trans-real-estate-type.entity";

@injectable()
export class DeleteTranslateRealEstateTypeUseCase implements IUseCase {
  constructor(
    @inject(TranslateRealEstateTypeRepository)
    private _api: ITranslateRealEstateTypeRepository
  ) {}

  async execute(id: TranslateRealEstateTypeEntity): Promise<any> {
    return await this._api.delete(id);
  }
}
