import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { IResponse } from '@/common/interfaces/response.interface';
import { RealEstateServiceEntity } from '../entities/real-estate-service.entity';

export interface IRealEstateServiceRepository {
    create(input: RealEstateServiceEntity): Promise<any>;

    update(input: RealEstateServiceEntity): Promise<any>;

    delete(id: RealEstateServiceEntity): Promise<any>;

    getAll(args: IGPaginate<Pick<RealEstateServiceEntity, 'country_id' | 'real_estate_type_id' | 'unit_price'>>): Promise<IResponse<IGPaginated<RealEstateServiceEntity>>>

    getById(id: string): Promise<any>;
}