import type { IUseCase } from '@/common/interfaces/use-case.interface';
import { CountryRepository } from '../../repositories/country.repository';
import type { ICountryRepository } from '../../interfaces/country.interface';
import { injectable, inject } from 'tsyringe';
import { CountryEntity } from '../../entities/country.entity';

@injectable()
export class UpdateCountryUseCase implements IUseCase {
    constructor(
      @inject(CountryRepository) private _api: ICountryRepository
    ) {

    }

    async execute(input: CountryEntity): Promise<any> {
        return await this._api.update(input);
    }
}