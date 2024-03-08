import { AxiosApi } from "@/common/configurations/axios.config";
import { injectable, inject } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { IHomeRealEstateRepository } from "../interfaces/home-real-estate.interface";
import { HouseEntity } from "@/modules/realEstate/owner/house/entities/house.entity";
import { ReserveRealEstateEntity } from "../entities/reserve.entity";
import { formatDate } from "@/common/utils/format.date";

@injectable()
export class HomeRealEstateRepository implements IHomeRealEstateRepository {
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async reserve(
    input: ReserveRealEstateEntity
  ): Promise<IResponse<ReserveRealEstateEntity>> {
    let dateAppointment: string = "";
    if (typeof input.date_appointment !== "undefined") {
      if (input.date_appointment instanceof Date) {
        const year = input.date_appointment.getFullYear();
        const month = (input.date_appointment.getMonth() + 1)
          .toString()
          .padStart(2, "0");
        const day = input.date_appointment
          .getDate()
          .toString()
          .padStart(2, "0");

        dateAppointment = `${year}-${month}-${day}`;
      }
    }

    const response = await this._api.axios({
      method: "post",
      url: `/customer/reserve/${input.id}`,
      params: {
        customer_name: input.customer_name,
        customer_tel: input.customer_tel,
        date_appointment: formatDate(dateAppointment),
      },
    });

    return {
      data: response.data,
      message: "ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",
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
        | "village"
        | "district_id"
        | "province_id"
        | "wide"
        | "long"
      >
    >
  ): Promise<IResponse<IGPaginated<HouseEntity>>> {
    const response = await this._api.axios({
      url: "/customer/realestate/list",
      params: {
        page: args.page,
        per_page: args.limit,
        room_type: args.filter?.room_type,
        real_estate_type_id: args.filter?.real_estate_type_id,
        service_model: args.filter?.service_model,
        village: args.filter?.village,
        district_id: args.filter?.district_id,
        province_id: args.filter?.province_id,
        wide: args.filter?.wide,
        long: args.filter?.long,
      },
    });

    const { data, pagination } = response.data.data;

    return {
      data: { props: data, total: pagination.total },
      status: "success",
    };
  }

  async getOne(id: number): Promise<any> {
    const response = await this._api.axios({
      method: "get",
      url: `/customer/realestate/list/${id}`,
    });

    return response.data;
  }

  async getAllData(filter: any): Promise<any> {
    const response = await this._api.axios({
      method: "get",
      url: `get-all-data`,
      params: {
        province_id: filter.province_id,
      },
    });

    return response.data;
  }
}
