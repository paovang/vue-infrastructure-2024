import { ProvinceRepository } from "../../repositories/province.repository";
import type { IUseCase } from "@/common/interfaces/use-case.interface";
import type { IProvinceRepository } from "../../interfaces/province.interface";
import { injectable, inject } from "tsyringe";
import { ProvinceEntity } from "../../entities/province.entity";

@injectable()
export class CreateProvinceUseCase implements IUseCase {
  constructor(@inject(ProvinceRepository) private _api: IProvinceRepository) {}

  async execute(input: ProvinceEntity): Promise<any> {
    return await this._api.create(input);
  }
}
