import { CountryEntity } from "../entities/country.entity";
import { AxiosApi } from "../../../../common/configurations/axios.config";
import { ICountryRepository } from "../interfaces/country.interface";
import { injectable, inject } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";

@injectable()
export class CountryRepository implements ICountryRepository {
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async create(input: CountryEntity): Promise<IResponse<CountryEntity>> {
    const response = await this._api.axios({
      method: "post",
      url: "/admin/country",
      params: {
        name: input.name,
        currency: input.currency,
      },
    });

    return {
      data: response.data,
      message: "ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",
      status: "success",
    };
  }

  async update(input: CountryEntity): Promise<IResponse<CountryEntity>> {
    const response = await this._api.axios({
      method: "put",
      url: "/admin/country/" + input.id,
      params: {
        name: input.name,
        currency: input.currency,
      },
    });

    return {
      data: response.data,
      message: "ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async delete(id: CountryEntity): Promise<IResponse<CountryEntity>> {
    const response = await this._api.axios({
      method: "delete",
      url: `/admin/country/${id}`,
    });

    return {
      data: response.data,
      message: "ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.",
      status: "success",
    };
  }

  async getAll(
    args: IGPaginate<Pick<CountryEntity, "name">>
  ): Promise<IResponse<IGPaginated<CountryEntity>>> {
    const response = await this._api.axios({
      url: "/admin/country",
      params: {
        page: args.page,
        per_page: args.limit,
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
