import { DistrictEntity } from './../entities/district.entity';
import { AxiosApi } from '../../../common/configurations/axios.config';
import { IDistrictRepository } from '../interfaces/district.interface';
import { injectable, inject } from 'tsyringe';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { IResponse } from '@/common/interfaces/response.interface';

@injectable()
export class DistrictRepository implements IDistrictRepository {
    constructor(
        @inject(AxiosApi) private _api: AxiosApi
    ) {}

    async create(input: DistrictEntity): Promise<IResponse<DistrictEntity>> {
        const response = await this._api.axios({
            method: 'post',
            url: '/admin/district',
            params: {
                name: input.name,
                province_id: input.province_id,
            },
        });
        
        return {
            data: response.data,
            message: 'ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ',
            status: 'success'
        }
    }

    async update(input: DistrictEntity): Promise<IResponse<DistrictEntity>> {
        const response = await this._api.axios({
            method: 'put',
            url: '/admin/district/' + input.id,
            params: {
                name: input.name
            },
        });
        
        return {
            data: response.data,
            message: 'ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ',
            status: 'success'
        }
    }

    async delete(id: DistrictEntity): Promise<IResponse<DistrictEntity>> {
        const response = await this._api.axios({
            method: 'delete',
            url: `/admin/district/${id}`
        });
        
        return {
            data: response.data,
            message: 'ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.',
            status: 'success'
        }
    }

    async getAll(
        args: IGPaginate<Pick<DistrictEntity, 'name'>>
      ): Promise<IResponse<IGPaginated<DistrictEntity>>> {
        const response = await this._api.axios({
            url: '/admin/district',
            params: {
                page: args.page,
                per_page: args.limit,
                filter: args.filter?.name
            }
        });

        const { data, pagination } = response.data.data;

        return {
            data: { props: data, total: pagination.total },
            status: 'success'
        }
    }

    async getById(id: any): Promise<any> {
        console.log(id);
    }
}