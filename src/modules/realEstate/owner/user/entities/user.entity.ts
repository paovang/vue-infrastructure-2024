interface Permissions {
  id?: number | string;
  name?: string;
}

export interface UserEntity {
  id?: string;
  profile?: string;
  name: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
  role?: number | string;
  permissions?: Permissions;
  permissionIds?: (number | string)[];
  roleId?: number | string;
  customer_id?: number | string;
  owner?: string;
  id_no?: string;
  tel?: string;
  address?: string;
  id_image?: string;
  created_at?: string;
  updated_at?: string;
}
