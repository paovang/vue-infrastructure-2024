import type { IUseCase } from '@/common/interfaces/use-case.interface';
import type { ICustomerRepository } from '../interfaces/customer.interface';
import { injectable, inject } from 'tsyringe';
import { CustomerEntity } from '../entities/customer.entity';
import { CustomerRepository } from '../repositories/customer.repository';

@injectable()
export class DeleteCustomerUseCase implements IUseCase {
    constructor(
      @inject(CustomerRepository) private _api: ICustomerRepository
    ) {

    }

    async execute(input: CustomerEntity): Promise<any> {
        return await this._api.delete(input);
    }
}