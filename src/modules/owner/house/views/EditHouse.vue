<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 style="font-weight: bold; font-size: 20px;" class="arrow-left" @click="goBack()">
                    <i class="pi pi-arrow-left" style="color: green"></i>
                    ຟອມລົງທະບຽນຂໍ້ມູນ
                </h2>
            </span>
        </div>
        <br/>
        <Divider/>
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="columns is-12 is-multiline" style="margin-top: 20px;">
                <div class="column is-mobile-12 is-2">
                    <label>
                        ປະເພດ ບໍລິການ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        name="real_estate_type"
                        style="margin-top: 8px;"
                        v-model="form.real_estate_type_id" 
                        :options="realestateType.props" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                    />
                    <!-- <small class="p-error">{{ errors.real_estate_type }}</small> -->
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        ຮູບເເບບ ບໍລິການ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.service_model" 
                        :options="servicemodels" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກ" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        class="w-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        ປະເພດຫ້ອງ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.room_type" 
                        :options="roomTypes" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກ" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        ເເຂວງ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.province_id" 
                        :options="stateProvince.data.props" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        filter
                        @change="filterDistrictByid(form.province_id)"
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        ເມືອງ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.district_id" 
                        :options="stateDistrict.data.props" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກ..." 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        filter
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="village" 
                        label="ບ້ານ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.village"
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="zipcode" 
                        label="zipcode" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.zip_code"
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="wide" 
                        label="ລວງກວ້າງ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.wide"
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="long" 
                        label="ລວງຍາວ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.long"
                    />
                </div>
                <div class="column is-mobile-12 is-6">
                    <my-input-text 
                        name="location" 
                        label="ລີ້ງເເຜນທີ່" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.location"
                    />
                </div>
                <div class="column is-mobile-12 is-12">
                    <my-input-text-area 
                        name="remark" 
                        label="ລາຍລະອຽດ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.remark"
                    />
                    <!-- <label>
                        ລາຍລະອຽດ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Editor editorStyle="height: 320px" /> -->
                </div>

                <div class="column is-12">
                    <Panel header="ຕັ້ງຄ່າລາຄາ ຊື້ຂາຍ - ເຊົ່າ">
                        <div class="columns is-12" v-for="(input, index) in form.prices" :key="index">
                            <div class="column is-3">
                                <label>
                                    ຮູບເເບບ ບໍລິການ
                                    <span class="text-red-500"> *</span>
                                </label>
                                <Dropdown 
                                    v-model="input.unit_price" 
                                    :options="unitPrices" 
                                    optionLabel="name" 
                                    placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                                    class="w-full" 
                                    optionValue="id"
                                    :highlightOnSelect="true" 
                                    required
                                />
                            </div>
                            <div class="column is-3">
                                <label>
                                    ລາຄາ
                                    <span class="text-red-500"> *</span>
                                </label>
                                <input-number 
                                    v-model="(input.price as number)" 
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    required 
                                    style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'; width: 100% !important;" 
                                />
                            </div>
                            <div class="column is-5">
                                <label>
                                    ລາຍລະອຽດ
                                </label>
                                <input 
                                    name="detail"
                                    type="text" 
                                    class="input" 
                                    v-model="input.detail" 
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    required 
                                    style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'" 
                                />
                            </div>
                            <div class="column is-1">
                                <a @click="removeInput(index)" class="button is-danger remove-btn" v-if="index > 0" style="margin-top: 22px;">
                                    <i class="pi pi-times-circle"></i>
                                </a>
                            </div>
                        </div>
                        <div class="column is-mobile-12 is-12">
                            <a @click="addInput" class="button is-primary">ເພີ່ມລາຍການ</a>
                        </div>
                    </Panel>
                </div>

                <div class="column is-12">
                    <Panel header="ໂປຮໄຟລ ເເລະ ເເກເລີລີ່">
                        <div class="columns is-12 is-multiline">
                            <div class="column is-mobile-12 is-3">
                                <div class="card" style="padding: 0rem !important;">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="content" style="display: flex; justify-content: center">
                                       <span style="padding: 10px !important;">
                                        <Button icon="pi pi-trash" severity="danger" rounded />
                                        <span style="margin-left: 10px;"></span> 
                                        <Button icon="pi pi-pencil" severity="warning" rounded />
                                       </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Panel>
                </div>
                
                
                <div class="column is-mobile-12 is-12 text-right">
                    <Button 
                        style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'"
                        type="submit"
                        severity="info" 
                        :loading="state.btnLoading"
                    >
                        <i class="pi pi-save" style="margin-right: 8px;"></i>
                        ອັບເດດ ຂໍ້ມູນ
                    </Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    // import MyInputText from '@/components/customComponents/FormInputText.vue';
    import MyInputText from '@/components/customComponents/FormEditInputText.vue';
    import MyInputTextArea from '@/components/customComponents/FormEditTextArea.vue';
    import Dropdown from 'primevue/dropdown';
    import { ref, onMounted } from 'vue';
    import Button from 'primevue/button';
    // import Editor from 'primevue/editor';
    import InputNumber from 'primevue/inputnumber'
    import { useForm } from 'vee-validate';
    import { houseSchema } from '../schema/house.schema';
    import Panel from 'primevue/panel';
    import Divider from 'primevue/divider';
    import { realEstateServiceStore } from '../../../rent_house/memberServices/stores/real-estate-service.store';
    import { houseStore } from '../../../owner/house/stores/house.store'
    import { provinceStore } from '../../../address/stores/province.store';
    import { districtStore } from '../../../address/stores/district.store';
    import { useRouter, useRoute } from 'vue-router';
    import { useToast } from "primevue/usetoast";

    const toast = useToast();
    const router = useRouter();
    const route = useRoute();

    const { form, state, update, getOne, houseGetByOne } = houseStore();
    const { getOne: getOneRealEstateService, realestateType } = realEstateServiceStore();
    const { getAll: getAllProvince, state: stateProvince, setStateFilter: setStateProvinceFilter } = provinceStore();
    const { getAll: getAllDistrict, state: stateDistrict, setStateFilter: setStateDistrictFilter } = districtStore();

    
    const goBack = async () => {
        router.push({ name: 'owner.house'});
    }
    
    const addInput = async () => {
        if (form.prices) {
            form.prices.push({ price: '', unit_price: '', detail: '' });
        }
    }

    const removeInput  = async (index: any) => {
        if (form.prices) {
            form.prices.splice(index, 1);
        }
    }


    const { handleSubmit } = useForm<any>({
        validationSchema: houseSchema
    })

    const servicemodels = ref([
        { id: 'sale', name: 'ຂາຍ' },
        { id: 'rent', name: 'ເຊົ່າ' }
    ]);
    
    const roomTypes = ref([
        { id: 'air', name: 'ເເອ' },
        { id: 'fan', name: 'ພັດລົມ' },
        { id: 'no', name: 'ບໍ່ມີ' },
    ]);

    const unitPrices = ref([
        { id: 'day', name: 'ມື້' },
        { id: 'month', name: 'ເດືອນ' },
        { id: 'year', name: 'ປີ' },
    ]);

    onMounted(async() => {
        await initComponent();
    })

    const initComponent = async () => {
        const id = Number(route.params.id);
        state.btnLoading = true;
        await getOne(id);
        await fetchAll();
        state.btnLoading = false;
    }

    const fetchAll = async() => {
        const house = houseGetByOne.data.props;

        form.room_type = house.room_type;
        form.service_model = house.service_model;
        form.village = house.village;
        form.zip_code = house.zip_code;
        form.wide = house.wide;
        form.long = house.long;
        form.remark = house.remark;
        form.location = house.location;
        form.prices = house.price;

        setStateProvinceFilter.limit = 1000;
        await getAllProvince();
        await getOneRealEstateService();

        form.real_estate_type_id = house.real_estate_type ? house.real_estate_type.id : undefined;
        form.province_id = house.province ? house.province.id : undefined;

        if (setStateDistrictFilter.filter) {
            setStateDistrictFilter.filter.province_id = form.province_id;
            await getAllDistrict();
            await selectedDistrict();
        }
    }

    const filterDistrictByid = async (id: any) => {
        if (setStateDistrictFilter.filter) {
            setStateDistrictFilter.filter.province_id = id;
            await getAllDistrict();
            await selectedDistrict();
        }
    }

    const selectedDistrict = async () => {
        form.district_id = houseGetByOne.data.props.district ? houseGetByOne.data.props.district.id : undefined;
    }

    const onSubmit = handleSubmit(async (value) => {
        form.id = String(route.params.id);
        form.village = value.village;
        form.zip_code = value.zipcode;
        form.wide = value.wide;
        form.long = value.long;
        form.remark = value.remark;
        form.location = value.location;

        await update();

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
        }
    })

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: 'ເກີດຂໍ້ຜິດພາດ.', detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: 'ສຳເລັດເເລ້ວ.', detail: 'ການດຳເນີນສຳເລັດເເລ້ວ', life: 3000 });
    }
</script>

<style scoped>
    @import 'bulma/css/bulma.css';

    .p-badge.p-badge-warning {
        margin-left: 40px !important;
    }
    .upload-box {
        position: relative;
        display: block;
        height: 45px;
        background-color: #fff;
        padding: 10px;
    }

    .arrow-left:hover {
        cursor: pointer;
        color: green;
    }
    .card-image:hover {
        cursor: pointer;
    }

</style>