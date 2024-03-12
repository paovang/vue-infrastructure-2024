import { inject, injectable } from "tsyringe";
import {
  IGPaginate,
  IGPaginated,
} from "@/common/interfaces/pagination.interface";
import { IResponse } from "@/common/interfaces/response.interface";
import { CreateUserUseCase } from "../use-cases/create.use-case";
import { GetAllUserUseCase } from "../use-cases/get-all.use-case";
import { UpdateUserUseCase } from "../use-cases/update.use-case";
import { DeleteUserUseCase } from "../use-cases/delete.use-case";
import { UserEntity } from "../entities/user.entity";
import { GetAllRoleUseCase } from "../use-cases/get-all-roles.use-case";
import { GetAllPermissionUseCase } from "../use-cases/get-all-permission.use-case";
import { GetOneUseCase } from "../use-cases/get-one.use-case";

@injectable()
export class UserService {
  constructor(
    @inject(CreateUserUseCase) private _create: CreateUserUseCase,
    @inject(GetAllUserUseCase) private _getAll: GetAllUserUseCase,
    @inject(UpdateUserUseCase) private _update: UpdateUserUseCase,
    @inject(DeleteUserUseCase) private _delete: DeleteUserUseCase,
    @inject(GetAllRoleUseCase) private _getAllRole: GetAllRoleUseCase,
    @inject(GetOneUseCase) private _getOne: GetOneUseCase,
    @inject(GetAllPermissionUseCase)
    private _getAllPermission: GetAllPermissionUseCase
  ) {}

  async register(input: UserEntity) {
    return await this._create.execute(input);
  }

  async update(input: UserEntity) {
    return await this._update.execute(input);
  }

  async delete(id: UserEntity) {
    return await this._delete.execute(id);
  }

  async getAll(
    input: IGPaginate<Pick<UserEntity, "name" | "role">>
  ): Promise<void | IResponse<IGPaginated<UserEntity>>> {
    return await this._getAll.execute(input);
  }

  async getOne(id: number) {
    return await this._getOne.execute(id);
  }

  async getAllRole() {
    return await this._getAllRole.execute();
  }

  async getAllPermission() {
    return await this._getAllPermission.execute();
  }
}
