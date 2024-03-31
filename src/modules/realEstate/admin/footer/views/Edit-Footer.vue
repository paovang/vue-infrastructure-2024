<template>
    <div class="card">
        <!-- <Editor v-model="value" editorStyle="height: 320px" /> -->

        <form @submit.prevent="submitForm">
            <div class="columns is-12 is-multiline">
                <div class="column is-12 is-mobile-12">
                    <label style="font-weight: bold;">
                        {{ $t('messages.shop_on')}}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Editor editorStyle="height: 400px" v-model="getFooter.data.props.shop_on" style="margin-top: 10px;" />
                </div>
                <div class="column is-12 is-mobile-12">
                    <label style="font-weight: bold;">
                        {{ $t('messages.customer_service')}}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Editor editorStyle="height: 400px" v-model="getFooter.data.props.customer_service" style="margin-top: 10px;" />
                </div>
                <div class="column is-12 is-mobile-12">
                    <label style="font-weight: bold;">
                        {{ $t('messages.payment_information')}}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Editor editorStyle="height: 400px" v-model="getFooter.data.props.payment_information" style="margin-top: 10px;" />
                </div>
            </div>
        
            <p style="font-weight: bold;">{{ $t('messages.contact_us') }}</p>
            <Divider/>
            <br/>
            <div class="columns is-12 is-multiline">
                <div class="column is-6 is-mobile-12">
                    <my-input-text 
                        name="facebook" 
                        :label="$t('messages.facebook')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-6 is-mobile-12">
                    <my-input-text 
                        name="line" 
                        :label="$t('messages.line')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-6 is-mobile-12 is-margin-top">
                    <my-input-text 
                        name="wechat" 
                        :label="$t('messages.wechat')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-6 is-mobile-12 is-margin-top">
                    <my-input-text 
                        name="whatsapp" 
                        :label="$t('messages.whatsapp')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-6 is-mobile-12 is-margin-top">
                    <my-input-text 
                        name="email" 
                        :label="$t('messages.email')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-6 is-mobile-12 is-margin-top">
                    <my-input-text 
                        name="phone_number" 
                        :label="$t('messages.phone_number')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-12 is-mobile-12" style="text-align: right;">
                    <Button 
                        style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'"
                        type="submit"
                        severity="info" 
                    >
                        <i class="pi pi-save" style="margin-right: 8px;"></i>
                        {{ $t('button.edit_data') }}
                    </Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import Editor from 'primevue/editor';
    import Divider from 'primevue/divider';
    import MyInputText from '@/components/customComponents/FormInputText.vue';
    import Button from 'primevue/button';
    import { footerStore } from '../stores/store';
    import { onMounted } from 'vue';
    import { FooterEntity } from '../entities/entity';
    import { useForm } from 'vee-validate';
    import { footerSchema } from '../schema/shema';
    import { useI18n } from 'vue-i18n';
    import { useToast } from 'primevue/usetoast';


    const { t } = useI18n();
    const toast = useToast();
    const footerId = "1";
    // const value = ref('');

    // value.value = '<p><strong class="ql-size-large" style="color: rgb(230, 0, 0);">Our policies.</strong></p><p>1) All product must be legal of the country.</p><p>2) We are open for everyone to sell your products on our website.</p><p>Clothing, Shoes, Lotion, Makeup, Cream, pets, Meat, Food, Phone, Computer, Car, Car Rental, Tourist car, Hotel, and Other.</p><p><span style="color: rgb(102, 185, 102);">ID Refer for everyone Sign Up: </span> 62830051</p><p><span style="color: rgb(240, 102, 102);">Sign Up information.</span></p><p>All information must the same, information in your bank account.</p><p>1) ສິນຄ້າທັງໝົດຂອງທ່ານຈະຕ້ອງຖືກຕ້ອງຕາມກົດໝາຍຂອງປະເທດ.</p><p>2) ພວກເຮົາເປີດໃຫ້ທຸກຄົນຂາຍສິນຄ້າຂອງທ່ານໃນເວັບໄຊທ໌ຂອງພວກເຮົາ.</p><p>ເຄື່ອງນຸ່ງ, ອາຫານ, ໂທລະສັບ, ບັດໂທລະສັບ, ຄອມພິວເຕີ, ເຄື່ອງໃຊ້ໄຟຟ້າ,</p><p>ເຄື່ອງສໍາອາງ, ສັດລ້ຽງ, ຂາຍລົດ, ເຊົ່າລົດ, ຈອງລົດນໍາທ່ຽວ, ຈອງໂຮງແຮມ,</p><p>ແລະ ອື່ນໆ.</p><p><span style="color: rgb(102, 185, 102);">ລະຫັດຢືນຢັນໃນການລົງທະບຽນ:</span> 12026575, 62830051</p><p><span class="ql-size-large" style="color: rgb(240, 102, 102);">ຂໍ້ມູນໃນການລົງ​ທະ​ບຽນ</span></p><p>ຂໍ້ມູນທັງໝົດໃນການລົງ​ທະ​ບຽນຈະຕ້ອງຄືກັນກັບຂໍ້ມູນໃນບັນຊີທະນາຄານຂອງທ່ານ.</p><p>1) สินค้าทั้งหมดของคุณจะต้องถูกต้องตามกฎหมายของประเทศ.</p><p>2) เราเปิดให้ทุกคนขายสินค้าของคุณในเว็บไซต์ของเรา.</p><p>เสื้อผ้า, อาหาร, โทรศัพท์, บัตรโทรศัพท์, คอมพิวเตอร์,</p><p>เครื่องใช้ไฟฟ้า, เครื่องสำอาง, สัตว์เลี้ยง, ขายรถ, เช่ารถ ,</p><p>จองทัวร์, จองโรงแรม,จองไกด์นำเที่ยว ฯลฯ.</p><p><span style="color: rgb(102, 185, 102);">รหัสยืนยันในการเข้าสมัคร:</span><span style="color: rgb(153, 51, 255);"> </span> 12026575, 62830051.</p><p><span class="ql-size-large" style="color: rgb(240, 102, 102);">ข้อมูลในการสมัคร.</span></p><p>ข้อมูลทั้งหมดของคุณจะต้องเหมือนกับข้อมูลในบัญชีธนาคารของคุณ.</p><p>1) Tất cả các sản phẩm của ông bá phải tuân thủ theo luật pháp của đất nước.&nbsp;&nbsp;</p><p>2) chúng tôi mở cửa cho tất cả mọi người bản sản phẩm của bạn trên web của chúng tôi.</p><p>&nbsp;&nbsp;Quần áo,thực ăn, điện thoại, thẻ điện thoai, máy tính, điện tự, mỹ phẩm, vật nuôi,bán xe, thuê xe, đặt xe khách sản, đặt khách sản và vân vân.</p><p><span style="color: rgb(102, 185, 102);">&nbsp;Mã xác nhận để đăng ký.</span> 62830051</p><p>&nbsp;thông tin ứng dụng.</p><p>&nbsp;tất cả thông tin ứng dụng phải giống với thông tin tài khoản ngân hàng của bạn.</p><p>1) All product must be legal of the country.</p>';

    const { form, state, update, getOne, getFooter } = footerStore();

    const translatedErrorMessages = {
        facebook: t('placeholder.inputText')
    }

    const { handleSubmit, setFieldValue, handleReset } = useForm<any>({
        validationSchema: footerSchema(translatedErrorMessages)
    })

    const submitForm = handleSubmit( async (value: any) => {
        form.id = footerId;
        form.facebook = value.facebook;
        form.whatsapp = value.whatsapp;
        form.wechat = value.wechat;
        form.line = value.line;
        form.email = value.email;
        form.phone = value.phone_number;
        form.shop_on = getFooter.data.props.shop_on;
        form.payment_information = getFooter.data.props.payment_information;
        form.customer_service = getFooter.data.props.customer_service;

        await update();

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await handleReset();
            await fetchData();
        }
    })

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }
  
    const fetchData = async () => {
        await getOne(footerId as FooterEntity);

        const response = getFooter.data.props;

        setFieldValue('facebook', response.facebook);
        setFieldValue('whatsapp', response.whatsapp);
        setFieldValue('wechat', response.wechat);
        setFieldValue('line', response.line);
        setFieldValue('email', response.email);
        setFieldValue('phone_number', response.phone);
    }

    onMounted(async () => {
        await fetchData();
    })
</script>

<style scoped>
    @import 'bulma/css/bulma.css';

    .is-margin-top {
        margin-top: -30px;
    }
</style>../entities/entity