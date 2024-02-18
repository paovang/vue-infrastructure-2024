<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { provinceStore } from '@/modules/realEstate/address/stores/province.store';
  import { realEstateServiceStore } from '@/modules/realEstate/rentHouse/memberServices/stores/real-estate-service.store';
  import { districtStore } from '@/modules/realEstate/address/stores/district.store';
  import { useI18n } from 'vue-i18n';
  import { countryStore } from '@/modules/realEstate/address/stores/country.store';

  const { t } = useI18n();
  
  const { setStateFilter: setStateDistrictFilter } = districtStore();
  const { setStateFilter: setStateProvinceFilter } = provinceStore();
  const { setStateFilter } = countryStore();
  const { setStateFilter: setStateRealEstateServiceFilter } = realEstateServiceStore();


  export interface menuItem {
    key: string
    label: string
    icon: string
    iconList?: string
    to?: string
    color?: string
    children?: [
      { key: string; label: string; icon: string; to?: string; color?: string }
    ]
  }

  const router = useRouter()
  const menu: Array<any> = [
    {
      key: '1',
      label: t('sidebar.settings'),
      icon: 'pi pi-cog',
      color: 'text-black-500',
      to: 'settings',
      children: [
        {
          key: '1',
          label:  t('sidebar.country'),
          icon: 'pi pi-chart-line',
          color: 'text-red-500',
          to: 'country',
          roles: ['SuperAdmin']
        },
        {
          key: '2',
          label: t('sidebar.province'),
          icon: 'pi pi-chart-line',
          color: 'text-red-500',
          to: 'province',
          roles: ['SuperAdmin']
        },
        {
          key: '3',
          label: t('sidebar.district'),
          icon: 'pi pi-chart-line',
          color: 'text-red-500',
          to: 'district',
          roles: ['SuperAdmin']
        },
        {
          key: '5',
          label: t('sidebar.service'),
          icon: 'pi pi-chart-line',
          color: 'text-red-500',
          to: 'real.estate.services',
          roles: ['SuperAdmin']
        },
        {
          key: '6',
          label: t('sidebar.house'),
          icon: 'pi pi-chart-line',
          color: 'text-red-500',
          to: 'owner.house',
          roles: ['Admin']
        },
        {
          key: '7',
          label: t('sidebar.payment_service'),
          icon: 'pi pi-chart-line',
          color: 'text-red-500',
          to: 'owner.payment.service',
          roles: ['Admin']
        }
      ]
    },
    // {
    //   key: '2',
    //   label: 'ຜູ້ໃຊ້ລະບົບ',
    //   icon: 'pi pi-users',
    //   color: 'text-red-500',
    //   to: 'customer'
    // },
  ]

  const routeNames = ['province', 'country', 'district', 'real.estate.services'];

  const clearStateAll = async (routeName: string) => {
    if (routeNames.includes(routeName)) {
      setStateFilter.page = 1;
      setStateFilter.limit = 10;

      setStateDistrictFilter.page = 1;
      setStateDistrictFilter.limit = 10;

      setStateProvinceFilter.page = 1;
      setStateProvinceFilter.limit = 10;

      setStateRealEstateServiceFilter.page = 1;
      setStateRealEstateServiceFilter.limit = 10;
    }
  }

  const goToRoute = async (routeName: string) => {
    await clearStateAll(routeName);
    router.push({ name: routeName});
  }

  const roleSuperAdmin = ['SuperAdmin'];
  const currentRoles = localStorage.getItem('roles') || '';

</script>

<template>
    <aside class="shadow-1 h-screen fixed z-2 surface-overlay">
    <div class="flex flex-column h-full white-space-nowrap">
      <div
        @click="router.push({ name: 'dashboard' })"
        class="flex align-items-center justify-content-center pt-3 overflow-hidden cursor-pointer"
      >
        <img src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png" style="width: 38px" />
        <span class="font-bold text-3xl" style="margin-left: 10px">UK LAO</span>
      </div>
      <br/>
        <div class="overflow-y-auto">
            <ul class="list-none p-0 m-0 overflow-hidden" v-if="roleSuperAdmin.includes(currentRoles)">
              <li>
                  <a 
                    @click="goToRoute('customer')"
                    :class="{ 'bg-highlight': router.currentRoute.value.name === 'customer' }"
                    v-ripple 
                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                  >
                      <i class="pi pi-users mr-2"></i>
                      <span class="font-medium">{{ $t('sidebar.customer')}}</span>
                  </a>
              </li>
            </ul>

            <ul class="list-none p-0 m-0 overflow-hidden">
              <li v-for="item in menu" :key="item.key">
                  <div
                      v-ripple
                      v-styleclass="{
                          selector: '@next',
                          enterClass: 'hidden',
                          enterActiveClass: 'slidedown',
                          leaveToClass: 'hidden',
                          leaveActiveClass: 'slideup'
                      }"
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                  >
                    <i :class="`${item.icon} ${item.color} mr-2`"></i>
                    <span class="font-medium">{{ item.label }}</span>
                    <i class="pi pi-chevron-down ml-auto"></i>
                  </div>
                  <ul 
                    class="list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out"
                    :class="{ 'hidden': !['province', 'country', 'district', 'real.estate.services', 'owner.house', 'owner.payment.service'].includes(String(router.currentRoute.value.name)) }"
                  >
                    <li v-for="children in item.children" :key="item.key">
                        <a 
                          v-if="children.roles.includes(currentRoles)"
                          @click="goToRoute(children.to)"
                          :class="{ 'bg-highlight': router.currentRoute.value.name === children.to }"
                          v-ripple 
                          class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">{{ children.label}}</span>
                            <!-- <span 
                              class="inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle" 
                              style="min-width: 1.5rem; height: 1.5rem; font-size: 14px !important; background-color: rgb(233, 141, 3) !important;">
                              3
                            </span> -->
                        </a>
                    </li>
                  </ul>
                </li>
            </ul>

            <ul class="list-none p-0 m-0 overflow-hidden">
              <li>
                <div
                      v-ripple
                      v-styleclass="{
                          selector: '@next',
                          enterClass: 'hidden',
                          enterActiveClass: 'slidedown',
                          leaveToClass: 'hidden',
                          leaveActiveClass: 'slideup'
                      }"
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                  >
                    <i class="pi pi-chart-line mr-2"></i>
                    <span class="font-medium">Reports</span>
                    <i class="pi pi-chevron-down ml-auto"></i>
                  </div>

                  <ul 
                    class="list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out"
                    :class="{ 'hidden': !['district'].includes(String(router.currentRoute.value.name)) }"
                  >
                      <li>
                          <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                              <i class="pi pi-table mr-2"></i>
                              <span class="font-medium">View</span>
                          </a>
                      </li>
                      <li>
                          <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                              <i class="pi pi-search mr-2"></i>
                              <span class="font-medium">Search</span>
                          </a>
                      </li>
                  </ul>
              </li>
            </ul>
        </div>
      </div>
    <!-- </div> -->
  </aside>
</template>

<style scoped lang="scss">
  .bg-highlight {
    background-color: rgba(199, 195, 195, 0.604) !important; /* Add the desired highlight color */
  }
</style>../../modules/real-estate/address/stores/country.store../../modules/real-estate/address/stores/province.store../../modules/real-estate/address/stores/district.store../../modules/realEstate/rent_house/memberServices/stores/real-estate-service.store@/modules/realEstate/rentHouse/memberServices/stores/real-estate-service.store