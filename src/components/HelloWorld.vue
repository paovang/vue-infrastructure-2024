<template>
  <div>
    
    <div v-if="state.isSuccess" id="toast-success" class="fixed top-0 right-0 flex items-center w-full max-w-xs p-4 mt-4 mr-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-opacity ease-out" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="sr-only">Check icon</span>
        </div>
        <div class="ms-3 text-sm font-normal">Item moved successfully.</div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>

    <div v-if="state.isClearSuccess" id="toast-success" class="fixed top-0 right-0 flex items-center w-full max-w-xs p-4 mt-4 mr-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-opacity ease-out" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
          </svg>
          <span class="sr-only">Error icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">Clear Success.</div>
      <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
      </button>
    </div>


    <h4 class="text-3xl font-bold underline" style="font-size: 24px">
      ເພີ່ມຜູ້ໃຊ້ລະບົບ
    </h4>
    <br>
      <div>
        <input
          placeholder="ກະລຸນາປ້ອນກ່ອນລະຫັດກ່ອນ..."
          v-model="form.id"
          class="mt-1 p-2 border rounded-md w-full"
        />
         <input
          placeholder="ກະລຸນາປ້ອນຊື່ກ່ອນ..."
          v-model="form.name"
          class="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <br>
      <div>
        <button @click="addUser()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          ເພີ່ມຜູ້ໃຊ້ລະບົບ
        </button>
        <button 
          :disabled="state.isLoading || items.length <= 0" 
          @click="clearUser()"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {{ state.btnClear }}
        </button>
      </div>
      <br>
      <hr>
      <div class="overflow-x-auto">
        <table class="min-w-full border-gray-300">
          <thead>
            <tr>
              <th class="border-b p-2">ລະຫັດ</th>
              <th class="border-b p-2">ຊື່ຜູ້ໃຊ້ລະບົບ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td class="border-b p-2">{{ item.id }}</td>
              <td class="border-b p-2">{{ item.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>

  </div>
</template>

<script setup lang="ts">
  import { userCounterStore } from '../modules/users/stroes/user.store';

  const { addUser, form, items, state, clearUser } = userCounterStore();

</script>

<style scoped>

</style>