export interface SignUpEntity {
  id?: string;
  name?: string;
  owner?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
  country_id?: string;
  country?: {
    id?: string;
    name?: string;
  };
  created_at?: string;
  updated_at?: string;
}
