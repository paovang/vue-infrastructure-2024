export interface CustomerEntity {
  id?: string;
  name: string;
  owner?: string;
  address?: string;
  tel?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
  country_id?: string;
  id_no?: string;
  id_image?: string;
  country?: {
    id?: string;
    name?: string;
  };
  created_at?: string;
  updated_at?: string;
}
