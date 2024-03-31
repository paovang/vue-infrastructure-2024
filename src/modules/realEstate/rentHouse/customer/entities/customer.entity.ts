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
  user_id?: string;
  profile?: string;
  user?: {
    id?: string;
    name?: string;
    email?: string;
    profile?: string;
  };
  created_at?: string;
  updated_at?: string;
}
