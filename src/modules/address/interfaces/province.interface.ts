import { ProvinceEntity } from './../entities/province.entity';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { IResponse } from '@/common/interfaces/response.interface';

export interface IProvinceRepository {
    create(input: ProvinceEntity): Promise<any>;

    update(input: ProvinceEntity): Promise<any>;

    delete(id: ProvinceEntity): Promise<any>;

    getAll(args: IGPaginate<Pick<ProvinceEntity, 'name'>>): Promise<IResponse<IGPaginated<ProvinceEntity>>>

    getById(id: number): Promise<any>;
}