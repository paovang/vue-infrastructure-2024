import { inject, injectable } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { GetAllRentAndBuyUseCase } from "../use-cases/get-all.use-case";
import { RentAndBuyEntity } from "../entities/rent-buy-entity";
import { GetOneRentAndBuyUseCase } from "../use-cases/get-one.use-case";
import { UpdateRentAndBuyUseCase } from "../use-cases/update.use-case";
import { DeleteRentAndBuyUseCase } from "../use-cases/delete.use-case";
import { CreateRentAndBuyUseCase } from "../use-cases/create.use-case";
import { GetRealEstatePricesUseCase } from "../use-cases/get-real-estate-prices.use-case";
import { GetRealEstateOnlineUseCase } from "../use-cases/get-real-estate-online.use-case";

@injectable()
export class RentAndBuyService {
  constructor(
    @inject(GetAllRentAndBuyUseCase) private _getAll: GetAllRentAndBuyUseCase,
    @inject(GetOneRentAndBuyUseCase) private _getOne: GetOneRentAndBuyUseCase,
    @inject(UpdateRentAndBuyUseCase)
    private _update: UpdateRentAndBuyUseCase,
    @inject(DeleteRentAndBuyUseCase) private _delete: DeleteRentAndBuyUseCase,
    @inject(CreateRentAndBuyUseCase) private _create: CreateRentAndBuyUseCase,
    @inject(GetRealEstatePricesUseCase)
    private _getPrices: GetRealEstatePricesUseCase,
    @inject(GetRealEstateOnlineUseCase)
    private _getRealEstateOnline: GetRealEstateOnlineUseCase
  ) {}

  async create(input: RentAndBuyEntity) {
    return await this._create.execute(input);
  }

  async update(input: RentAndBuyEntity) {
    return await this._update.execute(input);
  }

  async delete(id: RentAndBuyEntity) {
    return await this._delete.execute(id);
  }

  async getAll(
    input: IGPaginate<
      Pick<RentAndBuyEntity, "service_model" | "from_date" | "to_date">
    >
  ): Promise<void | IResponse<IGPaginated<RentAndBuyEntity>>> {
    return await this._getAll.execute(input);
  }

  async getOne(id: number): Promise<any> {
    return await this._getOne.execute(id);
  }

  async getRealEstatePrices(id: number): Promise<any> {
    return await this._getPrices.execute(id);
  }
  async getRealEstateOnline(): Promise<any> {
    return await this._getRealEstateOnline.execute();
  }
}
