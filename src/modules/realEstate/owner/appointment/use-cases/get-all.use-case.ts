import type { IGUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import { IResponse } from "@/common/interfaces/response.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import type { IAppointmentRepository } from "../interfaces/appointment.interface";
import { AppointmentRepository } from "../repositories/appointment.repository";
import { AppointmentEntity } from "../entities/appointment.entity";

@injectable()
export class GetAllAppointmentUseCase
  implements
    IGUseCase<
      IResponse<IGPaginated<AppointmentEntity>>,
      IGPaginate<AppointmentEntity>
    >
{
  constructor(
    @inject(AppointmentRepository) private _api: IAppointmentRepository
  ) {}

  async execute(
    input: IGPaginate<
      Pick<AppointmentEntity, "status" | "date_appointment" | "name">
    >
  ): Promise<void | IResponse<IGPaginated<AppointmentEntity>>> {
    try {
      return await this._api.getAll(input);
    } catch (error: any) {
      if (error.response.status === 422) {
        Object.keys(error.response.data.errors)
          .map((key) => `${key}: ${error.response.data.errors[key].join(", ")}`)
          .join("; ");
      }
    }
  }
}
