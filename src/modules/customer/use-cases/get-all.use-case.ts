import type { IUseCase } from './../../../common/interfaces/use-case.interface';
import { CustomerApi } from '../repositories/customer.repository';
import type { ICustomerApi } from './../interfaces/user.interface';
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
        return result;
      } catch (error: any) {
        if (error.response.status === 422) {
          const messages = Object.keys(error.response.data.errors)
            .map((key) => `${key}: ${error.response.data.errors[key].join(', ')}`)
            .join('; ');
          // Handle or log the 'messages' if needed
          console.error(messages);
        }
      }      
    }
}