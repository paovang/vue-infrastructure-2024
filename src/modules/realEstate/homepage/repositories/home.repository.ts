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
import { SignUpEntity } from "../entities/sign-up.entity";

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
        description: input.description,
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
        | "country_id"
        | "total_bed"
        | "total_bath"
        | "search"
      >
    >
  ): Promise<IResponse<IGPaginated<HouseEntity>>> {
    const response = await this._api.axios({
      url: "/customer/realestate/list",
      params: {
        page: args.page,
        per_page: args.limit,
        search: args.filter?.search,
        room_type: args.filter?.room_type,
        real_estate_type_id: args.filter?.real_estate_type_id,
        service_model: args.filter?.service_model,
        village: args.filter?.village,
        district_id: args.filter?.district_id,
        province_id: args.filter?.province_id,
        country_id: args.filter?.country_id,
        total_bed: args.filter?.total_bed,
        total_bath: args.filter?.total_bath,
        lang: localStorage.getItem("locale"),
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
      params: {
        lang: localStorage.getItem("locale"),
      },
    });

    return response.data;
  }

  async getAllData(filter: any): Promise<any> {
    const response = await this._api.axios({
      method: "get",
      url: `get-all-data`,
      params: {
        province_id: filter.province_id,
        lang: localStorage.getItem("locale"),
      },
    });

    return response.data;
  }

  async register(input: SignUpEntity): Promise<IResponse<SignUpEntity>> {
    const response = await this._api.axios({
      method: "post",
      url: `/customer/register`,
      data: {
        name: input.name,
        address: input.address,
        tel: input.phone_number,
        email: input.email,
        password: input.password,
        password_confirmation: input.password_confirmation,
        country_id: input.country_id,
        id_no: input.id_no,
        id_image: input.id_image,
        profile: input.profile,
        rule: input.check_rule,
        is_valid: input.isValidToServer,
      },
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ.",
      status: "success",
    };
  }

  async getAboutUs(): Promise<any> {
    const response = await this._api.axios({
      method: "get",
      url: `/customer/about-us`,
    });

    return response.data;
  }

  async getCurrencies(): Promise<any> {
    const response = await this._api.axios({
      method: "get",
      url: `/currencies`,
    });

    return response.data;
  }

  async getAllPolicy(): Promise<any> {
    const response = await this._api.axios({
      method: "get",
      url: `/policy`,
    });

    return response.data;
  }
}
