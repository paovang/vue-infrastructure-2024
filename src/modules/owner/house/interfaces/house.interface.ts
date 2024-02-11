import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { IResponse } from '@/common/interfaces/response.interface';
import { HouseEntity } from '../entities/house.entity';

export interface IHouseRepository {
    create(input: HouseEntity): Promise<any>;

    update(input: HouseEntity): Promise<any>;

    delete(id: HouseEntity): Promise<any>;

    getAll(args: IGPaginate<Pick<HouseEntity, 'real_estate_type_id' | 'service_model' | 'room_type' | 'village' | 'district_id' | 'province_id' | 'wide' | 'long'>>): Promise<IResponse<IGPaginated<HouseEntity>>>

    getOne(id: string): Promise<any>;
}