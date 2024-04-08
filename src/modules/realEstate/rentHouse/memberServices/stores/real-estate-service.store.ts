import { reactive } from "vue";
import { defineStore } from "pinia";
import { container } from "tsyringe";
import { IGState } from "@/common/interfaces/state.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { RealEstateService } from "../services/real-estate-service.service";
import { RealEstateServiceEntity } from "../entities/real-estate-service.entity";

export const realEstateServiceStore = defineStore(
  "real-estate-service-store",
  () => {
    const service = container.resolve<RealEstateService>(RealEstateService);

    const state = reactive<IGState<IGPaginated<RealEstateServiceEntity>>>({
      data: {
        props: [],
        total: 0,
      },
      isLoading: false,
      btnLoading: false,
      error: "",
    });

    const realestateType = reactive<any>({
      props: [],
    });

    type FilterType = Pick<
      RealEstateServiceEntity,
      "country_id" | "real_estate_type_id" | "unit_price"
    >;
    const setStateFilter = reactive<IGPaginate<FilterType>>({
      page: 1,
      limit: 10,
      filter: {
        country_id: "",
        real_estate_type_id: "",
        unit_price: "",
      },
    });

    const form = reactive<RealEstateServiceEntity>({
      id: "",
      country_id: "",
      real_estate_type_id: "",
      unit_price: "day",
    });

    /** My Function */
    async function register() {
      state.isLoading = true;
      state.btnLoading = true;

      try {
        await service.register(form);
        await getAll();

        state.error = "";
        clearForm();
      } catch (error: any) {
        let responseError = "";
        if (error.response.status === 422) {
          responseError = Object.keys(error.response.data.errors)
            .map(
              (key) => `${key}: ${error.response.data.errors[key].join(", ")}`
            )
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
        clearForm();
      } catch (error: any) {
        let responseError = "";
        if (error.response.status === 422) {
          responseError = Object.keys(error.response.data.errors)
            .map(
              (key) => `${key}: ${error.response.data.errors[key].join(", ")}`
            )
            .join("; ");
        }
        state.error = responseError;
      }
      state.isLoading = false;
      state.btnLoading = false;
    }

    async function remove(id: RealEstateServiceEntity) {
      state.isLoading = true;

      try {
        await service.delete(id);
        await getAll();

        state.error = "";
        clearForm();
      } catch (error: any) {
        let responseError = "";
        if (error.response.status === 422) {
          responseError = Object.keys(error.response.data.errors)
            .map(
              (key) => `${key}: ${error.response.data.errors[key].join(", ")}`
            )
            .join("; ");
        }
        state.error = responseError;
      }
      state.isLoading = false;
    }

    async function getOne() {
      const response = await service.getById(form.id as string);
      if (response && response.data && response.message == "success") {
        realestateType.props = response.data;
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

    async function clearForm() {
      form.id = "";
      form.unit_price = "day";
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
      realestateType,
    };
  }
);
