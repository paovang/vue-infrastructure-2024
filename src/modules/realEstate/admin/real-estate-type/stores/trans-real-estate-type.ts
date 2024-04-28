import { reactive } from "vue";
import { TranslateRealEstateTypeEntity } from "../entities/trans-real-estate-type.entity";
import { TranslateRealEstateTypeService } from "../services/trans-real-estate-type.service";
import { defineStore } from "pinia";
import { container } from "tsyringe";
import { IGState } from "@/common/interfaces/state.interface";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";

export const translateRealEstateTypeStore = defineStore(
  "trans-real-estate-type-store",
  () => {
    const transRealEstateTypeService =
      container.resolve<TranslateRealEstateTypeService>(
        TranslateRealEstateTypeService
      );

    const state = reactive<IGState<IGPaginated<TranslateRealEstateTypeEntity>>>(
      {
        data: {
          props: [],
          total: 0,
        },
        isLoading: false,
        btnLoading: false,
        error: "",
      }
    );

    const setStateFilter = reactive<
      IGPaginate<Pick<TranslateRealEstateTypeEntity, "name" | "id">>
    >({
      page: 1,
      limit: 10,
      filter: { name: "", id: "" },
    });

    const form = reactive<TranslateRealEstateTypeEntity>({
      id: "",
      name: "",
    });

    /** My Function */
    async function register() {
      state.isLoading = true;
      state.btnLoading = true;

      try {
        await transRealEstateTypeService.register(form);
        await getAll();

        state.error = "";
        form.name = "";
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
        await transRealEstateTypeService.update(form);
        await getAll();

        state.error = "";
        form.name = "";
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

    async function remove(id: TranslateRealEstateTypeEntity) {
      state.isLoading = true;

      try {
        await transRealEstateTypeService.delete(id);
        await getAll();

        state.error = "";
        form.name = "";
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
      console.log("getOne");
    }

    async function getAll() {
      state.isLoading = true;
      const results = await transRealEstateTypeService.getAll({
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

    return {
      register,
      update,
      remove,
      getOne,
      getAll,
      form,
      setStateFilter,
      state,
    };
  }
);
