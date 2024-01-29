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
            ບໍລິສັດ
            <!-- <Breadcrumb
                :model="items"
                :pt="{
                root: { class: 'surface-ground border-none' },
                icon: { class: 'text-indigo-500' },
                label: { class: 'font-bold text-400' }
                }"
            /> -->
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
      <li>
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
import Sidebar from 'primevue/sidebar'
import { ref } from "vue";

    const visibleRight = ref(false)
    const emit = defineEmits<{ (e: 'toggleSidebar'): void }>()
</script>
