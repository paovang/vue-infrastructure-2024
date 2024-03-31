<template>
    <div class="signup-form">
        <InputText hidden ref="autoFocusCursor"/>
        <h2 style="font-size: 20px; font-weight: bold;">
            {{ $t('messages.sign_up')}}
        </h2>
        <Divider />
        <br/>
        <div>
            <p v-html="content" style="font-size: 18px;"></p>
        </div>
        <br/>
        <Divider />
        <br/>
        <div class="flex align-items-center">
            <Checkbox v-model="formSignUp.check_rule" inputId="ingredient1" name="rule" binary />
            <label for="ingredient1" class="ml-2"> ຂ້ອຍເຫັນດີ </label>
        </div>
        <br/>
        <div class="column is-12 is-mobile-12" style="margin-top: -10px;">
            <my-input-text 
                name="id_no" 
                :label="$t('messages.id_no')" 
                required 
                :placeholder="$t('placeholder.inputTextIdNo')"  
                class="h-full" 
                :disabled="!formSignUp.check_rule"
            />
        </div>
        <div class="column is-12 is-mobile-12" style="margin-top: -30px;">
            <my-input-file 
                name="id_image" 
                :label="$t('messages.id_image')" 
                required 
                :multiple="true"
                class="h-full" 
                @change="handleFileChange"
                :disabled="!formSignUp.check_rule"
            />
        </div>
        <br/>
        <Button
            class="w-full surface-500 border-none"
            type="submit"
            :label="$t('button.sign_up')"
            :loading="state.btnLoading"
            @click="submitForm"
            :disabled="!formSignUp.check_rule"
        />
    </div>
</template>

