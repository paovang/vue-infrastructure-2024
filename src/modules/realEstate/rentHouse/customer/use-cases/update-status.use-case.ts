import type { IUseCase } from "@/common/interfaces/use-case.interface";
import type { ICustomerRepository } from "../interfaces/customer.interface";
import { injectable, inject } from "tsyringe";
import { CustomerRepository } from "../repositories/customer.repository";
import { CustomerEntity } from "../entities/customer.entity";

@injectable()
export class UpdateStatusCustomerUseCase implements IUseCase {
  constructor(@inject(CustomerRepository) private _api: ICustomerRepository) {}

  async execute(id: CustomerEntity): Promise<any> {
    return await this._api.updateStatus(id);
  }
}
