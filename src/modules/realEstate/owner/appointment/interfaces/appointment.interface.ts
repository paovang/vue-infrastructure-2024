import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { AppointmentEntity } from "../entities/appointment.entity";

export interface IAppointmentRepository {
  update(input: AppointmentEntity): Promise<any>;

  delete(id: AppointmentEntity): Promise<any>;

  getAll(
    args: IGPaginate<
      Pick<AppointmentEntity, "status" | "date_appointment" | "name">
    >
  ): Promise<IResponse<IGPaginated<AppointmentEntity>>>;

  getOne(id: number): Promise<any>;
}