<script setup lang="ts">
    import Checkbox from 'primevue/checkbox';
    import Divider from 'primevue/divider';
    import { ref } from 'vue';
    import { homerealEstateStore } from '../stores/home.store';
    import Button from 'primevue/button';
    import { onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useI18n } from 'vue-i18n';
    import { useToast } from 'primevue/usetoast';
    import { scrollToTop } from '@/common/utils/scroll-top';
    import InputText from 'primevue/inputtext';
    import { showNotificationToast } from '@/common/utils/toast';
    import { uploadFileToServer } from '@/common/utils/upload-file';
    import { isValidFileSize, validFileTypes } from '@/common/utils/validation.file';
    import axios from 'axios';
    import { useForm } from 'vee-validate';
    import MyInputFile from '@/components/customComponents/FormInputFile.vue';
    import MyInputText from '@/components/customComponents/FormInputText.vue';

    const { formSignUp, register, state } = homerealEstateStore();
    const { query } = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const toast = useToast();

    const content = ref('<p class="ql-align-center"><strong class="ql-size-huge">ກົດລະບຽບລົທະບຽນຂອງ ຢູເຄລາວ</strong><span class="ql-size-huge"> (</span><strong class="ql-size-large">UKLAO )</strong></p><p class="ql-align-center">&nbsp;</p><p><span class="ql-size-large">1) </span>UKLAO <span class="ql-size-large">ຍິນດີເປີດ</span><span class="ql-size-large" style="color: black;">ບໍລິການ</span><span class="ql-size-large">ໃຫ້ທຸກທ່ານສາມາດ</span><span class="ql-size-large" style="color: black;">ໂຄສະນາທຸລະກິດ,ໂຄສະນາສິນຄ້າ,</span><span class="ql-size-large">ຂາຍສິນຄ້າ ແລະ ຊື້ສິນຄ້າອຸປະໂພກ,ບໍລິໂພກ ແລະ ອື່ນໆອີກ,ຜ່ານທາງອອນໄລໄດ້ຊຶ່ງທຸກຄົນສາມາດສະແກນ QR Code – ເລກບັນຊີ ຂອງຜູ້ຂາຍໃນການຈ່າຍຄ່າສິນຄ້າ,ແຕ່ທຸກຄົນຕ້ອງມີບັນຊີຈີ່ງສາມາດ ຂາຍ ແລະ ຊື້ ໄດ້. ການເປີດບັນຊີນັ້ນແມ່ນບໍ່ໄດ້ເສຍຄ່າທໍານຽມໃດໆ. ຖ້າທ່ານໃດຫາກຂາຍສິນຄ້າທີ່ຜິດຕໍ່ກົດຫມາຍ, </span>UKLAO <span class="ql-size-large">ຈະແຈ້ງໃຫ້ເຈົ້າຫນ້າທີ່ດໍາເນີນຕາມລະບຽບກົດຫມາຍ ແລະ ຈະຕ້ອງໄດ້ເສຍຄ່າໃນການດໍາເນີນຄະດີດັ່ງກ່າວນັ້ນກັບທຸກຂະແໜງການທີ່ກ່ຽວຂ້ອງໂດຍທີ່ບໍມີສິດຕໍ່ວ່າໃດໆ. ຊຶ່ງທາງ ຢູເຄລາວ ຈະບໍ່ມີຄວາມຜິດນໍາ ແລະ ຈະບໍ່ຮັບຜິດຊອບແຕ່ຢ່າງໃດ&nbsp;.</span></p><p><span class="ql-size-large"> (</span><span class="ql-size-large" style="color: rgb(0, 102, 204);">ສິນຄ້າທຸກຢ່າງຈະຕ້ອງຖຶກຕ້ອງຕາມກົດຫມາຍ</span><span class="ql-size-large">)</span></p><p><span class="ql-size-large">2) ໃນທຸກຄັ້ງທີ່ທ່ານໄດ້ຂາຍສິນຄ້າ, ທ່ານຈະໄດ້ຈ່າຍເປີເຊັນໃນການຂາຍສິນຄ້ານັ້ນໃຫ້ </span>UKLAO <span class="ql-size-large">ຕາມທີ່ຢ່ໃນບັນຊີຂອງທ່ານ.</span></p><p><span class="ql-size-large">3) ທຸກຄັ້ງທີ່ທຸກຄົນໄດ້ຂາຍສິນຄ້າ ແລະ ຊື້ສິນຄ້າແມ່ນຈະໄດ້ຮັບເປີເຊັນຈາກການຂາຍ ແລະ ການຊື້. </span>UKLAO <span class="ql-size-large">ຈະສົ່ງເງີນເປີເຊັນນັ້ນໃຫ້ທຸກຄົນໃນທຸກໆເດືອນ. ຊຶ່ງທາງ ຢູເຄລາວ ຈະແຈ້ງໃຫ້ທຸກຄົນຊາບພາຍຫລັງ.</span></p><p><span class="ql-size-large">4)&nbsp;ສິນຄ້າທຸກຢ່າງທີ່່ທ່ານຂາຍຕ້ອງຖືກຕ້ອງຕາມຮູບ,ຕ້ອງມີຄຸນນະພາບຕໍ່ກັບຜູ້ບໍລິໂພກ.ຖ້າທ່ານໃດຫາກຂາຍສິນຄ້າທີ່ບໍ່ຕົງກັບຮູບ,ບໍ່ມີຄຸນນະພາບຕໍ່ກັບຜູ້ບໍລິໂພກ, </span>UKLAO<span class="ql-size-large"> ຈະບໍ່ຮັບຮູ້ ແລະ ຈະບໍ່ເຂົ້າຮ່ວມໃນການກ່າຍເຄ່ຍແຕ່ຢ່າງໃດ,ຊິ່ງທັງສອງຝ່າຍຈະໄກ່ເຄ່ຍກັນເອງ.</span></p><p><span class="ql-size-large">5) ທຸກຄົນທີ່ໃຊ້ບໍລິການ</span>&nbsp;<span class="ql-size-large">ກັບ uklao ຈະຕ້ອງປະຕິບັດຕາມກົດລະບຽບທັງໝົດຂອງ&nbsp;</span>UKAO<span class="ql-size-large"> ຊຶ່ງແຕ່ລະຄົນຈະຕ້ອງອ່ານ&nbsp;ໃຫ້ລະອຽດ ແລະ ເຂົ້າໃຈກ່ອນຈະດໍາກິດຈະການຂອງຕົນເອງ.</span></p><p><span class="ql-size-large">6) ຊຶ່ງທຸກຄົນຈະເຫັນກົດລະບຽບຂອງ </span>UKLAO<span class="ql-size-large"> ຢູ່ໃນບັນຊີຂອງຕົນເອງ ພາຍຫລັງລົງທະບຽນສໍາເລັດແລ້ວ.&nbsp;&nbsp;</span></p><p><span class="ql-size-large">&nbsp;7) </span>UKLAO<span class="ql-size-large"> ມີສິດປ່ຽນແປງກົດລະບຽບທຸກເມື່ອ.ໃນກໍລະນີ </span>UKLAO<span class="ql-size-large"> ຫາກມີການປ່ຽນແປງກົດລະບຽບ. </span>UKLAO<span class="ql-size-large"> ຈະແຈ້ງໃຫ້ທຸກຄົນຊາບ.ສະນັ້ນທຸກຄົນຕ້ອງຕິດຕາມການແຈ້ງເຕືອນຂໍ້ມູນຕ່າງໆຢ່າງໃກ້ສິດໃນບັນຊີຂອງຕົນເອງຊິ່ງທຸກທ່ານສາມາດເບິ່ງການແຈ້ງດັ່ງນີ້:</span></p><p><span class="ql-size-large">1.ຕ້ອງຕິດຕາມການແຈ້ງເຕືອນທີ່ ຂໍ້ຄວາມຈາກ&nbsp;</span>UKLAO<span class="ql-size-large">.</span></p><p><span class="ql-size-large">2.ຄຮິກ About us(ພວກເຮົາ), ແລ້ວ ຄຮິກ Text from system</span>( UKLAO )<span class="ql-size-large">. ຈະເຫັນກົດລະບຽບຂອງ</span> UKLAO<span class="ql-size-large">.</span></p><p><span class="ql-size-large">8) ທຸກຄົນທີ່ໃຊ້ບໍລິການກັບ&nbsp;</span>UKLAO<span class="ql-size-large"> ຈະຕ້ອງປະຕິບັດຕາມກົດລະບຽບທັງໝົດຂອງ </span>UKLAO<span class="ql-size-large">&nbsp;ຖ້າທ່ານໃດຫາກບໍ່ປະຕິບັດຕາມກົດລະບຽບຂອງ </span>UKLAO<span class="ql-size-large"> ທາງ</span> UKLAO <span class="ql-size-large">ມີສິດເຕັມຕົວແຈ້ງໃຫ້ເຈົ້າຫນ້າທີ່່ຕາມລະບຽບກົດຫມາຍ.</span></p><p><span class="ql-size-large">9) ຫລັງຈາກທ່ານ ລົງທະບຽນສໍາເລັດແລ້ວ, ທ່ານຈະເຂົ້າໄປໃນ ອີແມວ ຂອງທ່ານເພື່ອຈະເອົາ ລະຫັດຢືນຢັນ ມາ ຢືນຢັນ ເພື່ອຈະເຂົ້າໄປໃນບັນຊີຂອງທ່ານ ຫຼື ບໍ່ໃຊ້ກໍ່ໄດ້. ຊຶ່ງທ່ານຈະຕ້ອງໄດ້ລໍຖ້າໃຫ້ພວກເຮົາກວບສອບຂໍ້ມູນຂອງທ່ານ ປະມານ 10 ນາທີ ຫາ 24 ຊົ່ວໂມງ ຖ້າຍັງບໍ່ສາມາດເຂົ້າໃນບັນຊີຂອງທ່ານໄດ້ ນັ້ນ ໝາຍຄວາມວ່າ ການລົງທະບຽນຂອງທ່ານບໍ່ຜ່ານ. ຊຶ່ງທ່ານຈະຕ້ອງໄດ້ຕິດຕໍ່ຫາ ພະນັກງານ ຝ່າຍບໍລິການລູກຄ້າ. ຂໍ້ມູນທັງໝົດໃນການລົງທະບຽນຕ້ອງຖຶກຕ້ອງຕາມຄວມຈິງ.</span></p><p><span class="ql-size-large">10) ທຸກຄົນທີ່ຢູ່ໃນ ຢູເຄລາວ ຕ້ອງເຄົາລົບນັບຖືຮັກແພງຊຶ່ງກັນແລະກັນ, ຕ້ອງຊື່ສັກ ຫ້າມໃສ່ຮ້າຍປ້າຍສີ, ຫ້າມກ່າວຫາ, ຫ່າມຫລອດລວງ, ຫ້າມກະທໍາສິ່ງທີ່ບໍ່ດີ ຕໍ່ຜູ້ອື່ນໆ&nbsp;( ຢູ່ໃນ ຢູເຄລາວ ).</span></p><p><span class="ql-size-large" style="color: rgb(51, 51, 51);">11) ທາງ </span><span style="color: rgb(51, 51, 51);">UKLAO</span><span style="color: rgb(51, 51, 51);" class="ql-size-large"> ມີສິດແກ້ໄຂ ຫຼື ປ່ຽນແປງກົດລະບຽບໃນເມື່ອເຫັນວ່າຄວາມຈະຕ້ອງໄດ້ແກ້ໄຂດັບແປງຄືນໃໝ່, ຊຶ່ງຈະແຈ້ງໃຫ້ທກຄົນໃນບັນຊີຂອງຕົນເອງ (&nbsp;</span><span style="color: rgb(230, 0, 0);" class="ql-size-large">ທີ່ ຂໍ້ຄວາມຈາກ&nbsp;</span><span style="color: rgb(230, 0, 0);">UKLAO</span><span style="color: rgb(51, 51, 51);">&nbsp;</span><span style="color: rgb(51, 51, 51);" class="ql-size-large">).</span></p><p><span class="ql-size-large" style="color: rgb(51, 51, 51);">12) ຖ້າຜູ້ໃດຫາກບໍ່ປະຕິບັດຕາມກົດລະບຽບທັງຫມົດຂອງ uklao ມາທໍາສິ່ງທີ່ບໍ່ດີຕໍ່ພະນັກງານ, ສະຖານທີ່, ເຄື່ອງຂອງໃນ ຢູເຄລາວ ແລະ ທຸກໆທີ່ໃນສັງຄົມຕໍ່ກັບທຸກໆຄົນທີ່</span><span class="ql-size-large">ຢູ່</span><span class="ql-size-large" style="color: rgb(51, 51, 51);">ໃນ ຢູເຄລາວ ແລ້ວ, ຜູ້ນັ້ນຈະຫມົດສິດທັງຫມົດຕໍ່ກັບການວ່າຄວາມທຸກກໍລະນີພ້ອມທັງຈ່າຍຄ່າຄວາມເສຍຫາຍຕໍ່ການກະທໍາດັ່ງກ່າວຕາມໜັກຫຼືເບົາເປັນຈໍານວນເງີນ 15 ຫາ 100 ລ້ານກີບຕໍ່ຄົນ, ຊິ່ງທຸກຄົນທີ່ຢູ່ໃນເຫດການດັ່ງກ່າວຈະຖຶກຈໍາຄຸກຕາມລະບຽບກົດໝາຍທີ່ກ່ຽວຂ້ອງ. ພ້ອມທັງຈ່າຍຄ່າປັບຫມາຍຕາມການຮຽກຮ້ອງຂອງຜູ້ທີ່ຖືກກ່າວຫາ ແລະ ຈະຕ້ອງຈ່າຍຄ່າທໍານຽນຕ່າງໆໃນການດໍາເນີນຄະດີດັ່ງກ່າວແຕ່ເລີ່ມຈົນຈົບຊີ່ງຜູ້ທີ່ບໍ່ປະຕິບັດຕາມກົດລະບຽບທັງຫມົດຂອງ uklao ຈະບໍ່ມີສິດຕໍ່ວ່າໃດໆ.&nbsp;ແລ້ວ ຈະຕ້ອງປະຕິບັດຕາມລະບຽບກົດໝາຍທີ່ກ່ຽວຂ້ອງຢ່າງ</span><span class="ql-size-large">ເຂັ້ມ</span><span class="ql-size-large" style="color: rgb(51, 51, 51);">ງວດ.&nbsp;</span></p><p><span class="ql-size-large">13) ຖ້າທ່ານເຫັນດີປະຕິບັດຕາມກົດລະບຽບຂອງ </span>UKLAO <span class="ql-size-large">ໃຫ້</span><span class="ql-size-large" style="color: rgb(51, 51, 51);">ລົງຮູບຂອງທ່ານ</span><span class="ql-size-large">ໄວ້ເປັນຫລັກຖານດັ່ງລຸ່ມນີ້:</span></p><p><br></p><p><span class="ql-size-large"> + ບັດປະຈໍາຕົວ; ໃບຂັບ</span>ຂີ່<span class="ql-size-large">, Passport ໃຊ້ຮູບດຽວ ຮູບໃດກໍ່ໄດ້ ( original ID, choose one ).</span></p><p><span class="ql-size-huge">ອັດໂຫລດຮູບ (</span><span class="ql-size-large">ຮູບຕ້ອງເຫັນແຈ້ງຕາມຕົວຈິງ </span><span class="ql-size-large" style="color: rgb(230, 0, 0);">ຫ້າມ ກ໊ອບປີ່</span><span class="ql-size-huge"> ) </span><span class="ql-size-large">ຮູບຕ້ອງຖ່າຍຕານຕົວຈິງ.</span></p><p><br></p><p><span class="ql-size-huge">﻿</span><img src="http://uklao.com/uploads/policy/1749258325516737.png"></p><p><span class="ql-size-huge"> </span></p>');

    const { handleSubmit, handleReset } = useForm<any>({})

    const submitForm = handleSubmit(async (value: any) => {
        if (formSignUp.check_rule === true && selectedImage.value) {
            formSignUp.isValidToServer = false;
            formSignUp.id_no = value.id_no;
            formSignUp.id_image = selectedImage.value;

            await register();

            if (state.error) {
                await showWarningValidateBackend();
            } else {
                await showToastSuccess();
                await handleReset();
                router.push({ name: 'sign.up'});
            }
        }
    })

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }

    const autoFocusCursor = ref();
    const scrollToInput = async () => {
        if (autoFocusCursor.value) {
            await scrollToTop(autoFocusCursor);
        }
    }

    onMounted(async() => {
        await scrollToInput();
        formSignUp.check_rule = false;

        if (Object.keys(query).length !== 0) {
            const value = query;
            
            formSignUp.name = String(value.name);
            formSignUp.owner = String(value.owner);
            formSignUp.address = String(value.address);
            formSignUp.email = String(value.email);
            formSignUp.phone_number = String(value.phone_number);
            formSignUp.password = String(value.password);
            formSignUp.password_confirmation = String(value.password_confirmation);
            formSignUp.profile = String(value.profile);
            formSignUp.country_id = String(value.country_id);
        }
    })

    const selectedImage = ref();
    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];

        if (! await validFileTypes(file)) {
            await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.profile_valid_file_mimes") });
            event.target.value = '';
            return;
        }
        if (! await isValidFileSize(file)) {
            await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.profile_valid_file_size") });
            event.target.value = '';
            return;
        }

        await uploadFileToServer({ axios, file, state, selectedImage, toast, t });
    }

</script>

<style scoped>
    @import 'bulma/css/bulma.css';
    
    .signup-form {
        width: 60%;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
        .signup-form {
            width: 100% !important;
        }
    }
</style>