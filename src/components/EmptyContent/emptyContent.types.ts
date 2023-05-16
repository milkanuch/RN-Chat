import { TouchableOpacityProps } from 'react-native';

export interface EmptyContentProps {
  title: string;
  description: string;
  icon: string;
  buttonTitle: string;
  iconSize?: number;
  onPress: TouchableOpacityProps['onPress'];
  onPressAdditional?: TouchableOpacityProps['onPress'];
  additionalButtonTitle?: string;
}
