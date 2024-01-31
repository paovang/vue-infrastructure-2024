import type { IGUseCase } from '@/common/interfaces/use-case.interface';
import { CountryRepository } from '../../repositories/country.repository';
import type { ICountryRepository } from '../../interfaces/country.interface';
import { injectable, inject } from 'tsyringe';
import { CountryEntity } from '../../entities/country.entity';
import { IResponse } from '@/common/interfaces/response.interface';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';

@injectable()
export class GetAllCountryUseCase implements IGUseCase<IResponse<IGPaginated<CountryEntity>>, IGPaginate<CountryEntity>> {
    constructor(
      @inject(CountryRepository) private _api: ICountryRepository,
    ) {

    }

    async execute(
        input: IGPaginate<Pick<CountryEntity, 'name'>>
    ): Promise<void | IResponse<IGPaginated<CountryEntity>>> {
        try {
            return await this._api.getAll(input);
        } catch (error: any) {
            if (error.response.status === 422) {
              Object.keys(error.response.data.errors)
                .map((key) => `${key}: ${error.response.data.errors[key].join(', ')}`)
                .join('; ')
            }
        }
    }
}