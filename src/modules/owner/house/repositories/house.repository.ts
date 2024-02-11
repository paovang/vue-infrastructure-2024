import { AxiosApi } from '../../../../common/configurations/axios.config';
import { injectable, inject } from 'tsyringe';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { IResponse } from '@/common/interfaces/response.interface';
import { HouseEntity } from '../entities/house.entity';
import { IHouseRepository } from '../interfaces/house.interface';

@injectable()
export class HouseRepository implements IHouseRepository {
    constructor(
        @inject(AxiosApi) private _api: AxiosApi
    ) {}

    async create(input: HouseEntity): Promise<IResponse<HouseEntity>> {
        const response = await this._api.axios({
            method: 'post',
            url: '/owner/realestate/list',
            params: {
                real_estate_type_id: 1, 
                service_model: input.service_model, 
                image: input.image, 
                room_type: input.room_type, 
                village: input.village,
                district_id: input.district_id,
                location: input.location, 
                zip_code: input.zip_code, 
                wide: input.wide, 
                long: input.long, 
                remark: input.remark,
                prices: input.prices,
                gallery: input.gallery
            },
        });
        
        return {
            data: response.data,
            message: 'ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ',
            status: 'success'
        }
    }

    async update(input: HouseEntity): Promise<IResponse<HouseEntity>> {
        // const response = await this._api.axios({
        //     method: 'put',
        //     url: '/admin/service-charge/' + input.id,
        //     params: {
        //         country_id: input.country_id,
        //         real_estate_type_id: input.real_estate_type_id,
        //         service_charge: input.service_charge,
        //         unit_price: input.unit_price,
        //     },
        // });
        
        // return {
        //     data: response.data,
        //     message: 'ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ',
        //     status: 'success'
        // }
    }

    async delete(id: HouseEntity): Promise<IResponse<HouseEntity>> {
        const response = await this._api.axios({
            method: 'delete',
            url: `/admin/service-charge/${id}`
        });
        
        return {
            data: response.data,
            message: 'ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.',
            status: 'success'
        }
    }

    async getAll(
        args: IGPaginate<Pick<HouseEntity, 'real_estate_type_id' | 'service_model' | 'room_type' | 'village' | 'district_id' | 'province_id' | 'wide' | 'long'>>
      ): Promise<IResponse<IGPaginated<HouseEntity>>> {
        console.log(args);
    }

    async getOne(id: string): Promise<any> {
        console.log(id);
    }
}