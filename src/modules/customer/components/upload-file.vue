<template>
    <form class="flex items-center space-x-6">
        <div class="shrink-0">
            <img 
                class="h-16 w-16 object-cover rounded-full" 
                :src="imageUrl" 
                alt="Current profile photo" 
            />
        </div>
        <label class="block">
            <span class="sr-only">ເລືອກໄຟລກ່ອນ...</span>
            <input 
                type="file" 
                class="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
                @change="handleFileChange"
            />
        </label>
    </form>
    <p v-if="fileError">{{ fileError }}</p>
</template>
<script setup lang="ts">
    import { ref, defineEmits } from "vue";
    
    const emits = defineEmits(["update:modelValue"]);

    const imageUrl = ref('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80');
    const fileError = ref('');
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 2 * 1024 * 1024;

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            if (!allowedTypes.includes(file.type)) {
                fileError.value = 'Invalid file type. Please upload a JPEG, PNG, or PDF file.';
                return;
            }

            if (file.size > maxSize) {
                fileError.value = 'File size exceeds the maximum limit of 2 MB.';
                return;
            }

            imageUrl.value = URL.createObjectURL(file);
            emits("update:modelValue", file);
            fileError.value = '';
        }
    };
</script>