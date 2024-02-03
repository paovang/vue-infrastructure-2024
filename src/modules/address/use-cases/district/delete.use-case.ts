import { DistrictEntity } from './../../entities/district.entity';
import type { IUseCase } from '@/common/interfaces/use-case.interface';
import { DistrictRepository } from '../../repositories/district.repository';
import type { IDistrictRepository } from '../../interfaces/district.interface';
import { injectable, inject } from 'tsyringe';

@injectable()
export class DeleteDistrictUseCase implements IUseCase {
    constructor(
      @inject(DistrictRepository) private _api: IDistrictRepository
    ) {

    }

    async execute(id: DistrictEntity): Promise<any> {
        return await this._api.delete(id);
    }
}