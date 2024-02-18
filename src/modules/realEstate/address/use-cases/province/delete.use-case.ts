import type { IUseCase } from '@/common/interfaces/use-case.interface';
import { ProvinceRepository } from '../../repositories/province.repository';
import type { IProvinceRepository } from '../../interfaces/province.interface';
import { injectable, inject } from 'tsyringe';
import { ProvinceEntity } from '../../entities/province.entity';

@injectable()
export class DeleteProvinceUseCase implements IUseCase {
    constructor(
      @inject(ProvinceRepository) private _api: IProvinceRepository
    ) {

    }

    async execute(id: ProvinceEntity): Promise<any> {
        return await this._api.delete(id);
    }
}