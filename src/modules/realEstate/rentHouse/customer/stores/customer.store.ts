import { reactive } from "vue";
import { CustomerEntity } from "../entities/customer.entity";
import { CustomerService } from "../services/customer.service";
import { defineStore } from "pinia";
import { container } from "tsyringe";
import { IGState } from "@/common/interfaces/state.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";

export const customerStore = defineStore("customer-store", () => {
  const service = container.resolve<CustomerService>(CustomerService);

  const state = reactive<IGState<IGPaginated<CustomerEntity>>>({
    data: {
      props: [],
      total: 0,
    },
    isLoading: false,
    btnLoading: false,
    error: "",
  });

  type FilterType = Pick<CustomerEntity, "name" | "country_id" | "tel">;
  const setStateFilter = reactive<IGPaginate<FilterType>>({
    page: 1,
    limit: 10,
    filter: {
      name: "",
      country_id: "",
      tel: "",
    },
  });

  const form = reactive<CustomerEntity>({
    id: "",
    name: "",
    owner: "",
    address: "",
    tel: "",
    email: "",
    password: "",
    password_confirmation: "",
    country_id: "",
  });

  /** My Function */
  async function register() {
    state.isLoading = true;
    state.btnLoading = true;

    try {
      await service.register(form);
      await getAll();

      state.error = "";
      form.name = "";
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
      await service.update(form);
      await getAll();

      state.error = "";
      form.name = "";
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

  async function remove(id: CustomerEntity) {
    state.isLoading = true;

    try {
      await service.delete(id);
      await getAll();

      state.error = "";
      form.name = "";
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

  async function updateStatus(id: CustomerEntity) {
    state.isLoading = true;

    try {
      await service.updateStatus(id);
      await getAll();

      state.error = "";
      form.name = "";
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

  async function getOne() {
    console.log("getOne");
  }

  async function getAll() {
    state.isLoading = true;
    const results = await service.getAll({
      page: setStateFilter.page,
      limit: setStateFilter.limit,
      filter: setStateFilter.filter,
    });

    if (results && results.data && results.status == "success") {
      state.data.props = results.data.props;
      state.data.total = results.data.total;
      state.isLoading = false;
    }
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
    updateStatus,
  };
});
