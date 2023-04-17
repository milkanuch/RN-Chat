import { KeyboardType } from 'react-native';

import { Mask } from 'react-native-mask-input';

export interface SignInForm {
  phoneNumber: string;
  password: string;
  confirmPassword?: string;
}

export interface SignInInputsSettings {
  name: 'phoneNumber' | 'password' | 'confirmPassword';
  label: string;
  maxLength?: number;
  placeholder: string;
  keyboardMask?: Mask;
  countryCode?: string;
  keyboardType?: KeyboardType;
}
