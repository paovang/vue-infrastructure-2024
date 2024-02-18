import type { IGUseCase } from '@/common/interfaces/use-case.interface';
import type { ICustomerRepository } from '../interfaces/customer.interface';
import { injectable, inject } from 'tsyringe';
import { CustomerEntity } from '../entities/customer.entity';
import { IResponse } from '@/common/interfaces/response.interface';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { CustomerRepository } from '../repositories/customer.repository';

@injectable()
export class GetAllCustomerUseCase implements IGUseCase<IResponse<IGPaginated<CustomerEntity>>, IGPaginate<CustomerEntity>> {
    constructor(
      @inject(CustomerRepository) private _api: ICustomerRepository,
    ) {

    }

    async execute(
        input: IGPaginate<Pick<CustomerEntity, 'name' | 'country_id' | 'tel'>>
    ): Promise<void | IResponse<IGPaginated<CustomerEntity>>> {
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