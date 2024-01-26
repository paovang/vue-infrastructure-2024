import { AxiosApi } from '../../../common/configurations/axios.config';
import { CustomerEntity } from '../entities/customer.entity';
import { ICustomerApi } from '../interfaces/user.interface';
import { injectable, inject } from 'tsyringe';

@injectable()
export class CustomerApi implements ICustomerApi {
    constructor(
        @inject(AxiosApi) private _api: AxiosApi
    ) {}

    async create(input: CustomerEntity): Promise<any> {
        console.log('end.', input);
    }

    async getAll(): Promise<any> {
        // const id = 257;

        // const result = await this._api.axios({
        //     url: `client/home-product/${id}`
        // });

        const result = await this._api.axios({
            url: 'branch/list-products'
        });

        console.log(result);
    }
}