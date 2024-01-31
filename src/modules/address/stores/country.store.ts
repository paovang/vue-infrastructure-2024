import { reactive } from 'vue';
import { CountryEntity } from './../entities/country.entity';
import { CountryService } from './../services/country.service';
import { defineStore } from 'pinia'
import { container } from 'tsyringe'
import { IGState } from '@/common/interfaces/state.interface';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';

export const countryStore = defineStore('country-store', () => {
    const countryService = container.resolve<CountryService>(CountryService);
    
    const state = reactive<IGState<IGPaginated<CountryEntity>>>({
        data: {
          props: [],
          total: 0
        },
        isLoading: false,
        error: ''
    })
    
    const stateCountry = reactive<IGPaginate<Pick<CountryEntity, 'name'>>>({
        page: 1,
        limit: 10,
        filter: { name: '' }
    })

    const form = reactive<CountryEntity>({
        id: '',
        name: ''
    });

    /** My Function */
    async function register() {
        state.isLoading = true; 
        try {
            await countryService.register(form);
            await getAll();

            state.error = '';
            form.name = '';
        } catch (error: any) {
            let responseError = '';
            if (error.response.status === 422) {
                responseError = Object.keys(error.response.data.errors)
                    .map((key) => `${key}: ${error.response.data.errors[key].join(', ')}`)
                    .join('; ')
            }
            state.error = responseError;
        }
        state.isLoading = false;
    }

    async function getOne() {
        console.log('getOne');
    }

    async function getAll() {
        state.isLoading = true; 
        const results =  await countryService.getAll({
            page: stateCountry.page,
            limit: stateCountry.limit,
            filter: stateCountry.filter
        });

        if (results && results.data && results.status == 'success') {
            state.data.props = results.data.props;
            state.data.total = results.data.total;
            state.isLoading = false;
        }
    }

    return {
        register,
        getOne,
        getAll,
        form,
        stateCountry,
        state
    };
});