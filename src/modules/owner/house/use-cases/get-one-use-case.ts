import type { IUseCase } from '@/common/interfaces/use-case.interface';
import { injectable, inject } from 'tsyringe';
import { HouseRepository } from '../repositories/house.repository';
import type { IHouseRepository } from '../interfaces/house.interface';

@injectable()
export class GetOneHouseUseCase implements IUseCase {
    constructor(
      @inject(HouseRepository) private _api: IHouseRepository
    ) {

    }

    async execute(id: string): Promise<any> {
      return await this._api.getOne(id);
    }
}