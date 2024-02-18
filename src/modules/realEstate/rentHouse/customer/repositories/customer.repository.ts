import { CustomerEntity } from "../entities/customer.entity";
import { AxiosApi } from "../../../../../common/configurations/axios.config";
import { ICustomerRepository } from "../interfaces/customer.interface";
import { injectable, inject } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";

@injectable()
export class CustomerRepository implements ICustomerRepository {
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async create(input: CustomerEntity): Promise<IResponse<CustomerEntity>> {
    const response = await this._api.axios({
      method: "post",
      url: "/admin/account",
      params: {
        name: input.name,
        owner: input.owner,
        address: input.address,
        tel: input.tel,
        email: input.email,
        password: input.password,
        password_confirmation: input.password_confirmation,
        country_id: input.country_id,
      },
    });

    return {
      data: response.data,
      message: "ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",
      status: "success",
    };
  }

  async update(input: CustomerEntity): Promise<IResponse<CustomerEntity>> {
    const response = await this._api.axios({
      method: "put",
      url: "/admin/account/" + input.id,
      params: {
        name: input.name,
        owner: input.owner,
        address: input.address,
        tel: input.tel,
        country_id: input.country_id,
      },
    });

    return {
      data: response.data,
      message: "ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async delete(id: CustomerEntity): Promise<IResponse<CustomerEntity>> {
    const response = await this._api.axios({
      method: "delete",
      url: `/admin/account/${id}`,
    });

    return {
      data: response.data,
      message: "ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.",
      status: "success",
    };
  }

  async getAll(
    args: IGPaginate<Pick<CustomerEntity, "name" | "country_id" | "tel">>
  ): Promise<IResponse<IGPaginated<CustomerEntity>>> {
    const response = await this._api.axios({
      url: "/admin/account",
      params: {
        page: args.page,
        per_page: args.limit,
        contries_id: args.filter?.country_id,
        tel: args.filter?.tel,
        filter: args.filter?.name,
      },
    });

    const { data, pagination } = response.data.data;

    return {
      data: { props: data, total: pagination.total },
      status: "success",
    };
  }

  async getById(id: any): Promise<any> {
    console.log(id);
  }
}
