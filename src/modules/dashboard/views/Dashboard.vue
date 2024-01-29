<template>
  <div class="card">
    <h2 class="mb-3">ລາຍການບໍລິສັດ</h2>
    <data-table
      :first="first"
      dataKey="id"
      v-model:selection="selectedProduct" 
      tableStyle="min-width: 50rem"
      :value="products"
      :loading="isLoading"
      lazy
      :totalRecords="totalPage"
      @page="onPageChange"
      paginator
      :rows="rowsPerPage"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="ສະແດງ {first} ຫາ {last} ຈາກ {totalRecords} ແຖວ"
    >

    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <template #header>
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
          <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
            <i class="pi pi-search" style="margin-top: -10px" />
            <input-text
              v-model="search"
              placeholder="ຄົ້ນຫາ..."
              @keyup.enter="onSearch"
              @input="onClearSearch"
              style="font-family: NotoSansLao, Montserrat"
              class="w-full"
            />
          </span>
          <div class="w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0">
              <button
                  type="button"
                  class="p-button p-button-success"
                  @click="addCompany"
              >
                  <i class="pi pi-plus" style="margin-right: 8px;"></i>
                  ເພີ່ມບໍລິສັດ
              </button>
          </div>

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
      <Column field="referal_code" header="ເລກອ້າງອີງ"></Column>
      <Column field="email" header="ອີເມວ"></Column>
      <Column field="phone" header="ເບີໂທລະສັບ"></Column>
    </data-table>

    <Dialog v-model:visible="visible" maximizable modal header="Header" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import Image from 'primevue/image'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog';
import Button from 'primevue/button'
import axios from 'axios';


  const search = ref<string>('')
  const products = ref<any>([]);
  const currentPage = ref<number>(1);
  const rowsPerPage = ref<number>(5);
  const isLoading = ref<boolean>(true);
  const totalPage = ref<number>();
  const selectedProduct = ref();
  const first = ref(0);
  const visible = ref<boolean>(false);

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

  async function  addCompany() {
    const selectedProducts = selectedProduct.value || [];

    const ids = selectedProducts.map((product: any) => product.id);
    console.log(ids);

    visible.value = true;

    console.log(visible.value);
  }

  // watchEffect(() => {
  //   if (selectedProduct.value) {
  //     const selectedProductId = selectedProduct.value;
  //     console.log(`Selected Product ID: ${selectedProductId}`);
  //     // Do whatever you need with the selectedProductId
  //   }
  // });

  async function onClearSearch(e: any) {
    console.log(e)
  }

  async function onPageChange(event: DataTablePageEvent) {
    currentPage.value = event.page + 1;
    rowsPerPage.value = event.rows;

    getAffiliateProducts();
  }
  

  onMounted(async () => {
    getAffiliateProducts()
  });

  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiMzM2M2UwMThmNjE2YWFmZDFjMmQ5MWYzMTNhMTg3OTI4YWUzYmE3ZWE4OTMyY2E2OGUyYmY4MTgyY2RmYzIwZmVhNjFiYmUwZDI0YzdmNzIiLCJpYXQiOjE3MDY1MDgzODMuNzM5ODY1LCJuYmYiOjE3MDY1MDgzODMuNzM5ODY4LCJleHAiOjE3MzgxMzA3ODMuNzI3MzE2LCJzdWIiOiIzMDQ3NzciLCJzY29wZXMiOltdfQ.qpI9EGA2KgQp039WbVFS_JN1dgZYr1p6MNQQtCxxWqUzoTvlY6MnIS9nlnsgVVu8UUc_-sYYiMmLWWA_sWviR0Owy-xsQ5icTMcjN8kBvVWjxSj1zzb8BHMSH5YxahkaW7Vcvw8l6bWdO5189zACENipcRpJyjIU5TD67o0q41KcUo3HycAvytfhEOv2Cq6wwsDt0Km_p9xrGd_pM0lxgwuN_BW_0ETqAIImvRqrzB4XPwFs4EUfgxRLYcS2Bc7ycwhHdG9Cjo88ZgZBb1QLHWw1UZclJ8Lh4q7QurIEksG6l62coSbWbG2LW_9v4p1ACycerDVm8uN7NNQrScNF6LjWE6nYrYr-eUu7gHMaIpC3Y8qOxUIV6ELvtkBT_HiDlOvDaEBwYL4XhqPgqXtQLzs58SVc9xqXRkQ_R3C0qLemn9WQ1A9aItXtt3bZ551qZiznJMb7vpGizzPx1_R4N0q3-QifX_ozQVbxOAZbQJHAz0tWrnFZEAjVnV6bH31yfdNS3Jw7cyMf-pOJJIZ8O2otcm_Y8CvLBpOfaLRB54QGemrB6iduJBH8Yw1sVPWtwxKlCvNZOr9oJbArRGpMGIONZF4kbWNu-s5WqJBptelEIpqkIIlJhjceNqE4bBrVEhNJVJOBxFSKHAek0z4bbL9Ns30YQeqbCSEWuxXuZPw`
    }
  });

  async function getAffiliateProducts() {
    isLoading.value = true;
    setTimeout(async () => {
      const response = await axiosInstance.get('https://hal-test.hal-logistics.la/api/admin/list-affiliate-products', {
        params: {
          status: '',
          q: '',
          page: currentPage.value,
          per_page: rowsPerPage.value
        }
      });

      // console.log(response.data.data.pagination.total);
      if (response) {
        isLoading.value = false;

        totalPage.value = response.data.data.pagination.total;
        products.value = response.data.data.data;
        
      }
    }, 500);
  }


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

<!-- https://flowbite.com/docs/components/sidebar/ -->