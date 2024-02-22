import { AxiosApi } from "@/common/configurations/axios.config";
import { injectable, inject } from "tsyringe";
import { IResponse } from "@/common/interfaces/response.interface";
import { PaymentEntity } from "../entities/payment.entity";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IPaymentServiceHistoryHouseRepository } from "../interfaces/payment-history.interface";

@injectable()
export class PaymentServiceHistoryHouseRepository
  implements IPaymentServiceHistoryHouseRepository
{
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async updatePaymentService(
    input: PaymentEntity
  ): Promise<IResponse<PaymentEntity>> {
    const url =
      input.type === "confirm"
        ? `/admin/confirm/payment/service-charge/${input.id}`
        : `/admin/reject/payment/service-charge/${input.id}`;

    const response = await this._api.axios({
      method: "post",
      url: url,
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
    // const date = args.filter?.date_payment;
    // let paymentDate = "";
    // if (date instanceof Date) {
    //   const year = date.getFullYear();
    //   const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month as it's zero-based
    //   const day = date.getDate().toString().padStart(2, "0");

    //   paymentDate = `${year}-${month}-${day}`;
    // }

    const response = await this._api.axios({
      url: "/admin/payment/service-charge",
      params: {
        page: args.page,
        per_page: args.limit,
        // status: args.filter?.status,
        // date_payment: paymentDate ? formatDate(paymentDate) : null,
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
