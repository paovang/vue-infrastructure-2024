<template>
  <div class="card">
    <h2 class="mb-3">ລາຍການບໍລິສັດ</h2>
    <data-table
    dataKey="id"
    v-model:selection="selectedProduct" 
    tableStyle="min-width: 50rem"
    :value="products"
    :loading="isLoading"
    lazy
    :totalRecords="totalPage"
    @page="onPageChange"
    paginator
    :first="first"
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
              <Button
                  type="button"
                  severity="warning" 
                  @click="createForm.visible = true"
              >
                  <i class="pi pi-plus-circle" style="margin-right: 8px;"></i>
                  ເພີ່ມບໍລິສັດ
              </Button>
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
      <Column headerStyle="width: 10rem">
        <template #body="{ data }">
            <div class="flex flex-wrap gap-2">
                <Button 
                  type="button" 
                  icon="pi pi-pencil" 
                  rounded 
                  severity="warning"  
                  style="color: white;" 
                  @click="editItem(data)"
                />
                <Button type="button" icon="pi pi-trash" rounded severity="danger" />
            </div>
        </template>
      </Column>
    </data-table>

    <FormDialog 
      ref="createForm"
      :id="false"
      :on-submit="submitData"
      :form="form"
      :is-loading="btnLoading"
      @on-success="clearForm"
    />

    <FormDialog 
      ref="editForm"
      id
      :on-submit="editSubmitData"
      :form="form"
      :is-loading="btnLoading"
      @on-success="clearForm"
    />
    
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import Image from 'primevue/image'
import InputText from 'primevue/inputtext'
import FormDialog from '../components/FormDialog.vue'
import Button from 'primevue/button'
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router'

  const search = ref<string>('')
  const products = ref<any>([]);
  const currentPage = ref<number>(1);
  const rowsPerPage = ref<number>(5);
  const isLoading = ref<boolean>(true);
  const totalPage = ref<number>();
  const selectedProduct = ref();
  const createForm = ref();
  const editForm = ref();
  const btnLoading = ref(false);
  const { push } = useRouter()
  const { query } = useRoute()

  const form = reactive<any>({
    id: '',
    referal_code: '',
  })

  async function initComponent() {
    if (Object.keys(query).length !== 0) {
      currentPage.value = query.page ? Number(query.page) : 1
      rowsPerPage.value = query.limit ? Number(query.limit) : 10
      search.value = query.search ? (query.search as string) : '';

      if (search.value === '') {
        push({ query: { page: currentPage.value, limit: rowsPerPage.value, search: undefined } })
      } else {
        push({
          query: {
            page: currentPage.value,
            limit: rowsPerPage.value,
            search: search.value,
          }
        })
      }
    }

    await getAffiliateProducts()
  }

  await initComponent()
  
  async function onPageChange(event: DataTablePageEvent) {
    currentPage.value = event.page + 1;
    rowsPerPage.value = event.rows;

    push({ query: { page: currentPage.value, limit: rowsPerPage.value } })

    getAffiliateProducts();
  }
  
  const first = computed(() => {
    let result: number = 0
    if(currentPage.value && rowsPerPage.value){
      result = (currentPage.value - 1) * rowsPerPage.value
    }
    return result
  })

  
  async function editItem(item: any) {
    form.id = item.id;
    form.referal_code = item.referal_code;
    editForm.value.visible = true;
  }

  async function clearForm() {
    form.referal_code = '';
    console.log('clear....')
  }

  async function onSearch() {
    if (search.value !== undefined) {
      push({ query: { page: currentPage.value, limit: rowsPerPage.value, search: search.value } })
    } 
      
    getAffiliateProducts();
  }

  async function  submitData() {
    console.log('paovang: submit 2024')
    // const selectedProducts = selectedProduct.value || [];

    // const ids = selectedProducts.map((product: any) => product.id);

    // btnLoading.value = true
    // setTimeout(() => {
    //   createForm.value.visible = false
    //   btnLoading.value = false;
    // }, 2000);
  }

  async function editSubmitData() {
    btnLoading.value = true
    setTimeout(() => {
      editForm.value.visible = false
      btnLoading.value = false
    }, 2000);
  }

  async function onClearSearch(e: any) {
    console.log(e)
  }

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
          q: search.value,
          page: currentPage.value,
          per_page: rowsPerPage.value
        }
      });

      if (response) {
        isLoading.value = false;

        totalPage.value = response.data.data.pagination.total;
        products.value = response.data.data.data;
        // rowsPerPage.value = Number(response.data.data.pagination.per_page)
      }
    }, 500);
  }
</script>

<!-- https://flowbite.com/docs/components/sidebar/ -->