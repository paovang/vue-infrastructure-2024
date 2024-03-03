import { AxiosApi } from "@/common/configurations/axios.config";
import { injectable, inject } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { IAppointmentRepository } from "../interfaces/appointment.interface";
import { AppointmentEntity } from "../entities/appointment.entity";
import { formatDate } from "@/common/utils/format.date";

@injectable()
export class AppointmentRepository implements IAppointmentRepository {
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async update(
    input: AppointmentEntity
  ): Promise<IResponse<AppointmentEntity>> {
    const response = await this._api.axios({
      method: "put",
      url: `/owner/realestate/list/${input.id}`,
      data: {
        status: input.status,
      },
    });

    return {
      data: response.data,
      message: "ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async delete(id: AppointmentEntity): Promise<IResponse<AppointmentEntity>> {
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
      Pick<AppointmentEntity, "status" | "date_appointment" | "name">
    >
  ): Promise<IResponse<IGPaginated<AppointmentEntity>>> {
    const date = args.filter?.date_appointment;
    let dateAppointment = "";

    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month as it's zero-based
      const day = date.getDate().toString().padStart(2, "0");

      dateAppointment = `${year}-${month}-${day}`;
    }

    const response = await this._api.axios({
      url: "/owner/reserve/list",
      params: {
        page: args.page,
        per_page: args.limit,
        status: args.filter?.status,
        date_appointment: dateAppointment ? formatDate(dateAppointment) : null,
        search: args.filter?.name,
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
}
