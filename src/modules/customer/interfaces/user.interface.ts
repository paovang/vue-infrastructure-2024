import { CustomerEntity } from './../entities/customer.entity';

export interface ICustomerApi {
    create(input: CustomerEntity): Promise<any>;

    getAll(): Promise<any>;
}