import { AxiosApi } from "@/common/configurations/axios.config";
import { injectable, inject } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { HouseEntity } from "../entities/house.entity";
import { IHouseRepository } from "../interfaces/house.interface";

@injectable()
export class HouseRepository implements IHouseRepository {
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async create(input: HouseEntity): Promise<IResponse<HouseEntity>> {
    const response = await this._api.axios({
      method: "post",
      url: "/owner/realestate/list",
      data: {
        real_estate_type_id: input.real_estate_type_id,
        service_model: input.service_model,
        image: input.image,
        room_type: input.room_type,
        village: input.village,
        name: input.name,
        agent_name: input.agent_name,
        owner_name: input.owner_name,
        location: input.location,
        // district_id: input.district_id,
        // zip_code: input.zip_code,
        wide: input.wide,
        long: input.long,
        total_bath: input.total_bath,
        total_bed: input.total_bed,
        garage: input.garage,
        remark: input.remark,
        prices: input.prices,
        gallery: input.gallery,
      },
    });

    return {
      data: response.data,
      message: "ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",
      status: "success",
    };
  }

  async update(input: HouseEntity): Promise<IResponse<HouseEntity>> {
    const response = await this._api.axios({
      method: "put",
      url: `/owner/realestate/list/${input.id}`,
      data: {
        real_estate_type_id: input.real_estate_type_id,
        service_model: input.service_model,
        new_image: input.image,
        room_type: input.room_type,
        name: input.name,
        village: input.village,
        agent_name: input.agent_name,
        owner_name: input.owner_name,
        // district_id: input.district_id,
        location: input.location,
        // zip_code: input.zip_code,
        wide: input.wide,
        long: input.long,
        total_bath: input.total_bath,
        total_bed: input.total_bed,
        garage: input.garage,
        remark: input.remark,
        prices: input.prices,
      },
    });

    return {
      data: response.data,
      message: "ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async delete(id: HouseEntity): Promise<IResponse<HouseEntity>> {
    const response = await this._api.axios({
      method: "delete",
      url: `/owner/realestate/list/${id}`,
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
      url: "/owner/realestate/list",
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
      url: "/owner/realestate/list/" + id,
    });

    return response.data;
  }

  async findRealEstateServiceById(id: HouseEntity): Promise<any> {
    const response = await this._api.axios({
      method: "get",
      url: "/owner/realestate/service_charge/" + id,
    });

    return response.data;
  }

  async deleteGallery(id: string): Promise<IResponse<HouseEntity>> {
    const response = await this._api.axios({
      method: "delete",
      url: `/owner/realestate/list/gallery/${id}`,
    });

    return {
      data: response.data,
      message: "ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.",
      status: "success",
    };
  }

  async updateGallery(input: HouseEntity): Promise<IResponse<HouseEntity>> {
    const response = await this._api.axios({
      method: "put",
      url: `/owner/realestate/list/gallery/${input.id}`,
      data: {
        file: input.gallery,
      },
    });

    return {
      data: response.data,
      message: "ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async addGallery(input: HouseEntity): Promise<IResponse<HouseEntity>> {
    const response = await this._api.axios({
      method: "Post",
      url: `/owner/realestate/list/gallery/${input.id}`,
      data: {
        gallery: input.gallery,
      },
    });

    return {
      data: response.data,
      message: "ເພີ່ມ ຂໍ້ມູນສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  /** Payment Service */
  async paymentService(input: HouseEntity): Promise<IResponse<HouseEntity>> {
    const response = await this._api.axios({
      method: "post",
      url: "/owner/payment/service-charge",
      data: {
        real_estate_list_id: input.id,
        service_charge_id: input.service_charge_id,
        qty: input.payment?.quantity,
        from_date: input.payment?.fromDate,
        slip_payment: input.payment?.filezPaySlip,
      },
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async updateStatus(id: HouseEntity): Promise<any> {
    const response = await this._api.axios({
      method: "put",
      url: `/owner/update-real-estate-status/${id}`,
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ.",
      status: "success",
    };
  }
}
