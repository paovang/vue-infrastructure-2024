import { reactive } from 'vue';
import { ProvinceEntity } from './../entities/province.entity';
import { ProvinceService } from './../services/province.service';
import { defineStore } from 'pinia'
import { container } from 'tsyringe'
import { IGState } from '@/common/interfaces/state.interface';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';

export const provinceStore = defineStore('province-store', () => {
    const provinceService = container.resolve<ProvinceService>(ProvinceService);
    
    const state = reactive<IGState<IGPaginated<ProvinceEntity>>>({
        data: {
          props: [],
          total: 0
        },
        isLoading: false,
        btnLoading: false,
        error: ''
    })
    
    const setStateFilter = reactive<IGPaginate<Pick<ProvinceEntity, 'name'>>>({
        page: 1,
        limit: 10,
        filter: { name: '' }
    })

    const form = reactive<ProvinceEntity>({
        id: '',
        name: '',
        country_id: ''
    });

    /** My Function */
    async function register() {
        state.isLoading = true; 
        state.btnLoading = true; 

        try {
            await provinceService.register(form);
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
        state.btnLoading = false; 
    }

    async function update() {  
        state.isLoading = true; 
        state.btnLoading = true; 

        try {
            await provinceService.update(form);
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
        state.btnLoading = false; 
    }

    async function remove(id: ProvinceEntity) {
        state.isLoading = true; 
        
        try {
            await provinceService.delete(id);
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
        const results =  await provinceService.getAll({
            page: setStateFilter.page,
            limit: setStateFilter.limit,
            filter: setStateFilter.filter
        });

        if (results && results.data && results.status == 'success') {
            state.data.props = results.data.props;
            state.data.total = results.data.total;
            state.isLoading = false;
        }
    }

    return {
        register,
        update,
        remove,
        getOne,
        getAll,
        form,
        setStateFilter,
        state
    };
});