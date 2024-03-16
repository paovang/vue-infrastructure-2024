import { CustomerEntity } from "../entities/customer.entity";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";

export interface ICustomerRepository {
  create(input: CustomerEntity): Promise<any>;

  update(input: CustomerEntity): Promise<any>;

  delete(id: CustomerEntity): Promise<any>;

  getAll(
    args: IGPaginate<Pick<CustomerEntity, "name" | "country_id" | "tel">>
  ): Promise<IResponse<IGPaginated<CustomerEntity>>>;

  getById(id: number): Promise<any>;

  updateStatus(id: CustomerEntity): Promise<any>;
}
