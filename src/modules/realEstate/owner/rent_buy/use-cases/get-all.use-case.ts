import type { IGUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import { IResponse } from "@/common/interfaces/response.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import type { IRentAndBuyRepository } from "../interfaces/rent-buy.interface";
import { RentAndBuyRepository } from "../repositories/rent-buy.repository";
import { RentAndBuyEntity } from "../entities/rent-buy-entity";

@injectable()
export class GetAllRentAndBuyUseCase
  implements
    IGUseCase<
      IResponse<IGPaginated<RentAndBuyEntity>>,
      IGPaginate<RentAndBuyEntity>
    >
{
  constructor(
    @inject(RentAndBuyRepository) private _api: IRentAndBuyRepository
  ) {}

  async execute(
    input: IGPaginate<
      Pick<RentAndBuyEntity, "service_model" | "from_date" | "to_date">
    >
  ): Promise<void | IResponse<IGPaginated<RentAndBuyEntity>>> {
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
