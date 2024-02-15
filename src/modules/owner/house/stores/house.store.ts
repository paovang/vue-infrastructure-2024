import { reactive } from "vue";
import { defineStore } from "pinia";
import { container } from "tsyringe";
import { IGState } from "@/common/interfaces/state.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { HouseEntity } from "../entities/house.entity";
import { HouseService } from "../services/house.service";

export const houseStore = defineStore("house-store", () => {
  const service = container.resolve<HouseService>(HouseService);

  const state = reactive<IGState<IGPaginated<HouseEntity>>>({
    data: {
      props: [],
      total: 0,
    },
    isLoading: false,
    btnLoading: false,
    error: "",
  });

  const houseGetByOne = reactive<any>({
    data: {
      props: "",
    },
  });

  type FilterType = Pick<
    HouseEntity,
    | "real_estate_type_id"
    | "service_model"
    | "room_type"
    | "village"
    | "district_id"
    | "province_id"
    | "wide"
    | "long"
  >;
  const setStateFilter = reactive<IGPaginate<FilterType>>({
    page: 1,
    limit: 10,
    filter: {
      real_estate_type_id: "",
      service_model: "",
      room_type: "",
      village: "",
      district_id: "",
      province_id: "",
      wide: "",
      long: "",
    },
  });

  const form = reactive<HouseEntity>({
    id: "",
    real_estate_type_id: "",
    district_id: "",
    service_model: "",
    image: "",
    room_type: "",
    village: "",
    location: "",
    zip_code: "",
    wide: "",
    long: "",
    remark: "",
    prices: [],
  });

  async function register() {
    state.isLoading = true;
    state.btnLoading = true;

    try {
      await service.register(form);
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

  async function remove(id: HouseEntity) {
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

  async function addGallery() {
    state.isLoading = true;
    state.btnLoading = true;

    try {
      await service.addGallery(form);
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

  async function updateGallery() {
    state.isLoading = true;
    state.btnLoading = true;

    try {
      await service.updateGallery(form);
      await clearForm();
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

  async function deleteGallery(id: string) {
    state.isLoading = true;

    try {
      await service.deleteGallery(id);

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
      houseGetByOne.data.props = response.data;
    }
  }

  async function clearForm() {
    (form.id = ""),
      (form.real_estate_type_id = ""),
      (form.district_id = ""),
      (form.service_model = ""),
      (form.image = ""),
      (form.room_type = ""),
      (form.village = ""),
      (form.location = ""),
      (form.zip_code = ""),
      (form.wide = ""),
      (form.long = ""),
      (form.remark = ""),
      (form.prices = []);
  }

  return {
    form,
    setStateFilter,
    state,
    register,
    update,
    remove,
    getAll,
    getOne,
    houseGetByOne,
    addGallery,
    deleteGallery,
    updateGallery,
  };
});
