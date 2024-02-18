import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import type { IHouseRepository } from "../interfaces/house.interface";
import { HouseRepository } from "../repositories/house.repository";

@injectable()
export class DeleteGalleryHouseUseCase implements IUseCase {
  constructor(@inject(HouseRepository) private _api: IHouseRepository) {}

  async execute(input: string): Promise<any> {
    return await this._api.deleteGallery(input);
  }
}
