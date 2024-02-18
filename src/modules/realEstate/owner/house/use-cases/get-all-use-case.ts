import type { IGUseCase } from '@/common/interfaces/use-case.interface';
import { injectable, inject } from 'tsyringe';
import { IResponse } from '@/common/interfaces/response.interface';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { HouseEntity } from '../entities/house.entity';
import { HouseRepository } from '../repositories/house.repository';
import type { IHouseRepository } from '../interfaces/house.interface';

@injectable()
export class GetAllHouseUseCase implements IGUseCase<IResponse<IGPaginated<HouseEntity>>, IGPaginate<HouseEntity>> {
    constructor(
      @inject(HouseRepository) private _api: IHouseRepository,
    ) {
        
    }

    async execute(
        input: IGPaginate<Pick<HouseEntity, 'real_estate_type_id' | 'service_model' | 'room_type' | 'village' | 'district_id' | 'province_id' | 'wide' | 'long'>>
    ): Promise<void | IResponse<IGPaginated<HouseEntity>>> {
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