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
    { key: string; label: string; icon: string; iconList?: string; to?: string; color?: string }
  ]
}

const router = useRouter()
const menu: Array<menuItem> = [
  {
    key: '1',
    label: 'ລູກຄ້າ',
    icon: 'pi pi-user',
    color: 'text-red-500',
    to: 'customer'
  },
  {
    key: '1',
    label: 'ຜູ້ໃຊ້ລະບົບ',
    icon: 'pi pi-users',
    color: 'text-red-500',
    to: 'customer'
  },
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
      <div class="overflow-y-auto">
        <ul class="list-none p-3 m-0">
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
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss"></style>
