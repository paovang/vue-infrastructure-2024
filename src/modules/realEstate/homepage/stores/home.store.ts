import { reactive } from "vue";
import { defineStore } from "pinia";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IGState } from "@/common/interfaces/state.interface";
import { HouseEntity } from "../../owner/house/entities/house.entity";
import { container } from "tsyringe";
import { HomeRealEstateService } from "../services/home-real-estate.service";
import { ReserveRealEstateEntity } from "../entities/reserve.entity";

export const homerealEstateStore = defineStore("home-real-estate-store", () => {
  const service = container.resolve<HomeRealEstateService>(
    HomeRealEstateService
  );

  const state = reactive<IGState<IGPaginated<HouseEntity>>>({
    data: {
      props: [],
      total: 0,
    },
    isLoading: false,
    btnLoading: false,
    error: "",
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
    limit: 12,
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

  const form = reactive<ReserveRealEstateEntity>({
    id: "",
    date_appointment: new Date(),
    customer_name: "",
    customer_tel: "",
    real_estate_type_id: "",
    service_model: "all",
    room_type: "all",
  });

  const realEstateGetOne = reactive<any>({
    data: {
      props: "",
    },
  });

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

  async function reserveRealEstate() {
    state.isLoading = true;
    state.btnLoading = true;

    try {
      await service.reserve(form);
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

  async function getOne(id: number) {
    const response = await service.getOne(id);

    if (response && response.data && response.message == "success") {
      realEstateGetOne.data.props = response.data;
    }
  }

  return {
    state,
    getAll,
    setStateFilter,
    form,
    reserveRealEstate,
    getOne,
    realEstateGetOne,
  };
});
