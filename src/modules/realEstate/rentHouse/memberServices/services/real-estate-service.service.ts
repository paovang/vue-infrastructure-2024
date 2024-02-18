import { inject, injectable } from 'tsyringe'
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { IResponse } from '@/common/interfaces/response.interface';
import { CreateRealEstateServiceUseCase } from '../use-cases/create-use-case';
import { GetAllRealEstateServiceUseCase } from '../use-cases/get-all-use-case';
import { UpdateRealEstateServiceUseCase } from '../use-cases/update-use-case';
import { DeleteRealEstateServiceUseCase } from '../use-cases/delete-use-case';
import { RealEstateServiceEntity } from '../entities/real-estate-service.entity';
import { GetOneRealEstateServiceUseCase } from '../use-cases/get-one-use-case';

@injectable()
export class RealEstateService {
    constructor(
        @inject(CreateRealEstateServiceUseCase) private _create: CreateRealEstateServiceUseCase,
        @inject(GetAllRealEstateServiceUseCase) private _getAll: GetAllRealEstateServiceUseCase,
        @inject(UpdateRealEstateServiceUseCase) private _update: UpdateRealEstateServiceUseCase,
        @inject(DeleteRealEstateServiceUseCase) private _delete: DeleteRealEstateServiceUseCase,
        @inject(GetOneRealEstateServiceUseCase) private _getById: GetOneRealEstateServiceUseCase,
    ) {

    }

    async register(input: RealEstateServiceEntity) {
        return await this._create.execute(input);
    }

    async update(input: RealEstateServiceEntity) {
        return await this._update.execute(input);
    }

    async delete(id: RealEstateServiceEntity) {
        return await this._delete.execute(id);
    }

    async getAll(
        input: IGPaginate<Pick<RealEstateServiceEntity, 'country_id' | 'real_estate_type_id' | 'unit_price'>>
    ): Promise<void | IResponse<IGPaginated<RealEstateServiceEntity>>> {
        return await this._getAll.execute(input);
    }

    async getById(
        id: string
    ): Promise<any> {
        return await this._getById.execute(id);
    }
}