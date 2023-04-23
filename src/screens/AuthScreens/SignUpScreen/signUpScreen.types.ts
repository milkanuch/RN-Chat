export interface SingUpScreenParams {
  phoneNumber: string;
  password: string;
}

export interface SignUpForm {
  nickname: string;
  biography?: string;
}

export interface SignUpInputsSettings {
  name: 'nickname' | 'biography';
  label: string;
  maxLength?: number;
  placeholder: string;
  numberOfLines?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}
