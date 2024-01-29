<template>
    <div class="card">
      <h2 class="mb-3">ລາຍການບໍລິສັດ</h2>
      <data-table
        :value="products"
        :loading="false"
        lazy
        :totalRecords="products.length"
        @page="onPageChange"
        paginator
        :rows="rowsPerPage"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="ສະແດງ {first} ຫາ {last} ຈາກ {totalRecords} ແຖວ"
      >
      <template #header>
          <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
              <i class="pi pi-search" />
              <input-text
                v-model="search"
                placeholder="ຄົ້ນຫາ..."
                @keyup.enter="onSearch"
                @input="onClearSearch"
                style="font-family: NotoSansLao, Montserrat"
                class="w-full"
              />
            </span>
            <Button
              type="button"
              label="ເພີ່ມບໍລິສັດ"
              icon="pi pi-plus"
              severity="success"
              class="w-full sm:w-auto flex-order-0 sm:flex-order-1"
              @click="createForm.visible = true"
            ></Button>
          </div>
        </template>
  
        <Column field="id" header="ລຳດັບ"></Column>
        <!-- <Column field="id" header="ລຳດັບ"></Column> -->
        <column header="ໂລໂກ" field="logo" class="white-space-nowrap">
          <template #body="{ data }">
            <div class="flex align-items-center justify-content-center">
              <Image
                :src="data.logo"
                alt="logo"
                preview
                :class="data.logo ? 'block' : 'hidden'"
                image-class="bg-contain bg-left bg-no-repeat h-2rem w-full"
              />
            </div>
          </template>
        </column>
        <Column field="name" header="ຊື່"></Column>
        <Column field="email" header="ອີເມວ"></Column>
        <Column field="phone" header="ເບີໂທລະສັບ"></Column>
      </data-table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
  import Column from 'primevue/column';
  import Image from 'primevue/image'
  import InputText from 'primevue/inputtext'
  import Button from 'primevue/button'
  
    const createForm = ref()
    const search = ref<string>('')
    const products = ref<any>([]);
    const currentPage = ref<number>(1);
    const rowsPerPage = ref<number>(10);
  
    async function onSearch() {
      const searchTerm = search.value.toLowerCase();
      if (searchTerm.trim() !== '') {
        products.value = products.value.filter((product: { name: string }) =>
          product.name.toLowerCase().includes(searchTerm)
        );
      } else {
        fetchData();
      }
    }
  
    async function onClearSearch(e: any) {
      console.log(e)
    }
  
    async function onPageChange(event: DataTablePageEvent) {
      currentPage.value = event.page + 1;
      rowsPerPage.value = event.rows;
      console.log(currentPage.value, rowsPerPage.value)
  
      // fetchData();
    }
  
    onMounted(async () => {
      fetchData()
    });
  
  
    async function fetchData() {
      const data = [
        {
          id: '1',
          name: 'ABC Inc.',
          email: 'abc@example.com',
          logo: 'https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ttisypccwnhufcnlpayy'
        },
        {
          id: '2',
          name: 'DEF Corporation',
          email: 'def@example.com',
          phone: '555-123-4567',
          address: '789 Elm Rd',
          logo: 'https://lapnet.com.la/storage/members/June2020/LDB_1.png'
        },
      ]
  
      for (let i = 0; i < 10; i++) {
        const repeatedData = data.map(item => ({ ...item, id: `${i + 1}` }));
        products.value.push(...repeatedData);
      }
    }
  
    // const displayedProducts = computed(() => {
    //   const startIndex = (currentPage.value - 1) * rowsPerPage.value;
    //   const endIndex = startIndex + rowsPerPage.value;
    //   return products.value.slice(startIndex, endIndex);
    // });
  </script>
  