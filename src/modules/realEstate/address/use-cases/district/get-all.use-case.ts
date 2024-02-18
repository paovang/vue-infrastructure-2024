import type { IGUseCase } from '@/common/interfaces/use-case.interface';
import type { IDistrictRepository } from '../../interfaces/district.interface';
import { injectable, inject } from 'tsyringe';
import { DistrictEntity } from '../../entities/district.entity';
import { IResponse } from '@/common/interfaces/response.interface';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { DistrictRepository } from '../../repositories/district.repository';

@injectable()
export class GetAllDistrictUseCase implements IGUseCase<IResponse<IGPaginated<DistrictEntity>>, IGPaginate<DistrictEntity>> {
    constructor(
      @inject(DistrictRepository) private _api: IDistrictRepository,
    ) {

    }

    async execute(
        input: IGPaginate<Pick<DistrictEntity, 'name' | 'province_id'>>
    ): Promise<void | IResponse<IGPaginated<DistrictEntity>>> {
        try {
            return await this._api.getAll(input);
        } catch (error: any) {
            if (error.response.status === 422) {
              Object.keys(error.response.data.errors)
                .map((key) => `${key}: ${error.response.data.errors[key].join(', ')}`)
                .join('; ')
            }
        }
    }
}