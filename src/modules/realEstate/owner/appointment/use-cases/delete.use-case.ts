import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import type { IAppointmentRepository } from "../interfaces/appointment.interface";
import { AppointmentRepository } from "../repositories/appointment.repository";
import { AppointmentEntity } from "../entities/appointment.entity";

@injectable()
export class DeleteAppointmentUseCase implements IUseCase {
  constructor(
    @inject(AppointmentRepository) private _api: IAppointmentRepository
  ) {}

  async execute(input: AppointmentEntity): Promise<any> {
    return await this._api.delete(input);
  }
}
