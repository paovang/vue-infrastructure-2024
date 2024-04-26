import { AxiosApi } from "@/common/configurations/axios.config";
import { injectable, inject } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { IRentAndBuyRepository } from "../interfaces/rent-buy.interface";
import { RentAndBuyEntity } from "../entities/rent-buy-entity";
import { formatDate } from "@/common/utils/format.date";

@injectable()
export class RentAndBuyRepository implements IRentAndBuyRepository {
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async create(input: RentAndBuyEntity): Promise<IResponse<RentAndBuyEntity>> {
    const fromDate = input.from_date;
    let startDate = "";

    if (fromDate instanceof Date) {
      const year = fromDate.getFullYear();
      const month = (fromDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month as it's zero-based
      const day = fromDate.getDate().toString().padStart(2, "0");

      startDate = `${year}-${month}-${day}`;
    }

    const dateAppointment = input.date_appointment;
    let appointmentDate = "";

    if (dateAppointment instanceof Date) {
      const year = dateAppointment.getFullYear();
      const month = (dateAppointment.getMonth() + 1)
        .toString()
        .padStart(2, "0"); // Adding 1 to month as it's zero-based
      const day = dateAppointment.getDate().toString().padStart(2, "0");

      appointmentDate = `${year}-${month}-${day}`;
    }

    if (input.source_type === "fromAppointment") {
      const response = await this._api.axios({
        method: "post",
        url: `/owner/rent/buy/from/reserve/${input.appointment_id}`,
        data: {
          qty: input.qty,
          real_estate_price_id: input.unit_price,
          detail: input.detail,
          date: appointmentDate ? formatDate(appointmentDate) : null,
          from_date: startDate ? formatDate(startDate) : null,
        },
      });

      return {
        data: response.data,
        message: "ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",
        status: "success",
      };
    } else {
      const response = await this._api.axios({
        method: "post",
        url: `/owner/rent/buy`,
        data: {
          qty: input.qty,
          real_estate_price_id: input.unit_price,
          real_estate_list_id: input.real_estate_id,
          detail: input.detail,
          customer_name: input.customer_name,
          customer_tel: input.customer_tel,
          date: appointmentDate ? formatDate(appointmentDate) : null,
          from_date: startDate ? formatDate(startDate) : null,
        },
      });

      return {
        data: response.data,
        message: "ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",
        status: "success",
      };
    }
  }

  async update(input: RentAndBuyEntity): Promise<IResponse<RentAndBuyEntity>> {
    const fromDate = input.from_date;
    let startDate = "";

    if (typeof fromDate !== "undefined") {
      if (fromDate instanceof Date) {
        const year = fromDate.getFullYear();
        const month = (fromDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month as it's zero-based
        const day = fromDate.getDate().toString().padStart(2, "0");

        startDate = `${year}-${month}-${day}`;
      } else {
        startDate = fromDate;
      }
    }

    const dateAppointment = input.date_appointment;
    let appointmentDate = "";

    if (typeof dateAppointment !== "undefined") {
      if (dateAppointment instanceof Date) {
        const year = dateAppointment.getFullYear();
        const month = (dateAppointment.getMonth() + 1)
          .toString()
          .padStart(2, "0");
        const day = dateAppointment.getDate().toString().padStart(2, "0");

        appointmentDate = `${year}-${month}-${day}`;
      } else {
        appointmentDate = dateAppointment;
      }
    }

    const response = await this._api.axios({
      method: "put",
      url: `/owner/rent/buy/${input.id}`,
      data: {
        qty: input.qty,
        detail: input.detail,
        customer_name: input.customer_name,
        customer_tel: input.customer_tel,
        date: appointmentDate ? formatDate(appointmentDate) : null,
        from_date: startDate ? formatDate(startDate) : null,
        service_model: input.service_model,
      },
    });

    return {
      data: response.data,
      message: "ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async delete(id: RentAndBuyEntity): Promise<IResponse<RentAndBuyEntity>> {
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
      Pick<RentAndBuyEntity, "service_model" | "from_date" | "to_date">
    >
  ): Promise<IResponse<IGPaginated<RentAndBuyEntity>>> {
    // const fromDate = args.filter?.from_date;
    // const toDate = args.filter?.to_date;
    // let startDate = "";
    // let endDate = "";

    // if (fromDate instanceof Date) {
    //   const year = fromDate.getFullYear();
    //   const month = (fromDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month as it's zero-based
    //   const day = fromDate.getDate().toString().padStart(2, "0");

    //   startDate = `${year}-${month}-${day}`;
    // }

    // if (toDate instanceof Date) {
    //   const year = toDate.getFullYear();
    //   const month = (toDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month as it's zero-based
    //   const day = toDate.getDate().toString().padStart(2, "0");

    //   endDate = `${year}-${month}-${day}`;
    // }

    const response = await this._api.axios({
      url: "/owner/rent/buy",
      params: {
        page: args.page,
        per_page: args.limit,
        service_model: args.filter?.service_model,
        start_date: args.filter?.from_date,
        end_date: args.filter?.to_date,
        lang: localStorage.getItem("locale"),
        // start_date: startDate ? formatDate(startDate) : null,
        // end_date: endDate ? formatDate(endDate) : null,
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
      url: "/owner/reserve/list/" + id,
    });

    return response.data;
  }

  async getRealEstatePrices(id: number): Promise<any> {
    const response = await this._api.axios({
      method: "get",
      url: "/owner/real-estate-prices/" + id,
    });

    return response.data;
  }

  async getRealEstateOnline(): Promise<any> {
    const response = await this._api.axios({
      method: "get",
      url: "/owner/get-real-estate-online",
      params: {
        lang: localStorage.getItem("locale"),
      },
    });

    return response.data;
  }
}
