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
      data: {
        name: input.name,
        address: input.address,
        tel: input.tel,
        email: input.email,
        password: input.password,
        password_confirmation: input.password_confirmation,
        country_id: input.country_id,
        profile: input.profile,
        id_no: input.id_no,
        id_image: input.id_image,
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
      data: {
        name: input.name,
        address: input.address,
        tel: input.tel,
        email: input.email,
        country_id: input.country_id,
        id_no: input.id_no,
        id_image: input.id_image,
        profile: input.profile,
        user_id: input.user_id,
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
        country_id: args.filter?.country_id,
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

  async updateStatus(id: CustomerEntity): Promise<any> {
    const response = await this._api.axios({
      method: "put",
      url: `/admin/update-account-customer-status/${id}`,
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ.",
      status: "success",
    };
  }
}
