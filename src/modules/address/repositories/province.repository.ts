import { ProvinceEntity } from './../entities/province.entity';
import { AxiosApi } from '../../../common/configurations/axios.config';
import { IProvinceRepository } from '../interfaces/province.interface';
import { injectable, inject } from 'tsyringe';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { IResponse } from '@/common/interfaces/response.interface';

@injectable()
export class ProvinceRepository implements IProvinceRepository {
    constructor(
        @inject(AxiosApi) private _api: AxiosApi
    ) {}

    async create(input: ProvinceEntity): Promise<IResponse<ProvinceEntity>> {
        const response = await this._api.axios({
            method: 'post',
            url: '/admin/province',
            params: {
                name: input.name,
                countries_id: input.country_id,
            },
        });
        
        return {
            data: response.data,
            message: 'ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ',
            status: 'success'
        }
    }

    async update(input: ProvinceEntity): Promise<IResponse<ProvinceEntity>> {
        const response = await this._api.axios({
            method: 'put',
            url: '/admin/province/' + input.id,
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

    async delete(id: ProvinceEntity): Promise<IResponse<ProvinceEntity>> {
        const response = await this._api.axios({
            method: 'delete',
            url: `/admin/province/${id}`
        });
        
        return {
            data: response.data,
            message: 'ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.',
            status: 'success'
        }
    }

    async getAll(
        args: IGPaginate<Pick<ProvinceEntity, 'name'>>
      ): Promise<IResponse<IGPaginated<ProvinceEntity>>> {
        const response = await this._api.axios({
            url: '/admin/province',
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