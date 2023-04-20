import { TextInputProps, TextStyle } from 'react-native';

export type CustomTextInputProps = TextInputProps & {
  label?: string;
  error?: string;
  labelStyle?: TextStyle;
};
