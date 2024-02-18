import type { IUseCase } from '@/common/interfaces/use-case.interface';
import { ProvinceRepository } from '../../repositories/province.repository';
import { injectable, inject } from 'tsyringe';
import { ProvinceEntity } from '../../entities/province.entity';
import type { IProvinceRepository } from '../../interfaces/province.interface';

@injectable()
export class UpdateProvinceUseCase implements IUseCase {
    constructor(
      @inject(ProvinceRepository) private _api: IProvinceRepository
    ) {

    }

    async execute(input: ProvinceEntity): Promise<any> {
      return await this._api.update(input);
    }
}