import { TextInputProps, TextStyle } from 'react-native';

export type CustomTextInputProps = TextInputProps & {
  label?: string;
  labelStyle?: TextStyle;
};
