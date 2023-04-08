import { TouchableOpacityProps } from 'react-native';

export type CustomButtonProps = TouchableOpacityProps & {
  title?: string;
  icon?: string;
  iconSize?: number;
};
