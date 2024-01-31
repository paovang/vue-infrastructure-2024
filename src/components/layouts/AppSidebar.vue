<script setup lang="ts">
import { useRouter } from 'vue-router'

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
    label: 'ຕັ້ງຄ່າ',
    icon: 'pi pi-cog',
    color: 'text-black-500',
    to: 'country',
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
        to: 'country',
      },
      {
        key: '3',
        label: 'ເມືອງ',
        icon: 'pi pi-chart-line',
        color: 'text-red-500',
        to: 'country',
      },
      {
        key: '4',
        label: 'ບ້ານ',
        icon: 'pi pi-chart-line',
        color: 'text-red-500',
        to: 'country',
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
      <!-- <div class="overflow-y-auto"> -->
        <!-- <ul class="list-none p-3 m-0">
          <li v-for="item in menu" :key="item.key">
            <router-link
              :to="{ name: item.to }"
              class="flex align-items-center cursor-pointer p-3 border-round no-underline text-700 hover:surface-50 transition-duration-150 transition-colors"
              v-styleclass="{
                selector: '@next',
                enterClass: 'hidden',
                enterActiveClass: 'slidedown',
                leaveToClass: 'hidden',
                leaveActiveClass: 'slideup'
              }"
            >
              <i :class="`${item.icon} ${item.color} mr-2`"></i>
              <span class="text-base">{{ item.label }}</span>
              <i :class="`${item.iconList} ml-auto`"></i>
            </router-link>
            <ul
              class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out"
            >
              <li v-for="subItem in item.children" :key="subItem.key">
                <router-link
                  :to="{ name: subItem.to }"
                  class="flex align-items-center cursor-pointer p-3 border-round no-underline text-700 hover:surface-50 transition-duration-150 transition-colors"
                >
                  <i :class="`${subItem.icon} ${subItem.color} mr-2`"></i>
                  <span class="text-base">{{ subItem.label }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul> -->

        <div class="overflow-y-auto">
            <ul class="list-none p-3 m-0">
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
                  <ul class="list-none p-0 m-0 overflow-hidden">
                    <li v-for="children in item.children" :key="item.key">
                      <router-link
                        :to="{ name: children.to }"
                        class="border-round no-underline"
                      >
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
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
        </div>
      </div>
    <!-- </div> -->
  </aside>
</template>

<style scoped lang="scss"></style>
