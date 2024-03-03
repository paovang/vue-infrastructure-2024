import { inject, injectable } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { GetAllAppointmentUseCase } from "../use-cases/get-all.use-case";
import { AppointmentEntity } from "../entities/appointment.entity";
import { GetOneAppointmentUseCase } from "../use-cases/get-one.use-case";
import { UpdateAppointmentHouseUseCase } from "../use-cases/update.use-case";
import { DeleteAppointmentUseCase } from "../use-cases/delete.use-case";

@injectable()
export class AppointmentService {
  constructor(
    @inject(GetAllAppointmentUseCase) private _getAll: GetAllAppointmentUseCase,
    @inject(GetOneAppointmentUseCase) private _getOne: GetOneAppointmentUseCase,
    @inject(UpdateAppointmentHouseUseCase)
    private _update: UpdateAppointmentHouseUseCase,
    @inject(DeleteAppointmentUseCase) private _delete: DeleteAppointmentUseCase
  ) {}

  async update(input: AppointmentEntity) {
    return await this._update.execute(input);
  }

  async delete(id: AppointmentEntity) {
    return await this._delete.execute(id);
  }

  async getAll(
    input: IGPaginate<
      Pick<AppointmentEntity, "status" | "date_appointment" | "name">
    >
  ): Promise<void | IResponse<IGPaginated<AppointmentEntity>>> {
    return await this._getAll.execute(input);
  }

  async getOne(id: number): Promise<any> {
    return await this._getOne.execute(id);
  }
}
