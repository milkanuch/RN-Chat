export interface CreateGroupForm {
  name: string;
  password: string;
}

export interface GroupInputSettings {
  name: keyof CreateGroupForm;
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}
