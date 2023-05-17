import { TouchableOpacityProps } from 'react-native';

export enum ButtonSize {
  small = 'small',
  large = 'large',
}

export type CustomButtonProps = TouchableOpacityProps & {
  title?: string;
  icon?: string;
  iconSize?: number;
  isLoading?: boolean;
  buttonType?: ButtonSize;
  iconColor?: string;
};
