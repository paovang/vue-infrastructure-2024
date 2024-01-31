<template>
   <Dialog
      v-model:visible="visible"
      modal
      :header="headerText"
      @hide="emit('onSuccess'), clearErrorMessage()"
      :style="{ width: '30rem' }"
      :breakpoints="{ '960px': '75vw', '640px': '95vw' }"
    >
    <form
      @submit.prevent="handleSubmit(onSubmit)"
      class="flex flex-column gap-3"
    >
      <div class="flex flex-column align-items-center justify-content-center">
          <div class="col-12 md:col-12">
            <div class="flex flex-column">
              <label for="name" class="font-bold">ຊື່ບໍລິສັດ</label>
              <InputText 
                type="text" 
                name="referal_code" 
                id="referal_code"
                placeholder="ກະລຸນາປ້ອນ..." 
              />
            </div>
          </div>
          <div class="col-12 md:col-12">
            <div class="flex flex-column">
              <label for="name" class="font-bold">ຊື່ບໍລິສັດ</label>
              <InputText 
                type="text" 
                id="referal_code" 
                name="referal_code1"
                v-model="(props.form.referal_code as string)" 
                placeholder="ກະລຸນາປ້ອນ..." 
              />
            </div>
          </div>
          <div class="col-12 md:col-12">
            <div class="flex flex-column">
              <Button 
                type="submit"
                :label="!props.id ? 'ບັນທຶກ' : 'ແກ້ໄຂ'"
                severity="warning" 
                :loading="props.isLoading" 
              />
            </div>
          </div>
        </div>
      </form>
  </Dialog>
</template>
  
<script setup lang="ts">
    import { ref, computed } from 'vue';
    import Dialog from 'primevue/dialog'
    import InputText from 'primevue/inputtext'
    import Button from 'primevue/button'
    // import { useForm } from 'vee-validate'
    // import { createCustomerSchema } from '../schema/customer.schema'

    const visible = ref<boolean>(false);
    defineExpose({ visible });
    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>()

    const props = defineProps<{
      id: boolean,
      form: any,
      onSubmit: any
      isLoading: boolean,
    }>()


    // const { validate } = useForm({
    //   validationSchema: createCustomerSchema,
    //   values: props.form,
    // });

    function clearErrorMessage() {
      visible.value = false;
      console.log('await clear...');
    }

    const headerText = computed(() => {
      if (props.id) {
        return `ແກ້ໄຂບໍລິສັດ : ${props.form.id}`;
      } else {
        return 'ເພີ່ມບໍລິສັດ';
      }
    });

    const handleSubmit = (async (event: any) => {
      await props.onSubmit(event);
    })

    // const handleSubmit = async (event: any) => {
    //   const { errors } = await validate();
  
    //   if (Object.keys(errors).length === 0) {
    //     console.log('Validation passed. Submitting form:', event);
    //     await props.onSubmit(event);
    //   } else {
    //     console.log('Validation failed:', errors);
    //   }
    // }
</script>
  