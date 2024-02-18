import type { IUseCase } from '@/common/interfaces/use-case.interface';
import { DistrictRepository } from '../../repositories/district.repository';
import { injectable, inject } from 'tsyringe';
import { DistrictEntity } from '../../entities/district.entity';
import type { IDistrictRepository } from '../../interfaces/district.interface';

@injectable()
export class UpdateDistrictUseCase implements IUseCase {
    constructor(
      @inject(DistrictRepository) private _api: IDistrictRepository
    ) {

    }

    async execute(input: DistrictEntity): Promise<any> {
      return await this._api.update(input);
    }
}