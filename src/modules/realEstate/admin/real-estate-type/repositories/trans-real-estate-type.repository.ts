import { AxiosApi } from "@/common/configurations/axios.config";
import { injectable, inject } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { ITranslateRealEstateTypeRepository } from "../interfaces/trans-real-estate-type.interface";
import { TranslateRealEstateTypeEntity } from "../entities/trans-real-estate-type.entity";

@injectable()
export class TranslateRealEstateTypeRepository
  implements ITranslateRealEstateTypeRepository
{
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async create(
    input: TranslateRealEstateTypeEntity
  ): Promise<IResponse<TranslateRealEstateTypeEntity>> {
    const response = await this._api.axios({
      method: "post",
      url: "/admin/translate-real-estate-type",
      data: {
        real_estate_type_id: input.real_estate_type_id,
        lang_code: input.lang_code,
        name: input.name,
      },
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async update(
    input: TranslateRealEstateTypeEntity
  ): Promise<IResponse<TranslateRealEstateTypeEntity>> {
    const response = await this._api.axios({
      method: "put",
      url: "/admin/translate-real-estate-type/" + input.id,
      data: {
        real_estate_type_id: input.real_estate_type_id,
        lang_code: input.lang_code,
        name: input.name,
      },
    });

    return {
      data: response.data,
      message: "ອັບເດດ ສຳເລັດ",
      status: "success",
    };
  }

  async delete(
    id: TranslateRealEstateTypeEntity
  ): Promise<IResponse<TranslateRealEstateTypeEntity>> {
    const response = await this._api.axios({
      method: "delete",
      url: `/admin/translate-real-estate-type/${id}`,
    });

    return {
      data: response.data,
      message: "ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.",
      status: "success",
    };
  }

  async getAll(
    args: IGPaginate<Pick<TranslateRealEstateTypeEntity, "name" | "id">>
  ): Promise<IResponse<IGPaginated<TranslateRealEstateTypeEntity>>> {
    const response = await this._api.axios({
      url: "/admin/translate-real-estate-types/" + args.filter?.id,
      params: {
        page: args.page,
        per_page: args.limit,
        filter: args.filter?.name,
      },
    });

    const { data, pagination } = response.data.data;

    return {
      data: { props: data, total: pagination.total },
      status: "success",
    };
  }

  async getById(id: any): Promise<any> {
    console.log(id);
  }
}
