<template>
    <header class="flex align-items-center justify-content-between pl-3 pr-4 h-4rem surface-ground" style="padding-left: 1.5rem !important;">
        <div class="flex align-items-center justify-content-center gap-2">
            <div
                class="cursor-pointer flex align-items-center justify-content-center border-circle hover:bg-gray-200 hover:text-gray-800 hover:border-2 border-gray-500"
                style="width: 40px; height: 40px"
                @click="emit('toggleSidebar')"
            >
                <i class="pi pi-bars font-bold" style="font-size: 1rem"></i>
            </div>
            <Breadcrumb
                :model="items"
                :pt="{
                  root: { class: 'surface-ground border-none' },
                  icon: { class: 'text-indigo-500' },
                  label: { class: 'font-bold text-400' }
                }"
            />
        </div>
        <div>
          <Dropdown 
            v-model="selectedLocale" 
            :options="locales" 
            optionLabel="name" 
            class="w-full" 
            optionValue="code"
            :highlightOnSelect="true" 
            @change="setLocale"
          />
        </div>
        <div>
            <a class="cursor-pointer" @click="visibleRight = true">
                <img
                src="https://api.duniagames.co.id/api/content/upload/file/10936507621668659213.jpg"
                class="mr-3 bg-no-repeat border-circle lg:mr-0"
                style="width: 32px; height: 32px"
                />
            </a>
        </div>
    </header>
    <Sidebar v-model:visible="visibleRight" position="right" class="w-full sm:w-25rem">
    <h2>paovang</h2>
    <ul class="list-none mt-3 p-0">
      <li>
        <a
          class="cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"
        >
          <span> <i class="pi pi-user text-xl text-color"></i> </span>
          <div class="ml-3">
            <span class="mb-2 font-semibold">Profile</span>
            <p class="text-color-secondary m-0">ຂໍ້ມູນໂປຼໄຟລ໌</p>
          </div>
        </a>
      </li>
      <li @click="logout()">
        <a
          class="cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"
        >
          <span> <i class="pi pi-power-off text-xl text-color"></i> </span>
          <div class="ml-3">
            <span class="mb-2 font-semibold">Sign Out</span>
            <p class="text-color-secondary m-0">ອອກຈາກລະບົບ</p>
          </div>
        </a>
      </li>
    </ul>
  </Sidebar>
</template>

<script setup lang="ts">
  import Breadcrumb from 'primevue/breadcrumb'
  import Sidebar from 'primevue/sidebar'
  import { ref, onMounted } from "vue";
  import { RouteLocationNormalizedLoaded, onBeforeRouteUpdate, useRoute } from 'vue-router';
  import { useAuthStore } from '../../modules/auth/stores/auth.store'
  import Dropdown from 'primevue/dropdown';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  
  const { logout } = useAuthStore();

  const breadcrumbItems = ref<Array<string>>([]);
  const visibleRight = ref(false);
  const emit = defineEmits<{ (e: 'toggleSidebar'): void }>();
  const items = ref();
  const route = useRoute();

  const selectedLocale = ref();
  const locales = ref([
      { name: 'ລາວ', code: 'la' },
      { name: 'English', code: 'en' },
  ]);

  const setLocale = async () => {
    await localStorage.setItem('locale', selectedLocale.value);
    window.location.reload();
  }

  function getBreadcrumbItems(to: RouteLocationNormalizedLoaded) {
    breadcrumbItems.value = []

    to.matched.forEach((matched, idx) => {
      if (idx !== 0) {
        breadcrumbItems.value.push(matched.meta['label'] as string)
      }
    })

    items.value = breadcrumbItems.value.map((item) => {
      return { label: t(item) }
    })
  }

  onBeforeRouteUpdate((to) => {
    getBreadcrumbItems(to)
  })

  onMounted(async () => {
    const locale = localStorage.getItem('locale') || 'en';
    selectedLocale.value = locale;

    getBreadcrumbItems(route)
  })
</script>

<style scoped>
  .md\:w-14rem {
    width: 80px !important;
  }
  .p-dropdown {
    border: none !important;
    /* background: none !important; */
  }
</style>