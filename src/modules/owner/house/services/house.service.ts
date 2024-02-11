import { inject, injectable } from 'tsyringe'
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { IResponse } from '@/common/interfaces/response.interface';
import { CreateHouseUseCase } from '../use-cases/create-use-case';
import { GetAllHouseUseCase } from '../use-cases/get-all-use-case';
import { UpdateHouseUseCase } from '../use-cases/update-use-case';
import { DeleteHouseUseCase } from '../use-cases/delete-use-case';
import { GetOneHouseUseCase } from '../use-cases/get-one-use-case';
import { HouseEntity } from '../entities/house.entity';

@injectable()
export class HouseService {
    constructor(
        @inject(CreateHouseUseCase) private _create: CreateHouseUseCase,
        @inject(GetAllHouseUseCase) private _getAll: GetAllHouseUseCase,
        @inject(UpdateHouseUseCase) private _update: UpdateHouseUseCase,
        @inject(DeleteHouseUseCase) private _delete: DeleteHouseUseCase,
        @inject(GetOneHouseUseCase) private _getOne: GetOneHouseUseCase,
    ) {

    }

    async register(input: HouseEntity) {
        return await this._create.execute(input);
    }

    async update(input: HouseEntity) {
        return await this._update.execute(input);
    }

    async delete(id: HouseEntity) {
        return await this._delete.execute(id);
    }

    async getAll(
        input: IGPaginate<Pick<HouseEntity, 'real_estate_type_id' | 'service_model' | 'room_type' | 'village' | 'district_id' | 'province_id' | 'wide' | 'long'>>
    ): Promise<void | IResponse<IGPaginated<HouseEntity>>> {
        return await this._getAll.execute(input);
    }

    async getOne(
        id: number
    ): Promise<any> {
        return await this._getOne.execute(id);
    }
}