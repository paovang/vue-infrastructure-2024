import { IUseCase } from '@/common/interfaces/use-case.interface';
import { CustomerApi } from '../repositories/customer.repository';
import { ICustomerApi } from './../interfaces/user.interface';
import { CustomerEntity } from './../entities/customer.entity';
import { injectable, inject } from 'tsyringe';

@injectable()
export class CreateCustomerUseCase implements IUseCase {
    constructor(
      @inject(CustomerApi) private _api: ICustomerApi,
    ) {

    }

    async execute(input: CustomerEntity): Promise<any> {
        try {
            const result = await this._api.create(input);
            
            return result
          } catch (error: any) {
            let messages = undefined;
            if (error.response.status === 422) {
              messages = Object.keys(error.response.data.errors)
                .map((key) => `${key}: ${error.response.data.errors[key].join(', ')}`)
                .join('; ')
            }
          }
    }
}