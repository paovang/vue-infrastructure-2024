import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { IResponse } from '@/common/interfaces/response.interface';
import { DistrictEntity } from '../entities/district.entity';

export interface IDistrictRepository {
    create(input: DistrictEntity): Promise<any>;

    update(input: DistrictEntity): Promise<any>;

    delete(id: DistrictEntity): Promise<any>;

    getAll(args: IGPaginate<Pick<DistrictEntity, 'name' | 'province_id'>>): Promise<IResponse<IGPaginated<DistrictEntity>>>

    getById(id: number): Promise<any>;
}