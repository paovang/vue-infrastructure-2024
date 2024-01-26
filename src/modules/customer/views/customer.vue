<template>
    <div>
        <p class="text-3xl font-bold underline" style="font-size: 24px">
            ຂໍ້ມູນ ລູກຄ້າ
        </p>
        <br>
            <FileUpload v-model="form.image" />
        <br>
        <hr>
        <br>
        <div>
            <input
                :type="type"
                :id="id"
                placeholder="ກະລຸນາປ້ອນຊື່ກ່ອນ..."
                v-model="form.name"
                class="mt-1 p-2 border rounded-md w-full"
            />
            <input
                :type="type"
                :id="id"
                v-model="form.email"
                placeholder="ກະລຸນາປ້ອນອີເມວກ່ອນ..."
                class="mt-1 p-2 border rounded-md w-full"
            />
            <label class="flex items-center space-x-2">
                <input type="radio" class="form-checkbox text-blue-500" name="radioGroup" v-model="form.gender" value="female" checked>
                <span class="text-gray-700">ເພດຍີງ</span>

                 <input type="radio" class="form-checkbox text-blue-500" name="radioGroup" v-model="form.gender" value="male">
                <span class="text-gray-700">ເພດຊາຍ</span>
            </label>
        </div>
        <br>
        <div>
            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                @click="registerCustomer()"
            >
                ເພີ່ມ ລູກຄ້າ
            </button>

            <button 
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                @click="getAllCustomers()"
            >
                ສະເເດງຂໍ້ມູນ
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { customerStore } from '../stores/customer.store';
    import FileUpload from '@/modules/customer/components/upload-file.vue';
    
    const { register, getOne, getAll, form } = customerStore();

    async function registerCustomer(): Promise<any> {
        await register();
    }

    async function getAllCustomers(): Promise<any> {
        await getAll();
    }
</script>