import { CustomerEntity } from "../entities/customer.entity";
import { inject, injectable } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { CreateCustomerUseCase } from "../use-cases/create-use-case";
import { GetAllCustomerUseCase } from "../use-cases/get-all-use-case";
import { UpdateCustomerUseCase } from "../use-cases/update-use-case";
import { DeleteCustomerUseCase } from "../use-cases/delete.use-case";
import { UpdateStatusCustomerUseCase } from "../use-cases/update-status.use-case";
import { ChangePasswordUseCase } from "../use-cases/change-password.use-case";

@injectable()
export class CustomerService {
  constructor(
    @inject(CreateCustomerUseCase) private _create: CreateCustomerUseCase,
    @inject(GetAllCustomerUseCase) private _getAll: GetAllCustomerUseCase,
    @inject(UpdateCustomerUseCase) private _update: UpdateCustomerUseCase,
    @inject(DeleteCustomerUseCase) private _delete: DeleteCustomerUseCase,
    @inject(UpdateStatusCustomerUseCase)
    private _updateStatus: UpdateStatusCustomerUseCase,
    @inject(ChangePasswordUseCase)
    private _changePassword: ChangePasswordUseCase
  ) {}

  async register(input: CustomerEntity) {
    return await this._create.execute(input);
  }

  async update(input: CustomerEntity) {
    return await this._update.execute(input);
  }

  async delete(id: CustomerEntity) {
    return await this._delete.execute(id);
  }

  async getAll(
    input: IGPaginate<Pick<CustomerEntity, "name" | "country_id" | "tel">>
  ): Promise<void | IResponse<IGPaginated<CustomerEntity>>> {
    return await this._getAll.execute(input);
  }

  async updateStatus(id: CustomerEntity): Promise<any> {
    return await this._updateStatus.execute(id);
  }

  async changePassword(input: CustomerEntity): Promise<any> {
    return await this._changePassword.execute(input);
  }
}
