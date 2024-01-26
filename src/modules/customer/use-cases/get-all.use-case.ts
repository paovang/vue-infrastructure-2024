import { IUseCase } from './../../../common/interfaces/use-case.interface';
import { CustomerApi } from '../repositories/customer.repository';
import { ICustomerApi } from './../interfaces/user.interface';
import { injectable, inject } from 'tsyringe';

@injectable()
export class GetAllCustomerUseCase implements IUseCase {
    constructor(
        @inject(CustomerApi) private _api: ICustomerApi,
    ) {

    }

    async execute(): Promise<any> {
        try {
            const result = await this._api.getAll();
            
            return result
          } catch (error: any) {
            let messages = undefined
            if (error.response.status === 422) {
              messages = Object.keys(error.response.data.errors)
                .map((key) => `${key}: ${error.response.data.errors[key].join(', ')}`)
                .join('; ')
            }
          }
    }
}