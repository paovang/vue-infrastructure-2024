import type { IUseCase } from "@/common/interfaces/use-case.interface";
import { injectable, inject } from "tsyringe";
import type { IAppointmentRepository } from "../interfaces/appointment.interface";
import { AppointmentRepository } from "../repositories/appointment.repository";

@injectable()
export class GetOneAppointmentUseCase implements IUseCase {
  constructor(
    @inject(AppointmentRepository) private _api: IAppointmentRepository
  ) {}

  async execute(id: number): Promise<any> {
    return await this._api.getOne(id);
  }
}
