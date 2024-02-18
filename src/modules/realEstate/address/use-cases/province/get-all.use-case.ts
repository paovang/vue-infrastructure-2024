import type { IGUseCase } from '@/common/interfaces/use-case.interface';
import { ProvinceRepository } from '../../repositories/province.repository';
import type { IProvinceRepository } from '../../interfaces/province.interface';
import { injectable, inject } from 'tsyringe';
import { ProvinceEntity } from '../../entities/province.entity';
import { IResponse } from '@/common/interfaces/response.interface';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';

@injectable()
export class GetAllProvinceUseCase implements IGUseCase<IResponse<IGPaginated<ProvinceEntity>>, IGPaginate<ProvinceEntity>> {
    constructor(
      @inject(ProvinceRepository) private _api: IProvinceRepository,
    ) {

    }

    async execute(
        input: IGPaginate<Pick<ProvinceEntity, 'name'>>
    ): Promise<void | IResponse<IGPaginated<ProvinceEntity>>> {
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