<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { countryStore } from '../../modules/address/stores/country.store';
  import { provinceStore } from '../../modules/address/stores/province.store';

  const { setStateFilter: setStateProvinceFilter } = provinceStore();
  const { setStateFilter } = countryStore();


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

  // const handleLogoClick = () => {
  //     window.location.reload(); // Force a reload of the current page
  // };

  const router = useRouter()
  const menu: Array<any> = [
    {
      key: '1',
      label: 'ຕັ້ງຄ່າ',
      icon: 'pi pi-cog',
      color: 'text-black-500',
      to: 'settings',
      children: [
        {
          key: '1',
          label: 'ປະເທດ',
          icon: 'pi pi-chart-line',
          color: 'text-red-500',
          to: 'country',
        },
        {
          key: '2',
          label: 'ເເຂວງ',
          icon: 'pi pi-chart-line',
          color: 'text-red-500',
          to: 'province',
        },
        {
          key: '3',
          label: 'ເມືອງ',
          icon: 'pi pi-chart-line',
          color: 'text-red-500',
          to: 'district',
        },
        // {
        //   key: '4',
        //   label: 'ບ້ານ',
        //   icon: 'pi pi-chart-line',
        //   color: 'text-red-500',
        //   to: 'province',
        // }
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

  const routeNames = ['province', 'country'];

  const clearStateAll = async (routeName: string) => {
    if (routeNames.includes(routeName)) {
      setStateFilter.page = 1;
      setStateFilter.limit = 10;

      setStateProvinceFilter.page = 1;
      setStateProvinceFilter.limit = 10;
    }
  }
</script>

<template>
    <aside class="shadow-1 h-screen fixed z-2 surface-overlay">
    <div class="flex flex-column h-full white-space-nowrap">
      <div
        @click="router.push({ name: 'dashboard' })"
        class="flex align-items-center justify-content-center pt-3 overflow-hidden cursor-pointer"
      >
        <img src="../../assets/images/logo.png" style="width: 38px" />
        <span class="font-bold text-3xl">HalTech</span>
      </div>
      <br/>
        <div class="overflow-y-auto">
            <ul class="list-none p-0 m-0 overflow-hidden">
              <li>
                <router-link
                    to="customer"
                    class="border-round no-underline"
                  >
                    <a 
                      :class="{ 'bg-highlight': router.currentRoute.value.name === 'customer' }"
                      v-ripple 
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                        <i class="pi pi-users mr-2"></i>
                        <span class="font-medium">ລູກຄ້າ</span>
                    </a>
                  </router-link>
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
                    :class="{ 'hidden': !['province', 'country', 'district'].includes(String(router.currentRoute.value.name)) }"
                  >
                    <li v-for="children in item.children" :key="item.key">
                      <router-link
                        :to="{ name: children.to }"
                        class="border-round no-underline"
                        @click="clearStateAll(children.to)"
                      >
                        <a 
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
                      </router-link>
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
</style>