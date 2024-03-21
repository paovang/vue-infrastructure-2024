import { AxiosApi } from "@/common/configurations/axios.config";
import { injectable, inject } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { DashboardEntity } from "../entities/entity";
import { IRepository } from "../interfaces/interface";
import { HouseEntity } from "@/modules/realEstate/owner/house/entities/house.entity";

@injectable()
export class Repository implements IRepository {
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async create(input: DashboardEntity): Promise<IResponse<DashboardEntity>> {
    const response = await this._api.axios({
      method: "post",
      url: `/admin/create-footer`,
      data: {},
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async update(input: DashboardEntity): Promise<IResponse<DashboardEntity>> {
    const response = await this._api.axios({
      method: "put",
      url: `/admin/update-footer/${input.id}`,
      data: {},
    });

    return {
      data: response.data,
      message: "ອັບເດດ ສຳເລັດ",
      status: "success",
    };
  }

  async delete(id: DashboardEntity): Promise<IResponse<DashboardEntity>> {
    const response = await this._api.axios({
      method: "delete",
      url: `/admin/delete-footer/${id}`,
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ.",
      status: "success",
    };
  }

  async getAll(
    args: IGPaginate<
      Pick<
        HouseEntity,
        | "real_estate_type_id"
        | "service_model"
        | "room_type"
        | "search"
        | "district_id"
        | "province_id"
        | "country_id"
      >
    >
  ): Promise<IResponse<IGPaginated<HouseEntity>>> {
    const response = await this._api.axios({
      url: "/admin/report-real-estate-list",
      params: {
        page: args.page,
        per_page: args.limit,
        room_type: args.filter?.room_type,
        real_estate_type_id: args.filter?.real_estate_type_id,
        service_model: args.filter?.service_model,
        search: args.filter?.search,
        district_id: args.filter?.district_id,
        province_id: args.filter?.province_id,
        country_id: args.filter?.country_id,
      },
    });

    const { data, pagination } = response.data.data;

    return {
      data: { props: data, total: pagination.total },
      status: "success",
    };
  }

  async getCountries(): Promise<any> {
    const response = await this._api.axios({
      url: `/countries`,
    });

    return response.data;
  }

  async getAllProvinces(id: HouseEntity): Promise<any> {
    const response = await this._api.axios({
      url: `/provinces/${id}`,
    });

    return response.data;
  }

  async getAllDistricts(id: HouseEntity): Promise<any> {
    const response = await this._api.axios({
      url: `/districts/${id}`,
    });

    return response.data;
  }

  async reportRealEstateTypes(): Promise<any> {
    const response = await this._api.axios({
      url: `/admin/dashboard`,
    });

    return response;
  }
}
