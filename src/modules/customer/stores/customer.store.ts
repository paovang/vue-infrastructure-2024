import { reactive } from 'vue';
import { CustomerEntity } from './../entities/customer.entity';
import { CustomerService } from './../services/customer.service';
import { defineStore } from 'pinia'
import { container } from 'tsyringe'

export const customerStore = defineStore('customer-store', () => {
    const customerService = container.resolve<CustomerService>(CustomerService);
    
    const form = reactive<CustomerEntity>({
        id: '',
        name: '',
        email: '',
        image: '',
        gender: ''
    });

    async function register() {
        await customerService.register(form);
    }

    async function getOne() {
        console.log('getOne');
    }

    async function getAll() {
        await customerService.getAll();
    }

    return {
        register,
        getOne,
        getAll,
        form
    };
});