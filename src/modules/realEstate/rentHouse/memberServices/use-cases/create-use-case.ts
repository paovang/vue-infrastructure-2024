import type { IUseCase } from '@/common/interfaces/use-case.interface';
import { injectable, inject } from 'tsyringe';
import type { IRealEstateServiceRepository } from '../interfaces/real-estate-service.interface';
import { RealEstateServiceRepository } from '../repositories/real-estate-service.repository';
import { RealEstateServiceEntity } from '../entities/real-estate-service.entity';

@injectable()
export class CreateRealEstateServiceUseCase implements IUseCase {
    constructor(
      @inject(RealEstateServiceRepository) private _api: IRealEstateServiceRepository
    ) {

    }

    async execute(input: RealEstateServiceEntity): Promise<any> {
        return await this._api.create(input);
    }
}