import { GetAllCountryUseCase } from './../use-cases/country/get-all.use-case';
import { CountryEntity } from './../entities/country.entity';
import { CreateCountryUseCase } from './../use-cases/country/create.use-case';
import { inject, injectable } from 'tsyringe'
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { IResponse } from '@/common/interfaces/response.interface';

@injectable()
export class CountryService {
    constructor(
        @inject(CreateCountryUseCase) private _create: CreateCountryUseCase,
        @inject(GetAllCountryUseCase) private _getAll: GetAllCountryUseCase
    ) {

    }

    async register(input: CountryEntity) {
        return await this._create.execute(input);
    }

    async getAll(
        input: IGPaginate<Pick<CountryEntity, 'name'>>
    ): Promise<void | IResponse<IGPaginated<CountryEntity>>> {
        return await this._getAll.execute(input);
    }
}