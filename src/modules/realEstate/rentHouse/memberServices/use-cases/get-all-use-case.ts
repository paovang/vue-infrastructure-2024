import type { IGUseCase } from '@/common/interfaces/use-case.interface';
import { injectable, inject } from 'tsyringe';
import { IResponse } from '@/common/interfaces/response.interface';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { RealEstateServiceRepository } from '../repositories/real-estate-service.repository';
import type { IRealEstateServiceRepository } from '../interfaces/real-estate-service.interface';
import { RealEstateServiceEntity } from '../entities/real-estate-service.entity';

@injectable()
export class GetAllRealEstateServiceUseCase implements IGUseCase<IResponse<IGPaginated<RealEstateServiceEntity>>, IGPaginate<RealEstateServiceEntity>> {
    constructor(
      @inject(RealEstateServiceRepository) private _api: IRealEstateServiceRepository,
    ) {
        
    }

    async execute(
        input: IGPaginate<Pick<RealEstateServiceEntity, 'country_id' | 'real_estate_type_id' | 'unit_price'>>
    ): Promise<void | IResponse<IGPaginated<RealEstateServiceEntity>>> {
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