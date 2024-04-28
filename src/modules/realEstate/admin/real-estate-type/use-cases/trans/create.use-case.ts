import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import { TranslateRealEstateTypeEntity } from "../../entities/trans-real-estate-type.entity";
import type { ITranslateRealEstateTypeRepository } from "../../interfaces/trans-real-estate-type.interface";
import { TranslateRealEstateTypeRepository } from "../../repositories/trans-real-estate-type.repository";

@injectable()
export class CreateTranslateRealEstateTypeUseCase implements IUseCase {
  constructor(
    @inject(TranslateRealEstateTypeRepository)
    private _api: ITranslateRealEstateTypeRepository
  ) {}

  async execute(input: TranslateRealEstateTypeEntity): Promise<any> {
    return await this._api.create(input);
  }
}
