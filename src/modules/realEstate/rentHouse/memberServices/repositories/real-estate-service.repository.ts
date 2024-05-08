import { AxiosApi } from "../../../../../common/configurations/axios.config";
import { injectable, inject } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { IRealEstateServiceRepository } from "../interfaces/real-estate-service.interface";
import { RealEstateServiceEntity } from "../entities/real-estate-service.entity";

@injectable()
export class RealEstateServiceRepository
  implements IRealEstateServiceRepository
{
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async create(
    input: RealEstateServiceEntity
  ): Promise<IResponse<RealEstateServiceEntity>> {
    console.log(input);
    const response = await this._api.axios({
      method: "post",
      url: "/admin/service-charge",
      params: {
        real_estate_type_id: input.real_estate_type_id,
        unit_price: input.unit_price,
        service_charges: input.serviceChargePrices,
      },
    });

    return {
      data: response.data,
      message: "ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",
      status: "success",
    };
  }

  async update(
    input: RealEstateServiceEntity
  ): Promise<IResponse<RealEstateServiceEntity>> {
    console.log(input.serviceChargePrices);
    const response = await this._api.axios({
      method: "put",
      url: "/admin/service-charge/" + input.id,
      params: {
        real_estate_type_id: input.real_estate_type_id,
        unit_price: input.unit_price,
        service_charges: input.serviceChargePrices,
      },
    });

    return {
      data: response.data,
      message: "ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async delete(
    id: RealEstateServiceEntity
  ): Promise<IResponse<RealEstateServiceEntity>> {
    const response = await this._api.axios({
      method: "delete",
      url: `/admin/service-charge/${id}`,
    });

    return {
      data: response.data,
      message: "ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.",
      status: "success",
    };
  }

  async getAll(
    args: IGPaginate<
      Pick<
        RealEstateServiceEntity,
        "country_id" | "real_estate_type_id" | "unit_price"
      >
    >
  ): Promise<IResponse<IGPaginated<RealEstateServiceEntity>>> {
    const response = await this._api.axios({
      url: "/admin/service-charge",
      params: {
        page: args.page,
        per_page: args.limit,
        country_id: args.filter?.country_id,
        real_estate_type_id: args.filter?.real_estate_type_id,
        unit_price: args.filter?.unit_price,
        lang: localStorage.getItem("locale"),
      },
    });

    const { data, pagination } = response.data.data;

    return {
      data: { props: data, total: pagination.total },
      status: "success",
    };
  }

  async getById(id: string): Promise<any> {
    console.log(id);
    const lang = localStorage.getItem("locale");

    const response = await this._api.axios({
      url: "/admin/realestate/type",
      params: {
        lang: lang,
      },
    });

    const data = response.data;

    return data;
  }
}
