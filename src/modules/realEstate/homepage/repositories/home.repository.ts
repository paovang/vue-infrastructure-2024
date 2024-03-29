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

  async register(input: SignUpEntity): Promise<IResponse<SignUpEntity>> {
    const response = await this._api.axios({
      method: "post",
      url: "/customer/register",
      data: {
        name: input.name,
        owner: input.owner,
        address: input.address,
        tel: input.phone_number,
        email: input.email,
        password: input.password,
        password_confirmation: input.password_confirmation,
        country_id: input.country_id,
        id_no: input.id_no,
        id_image: input.id_image,
      },
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ.",
      status: "success",
    };
  }
}
