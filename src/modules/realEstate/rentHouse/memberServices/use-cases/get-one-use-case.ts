import type { IUseCase } from '@/common/interfaces/use-case.interface';
import { injectable, inject } from 'tsyringe';
import type { IRealEstateServiceRepository } from '../interfaces/real-estate-service.interface';
import { RealEstateServiceRepository } from '../repositories/real-estate-service.repository';

@injectable()
export class GetOneRealEstateServiceUseCase implements IUseCase {
    constructor(
      @inject(RealEstateServiceRepository) private _api: IRealEstateServiceRepository
    ) {

    }

    async execute(id: string): Promise<any> {
      return await this._api.getById(id);
    }
}