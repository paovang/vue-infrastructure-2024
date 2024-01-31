import { CountryEntity } from './../entities/country.entity';
import { AxiosApi } from '../../../common/configurations/axios.config';
import { ICountryRepository } from '../interfaces/country.interface';
import { injectable, inject } from 'tsyringe';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { IResponse } from '@/common/interfaces/response.interface';

@injectable()
export class CountryRepository implements ICountryRepository {
    constructor(
        @inject(AxiosApi) private _api: AxiosApi
    ) {}

    async create(input: CountryEntity): Promise<IResponse<CountryEntity>> {
        const response = await this._api.axios({
            method: 'post',
            url: '/admin/country',
            params: {
                name: input.name
            },
        });
        
        return {
            data: response.data,
            message: 'ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ',
            status: 'success'
        }
    }

    async getAll(
        args: IGPaginate<Pick<CountryEntity, 'name'>>
      ): Promise<IResponse<IGPaginated<CountryEntity>>> {
        const response = await this._api.axios({
            url: '/admin/country',
            params: {
                page: args.page,
                per_page: args.limit,
            }
        });

        const { data, pagination } = response.data.data;

        return {
            data: { props: data, total: pagination.total },
            status: 'success'
        }
    }
}