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
  id_image?: string;
  id_no?: string;
  check_rule?: boolean;
  isValidToServer?: boolean;
  profile?: string;
  country?: {
    id?: string;
    name?: string;
  };
  created_at?: string;
  updated_at?: string;
}
