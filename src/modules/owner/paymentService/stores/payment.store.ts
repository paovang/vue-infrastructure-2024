import { reactive } from "vue";
import { defineStore } from "pinia";
import { container } from "tsyringe";
import { IGState } from "@/common/interfaces/state.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { PaymentEntity } from "../entities/payment.entity";
import { PaymentHouseService } from "../services/payment.service";

export const paymentStore = defineStore("payment-house-store", () => {
  const service = container.resolve<PaymentHouseService>(PaymentHouseService);

  const state = reactive<IGState<IGPaginated<PaymentEntity>>>({
    data: {
      props: [],
      total: 0,
    },
    isLoading: false,
    btnLoading: false,
    error: "",
  });

  const paymentServiceGetByOne = reactive<any>({
    data: {
      props: "",
    },
  });

  const form = reactive<PaymentEntity>({
    id: "",
    real_estate_list_id: "",
    service_charge_id: "",
    fromDate: new Date(),
    quantity: 0,
    paySlip: "",
  });

  type FilterType = Pick<PaymentEntity, "service_charge_id" | "date_payment">;
  const setStateFilter = reactive<IGPaginate<FilterType>>({
    page: 1,
    limit: 10,
    filter: {
      service_charge_id: "",
      date_payment: new Date(),
    },
  });

  async function paymentService() {
    try {
      await service.paymentService(form);
      state.error = "";
    } catch (error: any) {
      console.log(error.message);
      if (error.response) {
        switch (error.response.status) {
          case 422:
            let responseError = "";
            responseError = Object.keys(error.response.data.errors)
              .map(
                (key) => `${key}: ${error.response.data.errors[key].join(", ")}`
              )
              .join("; ");
            state.error = responseError;
            break;
          case 413:
            state.error = "Payload Too Large";
            break;
          case 429:
            state.error = "Too Many Requests";
            break;
          case 500:
            state.error = error.message;
            break;
          case 404:
            state.error = error.message;
            break;
          default:
            state.error = "An unexpected error occurred";
        }
      } else {
        state.error = "Network Error"; // Handle network errors
      }
    } finally {
      state.isLoading = false;
    }
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

  async function getOne(id: number) {
    const response = await service.getOne(id);

    if (response && response.data && response.message == "success") {
      paymentServiceGetByOne.data.props = response.data;
    }
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

  async function remove(id: PaymentEntity) {
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

        state.error = responseError;
      } else {
        state.error = error.message;
      }
    }
    state.isLoading = false;
  }

  return {
    form,
    state,
    setStateFilter,
    paymentService,
    getAll,
    remove,
    getOne,
    update,
  };
});
