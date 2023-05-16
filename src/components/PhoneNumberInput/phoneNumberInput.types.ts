import { MaskInputProps } from 'react-native-mask-input';

export interface PhoneNumberInputProps extends MaskInputProps {
  label?: string;
  countryCode?: string;
  error?: string;
}
