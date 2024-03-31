import { reactive } from "vue";
import { PEntity } from "../entities/entity";
import { AdminPolicyService } from "../services/service";
import { defineStore } from "pinia";
import { container } from "tsyringe";
import { IGState } from "@/common/interfaces/state.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";

export const adminPolicyStore = defineStore("admin-policy-store", () => {
  const adminPolicyService =
    container.resolve<AdminPolicyService>(AdminPolicyService);

  const state = reactive<IGState<IGPaginated<PEntity>>>({
    data: {
      props: [],
      total: 0,
    },
    isLoading: false,
    btnLoading: false,
    error: "",
  });

  const getFooter = reactive<any>({
    data: {
      props: "",
    },
  });

  const setStateFilter = reactive<IGPaginate<Pick<PEntity, "policy_type">>>({
    page: 1,
    limit: 10,
    filter: { policy_type: "" },
  });

  const form = reactive<PEntity>({});

  /** My Function */
  async function register() {
    state.isLoading = true;
    state.btnLoading = true;

    try {
      await adminPolicyService.register(form);
      await getAll();

      state.error = "";
    } catch (error: any) {
      let responseError = "";
      if (error.response.status === 422) {
        responseError = Object.keys(error.response.data.errors)
          .map((key) => `${key}: ${error.response.data.errors[key].join(", ")}`)
          .join("; ");
      }
      state.error = responseError;
    }
    state.isLoading = false;
    state.btnLoading = false;
  }

  async function update() {
    state.isLoading = true;
    state.btnLoading = true;

    try {
      await adminPolicyService.update(form);
      await getAll();
      await clearData();
      state.error = "";
    } catch (error: any) {
      let responseError = "";
      if (error.response.status === 422) {
        responseError = Object.keys(error.response.data.errors)
          .map((key) => `${key}: ${error.response.data.errors[key].join(", ")}`)
          .join("; ");
      }
      state.error = responseError;
    }
    state.isLoading = false;
    state.btnLoading = false;
  }

  async function remove(id: PEntity) {
    state.isLoading = true;

    try {
      await adminPolicyService.delete(id);
      await getAll();

      state.error = "";
    } catch (error: any) {
      let responseError = "";
      if (error.response.status === 422) {
        responseError = Object.keys(error.response.data.errors)
          .map((key) => `${key}: ${error.response.data.errors[key].join(", ")}`)
          .join("; ");
      }
      state.error = responseError;
    }
    state.isLoading = false;
  }

  async function getOne(id: PEntity) {
    state.isLoading = true;
    const response = await adminPolicyService.getOne(id);
    if (response && response.data && response.message === "success") {
      getFooter.data.props = response.data;
      state.isLoading = false;
    }
  }

  async function getAll() {
    state.isLoading = true;
    const results = await adminPolicyService.getAll({
      page: setStateFilter.page,
      limit: setStateFilter.limit,
      filter: setStateFilter.filter,
    });

    if (results && results.data && results?.status == "success") {
      state.data.props = results.data.props;
      state.data.total = results.data.total;
      state.isLoading = false;
    }
  }

  async function clearData() {
    form.title = "";
    form.description = "";
    form.policy_type = "";
  }

  return {
    register,
    update,
    remove,
    getOne,
    getAll,
    form,
    setStateFilter,
    state,
    getFooter,
  };
});
