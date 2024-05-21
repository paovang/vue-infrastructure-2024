import { inject, injectable } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { CreateHouseUseCase } from "../use-cases/create-use-case";
import { GetAllHouseUseCase } from "../use-cases/get-all-use-case";
import { UpdateHouseUseCase } from "../use-cases/update-use-case";
import { DeleteHouseUseCase } from "../use-cases/delete-use-case";
import { GetOneHouseUseCase } from "../use-cases/get-one-use-case";
import { HouseEntity } from "../entities/house.entity";
import { DeleteGalleryHouseUseCase } from "../use-cases/delete-gallery.use-case";
import { UpdateGalleryHouseUseCase } from "../use-cases/update-gallery.use-case";
import { AddGalleryHouseUseCase } from "../use-cases/add-gallery.use-case";
import { FindRealEstateSeviceByHouseUseCase } from "../use-cases/find-realestate-service.use-case";
import { PaymentServiceHouseUseCase } from "../use-cases/payment/payment.use-case";
import { UpdateStatusHouseUseCase } from "../use-cases/update-status.use-case";
import { CustomerReferUseCase } from "../use-cases/customer-refer.use-case";

@injectable()
export class HouseService {
  constructor(
    @inject(CreateHouseUseCase) private _create: CreateHouseUseCase,
    @inject(GetAllHouseUseCase) private _getAll: GetAllHouseUseCase,
    @inject(UpdateHouseUseCase) private _update: UpdateHouseUseCase,
    @inject(DeleteHouseUseCase) private _delete: DeleteHouseUseCase,
    @inject(GetOneHouseUseCase) private _getOne: GetOneHouseUseCase,
    @inject(UpdateGalleryHouseUseCase)
    private _updateGallery: UpdateGalleryHouseUseCase,
    @inject(DeleteGalleryHouseUseCase)
    private _deleteGallery: DeleteGalleryHouseUseCase,
    @inject(AddGalleryHouseUseCase)
    private _addGallery: AddGalleryHouseUseCase,
    @inject(FindRealEstateSeviceByHouseUseCase)
    private _findBy: FindRealEstateSeviceByHouseUseCase,
    @inject(PaymentServiceHouseUseCase)
    private _payment: PaymentServiceHouseUseCase,
    @inject(UpdateStatusHouseUseCase)
    private _updateStatus: UpdateStatusHouseUseCase,
    @inject(CustomerReferUseCase)
    private _customerRefer: CustomerReferUseCase
  ) {}

  async register(input: HouseEntity) {
    return await this._create.execute(input);
  }

  async update(input: HouseEntity) {
    return await this._update.execute(input);
  }

  async delete(id: HouseEntity) {
    return await this._delete.execute(id);
  }

  async getAll(
    input: IGPaginate<
      Pick<
        HouseEntity,
        | "real_estate_type_id"
        | "service_model"
        | "room_type"
        | "village"
        | "district_id"
        | "province_id"
        | "wide"
        | "long"
        | "status"
      >
    >
  ): Promise<void | IResponse<IGPaginated<HouseEntity>>> {
    return await this._getAll.execute(input);
  }

  async getOne(id: number): Promise<any> {
    return await this._getOne.execute(id);
  }

  async findRealEstateServiceById(id: HouseEntity): Promise<any> {
    return await this._findBy.execute(id);
  }

  async deleteGallery(id: string) {
    return await this._deleteGallery.execute(id);
  }

  async updateGallery(input: HouseEntity): Promise<any> {
    return await this._updateGallery.execute(input);
  }

  async addGallery(input: HouseEntity): Promise<any> {
    return await this._addGallery.execute(input);
  }

  async paymentService(input: HouseEntity) {
    return await this._payment.execute(input);
  }

  async updateStatus(id: HouseEntity) {
    return await this._updateStatus.execute(id);
  }

  async customerRefer(id: HouseEntity): Promise<any> {
    return await this._customerRefer.execute(id);
  }
}
