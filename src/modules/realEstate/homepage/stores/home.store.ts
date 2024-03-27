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
import { SignUpEntity } from "../entities/sign-up.entity";

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

  const isProgressBar = reactive({
    isShow: true,
  });

  type FilterType = Pick<
    HouseEntity,
    | "real_estate_type_id"
    | "service_model"
    | "room_type"
    | "village"
    | "district_id"
    | "province_id"
    | "country_id"
    | "wide"
    | "long"
    | "search"
  >;
  const setStateFilter = reactive<IGPaginate<FilterType>>({
    page: 1,
    limit: 4,
    filter: {
      real_estate_type_id: "",
      service_model: "",
      room_type: "",
      village: "",
      district_id: "",
      province_id: "",
      country_id: "",
      wide: "",
      long: "",
      search: "",
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

  const formSignUp = reactive<SignUpEntity>({});

  const realEstateGetOne = reactive<any>({
    data: {
      props: "",
    },
  });

  async function getAll() {
    state.isLoading = true;
    isProgressBar.isShow = true;
    const results = await service.getAll({
      page: setStateFilter.page,
      limit: setStateFilter.limit,
      filter: setStateFilter.filter,
    });

    if (results && results.data && results.status == "success") {
      state.data.props = results.data.props;
      state.data.total = results.data.total;
      state.isLoading = false;
      isProgressBar.isShow = false;
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

  const provinces = reactive<any>({
    data: {
      props: [],
    },
  });
  const districts = reactive<any>({
    data: {
      props: [],
    },
  });
  const countries = reactive<any>({
    data: {
      props: [],
    },
  });

  const realEstateTypes = reactive<any>({
    data: {
      props: [],
    },
  });

  const footer = reactive<any>({
    data: {
      props: "",
    },
  });

  async function getAllData() {
    const response = await service.getAllData(setStateFilter.filter);

    if (response && response.data && response.message === "success") {
      provinces.data.props = response.data.provinces;
      districts.data.props = response.data.districts;
      countries.data.props = response.data.countries;
      realEstateTypes.data.props = response.data.realEstateTypes;
      footer.data.props = response.data.footer;
    }
  }

  async function register() {
    state.isLoading = true;
    state.btnLoading = true;

    try {
      await service.register(formSignUp);
      await getAll();

      await clearFormSignUp();
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

  async function clearFormSignUp() {
    formSignUp.name = "";
    formSignUp.owner = "";
    formSignUp.address = "";
    formSignUp.email = "";
    formSignUp.phone_number = "";
    formSignUp.password = "";
    formSignUp.password_confirmation = "";
  }

  return {
    state,
    getAll,
    setStateFilter,
    form,
    reserveRealEstate,
    getOne,
    realEstateGetOne,
    provinces,
    districts,
    realEstateTypes,
    getAllData,
    countries,
    formSignUp,
    register,
    isProgressBar,
    footer,
  };
});
