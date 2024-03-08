import { reactive } from "vue";
import { defineStore } from "pinia";
import { container } from "tsyringe";
import { IGState } from "@/common/interfaces/state.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { RentAndBuyService } from "../services/rent-buy.service";
import { RentAndBuyEntity } from "../entities/rent-buy-entity";

export const rentAndBuyStore = defineStore("owner-rent-buy-store", () => {
  const service = container.resolve<RentAndBuyService>(RentAndBuyService);

  const state = reactive<IGState<IGPaginated<RentAndBuyEntity>>>({
    data: {
      props: [],
      total: 0,
    },
    isLoading: false,
    btnLoading: false,
    error: "",
  });

  type FilterType = Pick<
    RentAndBuyEntity,
    "service_model" | "from_date" | "to_date"
  >;
  const setStateFilter = reactive<IGPaginate<FilterType>>({
    page: 1,
    limit: 10,
    filter: {
      service_model: "",
      from_date: "",
      to_date: "",
    },
  });

  const appointmentGetByOne = reactive<any>({
    data: {
      props: "",
    },
  });

  const form = reactive<RentAndBuyEntity>({});

  async function getAll() {
    state.isLoading = true;
    const results = await service.getAll({
      page: setStateFilter.page,
      limit: setStateFilter.limit,
      filter: setStateFilter.filter,
    });

    if (results && results.data && results.status === "success") {
      state.data.props = results.data.props;
      state.data.total = results.data.total;
      state.isLoading = false;
    }
  }

  async function getOne(id: number) {
    const response = await service.getOne(id);

    if (response && response.data && response.message === "success") {
      appointmentGetByOne.data.props = response.data;
    }
  }

  async function create() {
    state.isLoading = true;
    state.btnLoading = true;

    try {
      await service.create(form);
      state.error = "";
    } catch (error: any) {
      let responseError = "";
      if (error.response.status === 422) {
        state.isLoading = false;
        state.btnLoading = false;

        responseError = Object.keys(error.response.data.errors)
          .map((key) => `${key}: ${error.response.data.errors[key].join(", ")}`)
          .join("; ");

        state.error = responseError;
      } else {
        state.error = error.message;
      }
    }

    state.isLoading = false;
    state.btnLoading = false;
  }

  async function update() {
    state.isLoading = true;
    state.btnLoading = true;

    try {
      await service.update(form);
      state.error = "";
    } catch (error: any) {
      let responseError = "";
      if (error.response.status === 422) {
        state.isLoading = false;
        state.btnLoading = false;

        responseError = Object.keys(error.response.data.errors)
          .map((key) => `${key}: ${error.response.data.errors[key].join(", ")}`)
          .join("; ");

        state.error = responseError;
      } else {
        state.error = error.message;
      }
    }

    state.isLoading = false;
    state.btnLoading = false;
  }

  async function remove(id: RentAndBuyEntity) {
    state.isLoading = true;

    try {
      await service.delete(id);

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

  return {
    state,
    setStateFilter,
    form,
    getAll,
    getOne,
    update,
    create,
    remove,
  };
});
