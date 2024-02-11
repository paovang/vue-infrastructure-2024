import { reactive, ref } from 'vue';
import { defineStore } from 'pinia'
import { container } from 'tsyringe'
import { IGState } from '@/common/interfaces/state.interface';
import { IGPaginate, IGPaginated } from '@/common/interfaces/pagination.interface';
import { HouseEntity } from '../entities/house.entity';
import { HouseService } from '../services/house.service';

export const houseStore = defineStore('house-store', () => {
    const service = container.resolve<HouseService>(HouseService);
    
    const state = reactive<IGState<IGPaginated<HouseEntity>>>({
        data: {
          props: [],
          total: 0
        },
        isLoading: false,
        btnLoading: false,
        error: ''
    })

    
    type FilterType = Pick<HouseEntity, 'real_estate_type_id' | 'service_model' | 'room_type' | 'village' | 'district_id' | 'province_id' | 'wide' | 'long'>;
    const setStateFilter = reactive<IGPaginate<FilterType>>({
        page: 1,
        limit: 10,
        filter: { 
            real_estate_type_id: '',
            service_model: '',
            room_type: '',
            village: '',
            district_id: '',
            province_id: '',
            wide: '',
            long: ''
        }
    });
    
    const form = reactive<HouseEntity>({
        id: '',
        real_estate_type_id: '',
        district_id: '',
        service_model: '',
        image: '',
        room_type: '',
        village: '',
        location: '',
        zip_code: '',
        wide: '',
        long: '',
        remark: '',
        prices: []
    });

    async function register() {
        state.isLoading = true; 
        state.btnLoading = true; 

        try {
            await service.register(form);
            // await getAll();

            state.error = '';
            // clearForm();
        } catch (error: any) {
            let responseError = '';
            if (error.response.status === 422) {
                state.isLoading = false;
                state.btnLoading = false; 

                responseError = Object.keys(error.response.data.errors)
                    .map((key) => `${key}: ${error.response.data.errors[key].join(', ')}`)
                    .join('; ')

                state.error = responseError;
            } else {
                state.error = error.message;
            }
        }
        
        state.isLoading = false;
        state.btnLoading = false; 
    }


    return {
        form,
        setStateFilter,
        state,
        register
    };
});