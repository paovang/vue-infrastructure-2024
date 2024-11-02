<template>
    <Dialog 
       v-model:visible="visible" 
       modal 
       :header="$t('table.title.customer')" 
       :style="{ width: '50vw'}" 
       :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
   >
       <div class="box-info">
            <div class="box-left">
                <p>{{ $t('table.header.customer_number') }}: {{ props.data.customer_number }}</p>
                <p>{{ $t('table.header.full_name') }}: {{ props.data.name }}</p>
                <p>{{ $t('table.header.address') }}: {{ props.data.address }}</p>
                <p>{{ $t('table.header.country') }}: {{ props.data.country.name }}</p>
                <p>{{ $t('table.header.phone_number') }}: {{ props.data.tel }}</p>
                <p>{{ $t('table.header.email') }}: {{ props.data.email }}</p>
                <p>{{ $t('table.header.id_no') }}: {{ props.data.id_no }}</p>
                <div class="box-profile">
                    <div>
                        {{ $t('table.header.id_image') }}: 
                        <p>
                            <Image :src="props.data.id_image" alt="Image" class="img" />
                        </p>
                    </div>
                    <div class="profile">
                        {{ $t('table.header.profile') }}: 
                        <p>
                            <Image :src="props.data.user.profile" alt="Image" class="img" />
                        </p>
                    </div>
                </div>
            </div>
       </div>
   </Dialog>
</template>

<script setup lang="ts">
   import { ref } from 'vue';
   import Dialog from 'primevue/dialog';
   import Image from 'primevue/image';

   const visible = ref<boolean>(false);
   defineExpose({ visible });
   const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>();

   
   const props = defineProps<{
      data: any
    }>()
</script>

<style lang="scss">
    .box-info {
        .box-left {
            line-height: 30px;
            .box-profile {
                // display: flex;
                .profile {
                    margin-top: 20px !important;
                    // margin: 0 200px;
                }
                // .img {
                //     width: 200px;
                // }
            }
        }
    }
</style>