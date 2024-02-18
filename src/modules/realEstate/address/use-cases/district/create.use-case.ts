import { DistrictEntity } from "../../entities/district.entity";
import { DistrictRepository } from "../../repositories/district.repository";
import type { IUseCase } from "@/common/interfaces/use-case.interface";
import type { IDistrictRepository } from "../../interfaces/district.interface";
import { injectable, inject } from "tsyringe";

@injectable()
export class CreateDistrictUseCase implements IUseCase {
  constructor(@inject(DistrictRepository) private _api: IDistrictRepository) {}

  async execute(input: DistrictEntity): Promise<any> {
    return await this._api.create(input);
  }
}
