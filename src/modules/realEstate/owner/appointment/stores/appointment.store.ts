import { reactive } from "vue";
import { defineStore } from "pinia";
import { container } from "tsyringe";
import { IGState } from "@/common/interfaces/state.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { AppointmentService } from "../services/appointment.service";
import { AppointmentEntity } from "../entities/appointment.entity";

export const appointmentStore = defineStore("owner-appointment-store", () => {
  const service = container.resolve<AppointmentService>(AppointmentService);

  const state = reactive<IGState<IGPaginated<AppointmentEntity>>>({
    data: {
      props: [],
      total: 0,
    },
    isLoading: false,
    btnLoading: false,
    error: "",
  });

  type FilterType = Pick<
    AppointmentEntity,
    "status" | "date_appointment" | "name"
  >;
  const setStateFilter = reactive<IGPaginate<FilterType>>({
    page: 1,
    limit: 10,
    filter: {
      status: "",
      date_appointment: "",
      name: "",
    },
  });

  const appointmentGetByOne = reactive<any>({
    data: {
      props: "",
    },
  });

  const form = reactive<AppointmentEntity>({});

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

  async function remove(id: AppointmentEntity) {
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
    remove,
  };
});
