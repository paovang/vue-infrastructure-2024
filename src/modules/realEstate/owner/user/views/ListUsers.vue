<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 class="mb-3">
                    {{ $t('table.title.user') }}
                </h2>
            </span>
            <span>
                <Button :label="$t('button.add')" severity="info" @click="pushRouteAddUser"/>
            </span>
        </div>
        <Divider/>
        <br/>
        <DataTable 
            :value="state.data.props" 
            paginator 
            :rowsPerPageOptions="[5, 10, 20, 50]" 
            tableStyle="min-width: 50rem"
            :loading="state.isLoading" 
            lazy
            :totalRecords="state.data.total"
            @page="onPageChange"
            :first="first"
            scrollable
            :rows="setStateFilter.limit"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :currentPageReportTemplate="`${$t('table.pagination.show')} {first} ${$t('table.pagination.to')} {last} ${$t('table.pagination.from')} {totalRecords} ${$t('table.pagination.row')}`"
        >
            <Column field="id" :header="$t('table.header.index')">
                <template #body="item">
                    {{ item.index + 1 }}
                </template>
            </Column>
            <Column headerStyle="min-width: 8rem" frozen>
                <template #body="{ data }">
                    <div class="flex flex-wrap gap-2">
                        <Button 
                            type="button" 
                            icon="pi pi-pencil" 
                            rounded 
                            severity="warning"
                            style="color: white" 
                            @click="editUser(data.id)"
                        />
                        <Button 
                            type="button" 
                            icon="pi pi-trash" 
                            rounded 
                            severity="danger"
                            style="color: white" 
                            @click="confirmDelete(data.id)"
                        />
                    </div>
                </template>
            </Column>
            <Column field="profile" :header="$t('table.header.profile')" headerStyle="min-width: 8rem" frozen>
                <template #body="{ data }">
                    <Image :src="data.profile" alt="Image" preview style="max-width: 80px;"/>
                </template>
            </Column>
            <Column :header="$t('table.header.name')" headerStyle="min-width: 10rem">
                <template #body="{data}">
                    {{ data.name }}
                </template>
            </Column>
            <Column :header="$t('table.header.email')" headerStyle="min-width: 3rem">
                <template #body="{data}">
                    {{ data.email }}
                </template>
            </Column>
            <Column :header="$t('table.header.role')" headerStyle="min-width: 8rem">
                <template #body="{data}">
                    {{ data.role.name }}
                </template>
            </Column>
            <Column :header="$t('table.header.permission')" headerStyle="min-width: 20rem">
                <template #body="{data}">
                    {{ conCatPermission(data.permissions) }}
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
    import { ownerUserStore } from '../stores/user.store';
    import { onMounted, computed } from 'vue';
    import Divider from 'primevue/divider';
    import Button from 'primevue/button';
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column'; 
    import { conCatPermission } from '@/common/utils/concat';
    import { useRouter } from 'vue-router';
    import { UserEntity } from '../entities/user.entity';
    import { useToast } from 'primevue/usetoast';
    import { useI18n } from 'vue-i18n';
    import { useConfirm } from 'primevue/useconfirm';
    import Image from 'primevue/image';


    const { t } = useI18n();
    const toast = useToast();
    const confirm = useConfirm();

    const { remove, getAll, state, setStateFilter  } = ownerUserStore();
    const router = useRouter();


    const editUser = async (id: number) => {
        router.push({ name: 'owner.edit.user', params: { id: id } });
    }

    const pushRouteAddUser = async () => {
        router.push({ name: 'owner.add.user' });
    }

    const first = computed(() => {
        let result: number = 0

        if(setStateFilter.page && setStateFilter.limit){
            result = (setStateFilter.page - 1) * setStateFilter.limit
        }
        return result
    })

    async function onPageChange(event: DataTablePageEvent) {
        setStateFilter.page = event.page + 1; 
        setStateFilter.limit = event.rows;

        await fetchAll();
    }

    const confirmDelete = async (id: UserEntity) => {
        confirm.require({
            message: t('confirmDelete.message'),
            header: t('confirmDelete.header'),
            rejectLabel: t('confirmDelete.rejectLabel'),
            acceptLabel: t('confirmDelete.acceptLabel'),
            rejectClass: 'p-button-secondary p-button-outlined',
            acceptClass: 'p-button-danger',
            accept: async () => {
                await remove(id);
                
                toast.add({ severity: 'success', summary: t('toast.summary.delete'), detail: t('toast.detail.delete'), life: 3000 });
            },
            reject: () => {
                toast.add({ severity: 'error', summary: t('toast.summary.cancel_delete'), detail: t('toast.detail.cancel_delete'), life: 3000 });
            }
        });
    }

    onMounted(async() => {
        await fetchAll();
    });

    const fetchAll = async() => {
        await getAll();
    }
</script>

<style scoped>
    .btn-right {
        display: flex;
        justify-content: flex-end;
    }
</style>