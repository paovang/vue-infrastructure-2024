import { AxiosApi } from "@/common/configurations/axios.config";
import { injectable, inject } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { PEntity } from "../entities/entity";
import { IRepository } from "../interfaces/interface";

@injectable()
export class Repository implements IRepository {
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async create(input: PEntity): Promise<IResponse<PEntity>> {
    const response = await this._api.axios({
      method: "post",
      url: `/admin/create-about`,
      data: {
        link_videos: input.link_videos,
        title: input.title,
        description: input.description,
      },
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ",
      status: "success",
    };
  }

  async update(input: PEntity): Promise<IResponse<PEntity>> {
    const response = await this._api.axios({
      method: "put",
      url: `/admin/update-about/${input.id}`,
      data: {
        link_videos: input.link_videos,
        title: input.title,
        description: input.description,
      },
    });

    return {
      data: response.data,
      message: "ອັບເດດ ສຳເລັດ",
      status: "success",
    };
  }

  async delete(id: PEntity): Promise<IResponse<PEntity>> {
    const response = await this._api.axios({
      method: "delete",
      url: `/admin/delete-about/${id}`,
    });

    return {
      data: response.data,
      message: "ສຳເລັດເເລ້ວ.",
      status: "success",
    };
  }

  async getAll(
    args: IGPaginate<Pick<PEntity, "title">>
  ): Promise<IResponse<IGPaginated<PEntity>>> {
    const response = await this._api.axios({
      url: "/admin/list-abouts",
      params: {
        page: args.page,
        per_page: args.limit,
        filter: args.filter?.title,
      },
    });

    const { data, pagination } = response.data.data;

    return {
      data: { props: data, total: pagination.total },
      status: "success",
    };
  }

  async getOne(id: PEntity): Promise<any> {
    const response = await this._api.axios({
      url: `/admin/list-about/${id}`,
    });

    return response.data;
  }
}
