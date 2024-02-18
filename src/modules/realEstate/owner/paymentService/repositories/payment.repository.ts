import { AxiosApi } from "../../../../../common/configurations/axios.config";
import { injectable, inject } from "tsyringe";
import { IResponse } from "@/common/interfaces/response.interface";
import { PaymentEntity } from "../entities/payment.entity";
import { IPaymentServiceHouseRepository } from "../interfaces/payment.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { formatDate } from "@/common/utils/format.date";

@injectable()
export class PaymentServiceHouseRepository
  implements IPaymentServiceHouseRepository
{
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  /** Payment Service */
  async paymentService(
    input: PaymentEntity
  ): Promise<IResponse<PaymentEntity>> {
    let fromDate: string = "";
    if (typeof input.fromDate !== "undefined") {
      if (input.fromDate instanceof Date) {
        const year = input.fromDate.getFullYear();
        const month = (input.fromDate.getMonth() + 1)
          .toString()
          .padStart(2, "0");
        const day = input.fromDate.getDate().toString().padStart(2, "0");

        fromDate = `${year}-${month}-${day}`;
      }
    }

    const response = await this._api.axios({
      method: "post",
      url: "/owner/payment/service-charge",
      params: {
        real_estate_list_id: input.id,
        service_charge_id: input.service_charge_id,
        qty: input.quantity,
        from_date: formatDate(fromDate),
        slip_payment: input.paySlip,
      },
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async update(input: PaymentEntity): Promise<IResponse<PaymentEntity>> {
    let fromDate: string = "";
    if (typeof input.fromDate !== "undefined") {
      if (input.fromDate instanceof Date) {
        const year = input.fromDate.getFullYear();
        const month = (input.fromDate.getMonth() + 1)
          .toString()
          .padStart(2, "0");
        const day = input.fromDate.getDate().toString().padStart(2, "0");

        fromDate = `${year}-${month}-${day}`;
      } else {
        fromDate = input.fromDate as string;
      }
    }

    const response = await this._api.axios({
      method: "put",
      url: `/owner/payment/service-charge/${input.id}`,
      params: {
        real_estate_list_id: input.real_estate_list_id,
        service_charge_id: input.service_charge_id,
        qty: input.quantity,
        from_date: formatDate(fromDate),
        slip_payment: input.paySlip,
      },
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async delete(id: PaymentEntity): Promise<IResponse<PaymentEntity>> {
    const response = await this._api.axios({
      method: "delete",
      url: `/owner/payment/service-charge/${id}`,
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async getAll(
    args: IGPaginate<Pick<PaymentEntity, "status" | "date_payment">>
  ): Promise<IResponse<IGPaginated<PaymentEntity>>> {
    const date = args.filter?.date_payment;
    let paymentDate = "";
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month as it's zero-based
      const day = date.getDate().toString().padStart(2, "0");

      paymentDate = `${year}-${month}-${day}`;
    }

    const response = await this._api.axios({
      url: "/owner/payment/service-charge",
      params: {
        page: args.page,
        per_page: args.limit,
        status: args.filter?.status,
        date_payment: paymentDate ? formatDate(paymentDate) : null,
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
      url: `/owner/payment/service-charge/${id}`,
    });

    return response.data;
  }
}
