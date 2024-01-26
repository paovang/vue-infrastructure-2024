import { GetAllCustomerUseCase } from './../use-cases/get-all.use-case';
import { CustomerEntity } from './../entities/customer.entity';
import { CreateCustomerUseCase } from './../use-cases/create.use-case';
import { inject, injectable } from 'tsyringe'

@injectable()
export class CustomerService {
     constructor(
        @inject(CreateCustomerUseCase) private _create: CreateCustomerUseCase,
        @inject(GetAllCustomerUseCase) private _getAll: GetAllCustomerUseCase
    ) {

    }

    async register(input: CustomerEntity) {
        await this._create.execute(input);
    }

    async getAll() {
        await this._getAll.execute();
    }
}