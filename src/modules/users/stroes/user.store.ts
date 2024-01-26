import { defineStore } from 'pinia';
import { reactive } from 'vue';

interface User {
  id: string;
  name: string;
}

export const userCounterStore = defineStore('user-store', () => {
    const items = reactive<User[]>([]); // Explicitly define the type of items
    const form = reactive({
        id: '',
        name: '',
    });
    const state = reactive({
        isLoading: false,
        btnClear: 'ລົບລ້າງ',
        isSuccess: false,
        isClearSuccess: false
    });

    function addUser() {
        const newItem: User = { // Explicitly define the type of newItem
            id: form.id,
            name: form.name,
        };

        items.push(newItem);

        state.isSuccess = true;
        setTimeout(() => {
            state.isSuccess = false;
        }, 1000);

        form.id = '';
        form.name = '';
    }

    function clearUser() {
        state.isLoading = true;
        state.btnClear = 'ກຳລັງລ້າງ...';
        state.isClearSuccess = true;
        
        setTimeout(() => {
            items.splice(0, items.length);

            state.isLoading = false;
            state.isClearSuccess = false;
            state.btnClear = 'ລົບລ້າງ';
        }, 1000);
    }

    return { addUser, clearUser, form, items, state };
});