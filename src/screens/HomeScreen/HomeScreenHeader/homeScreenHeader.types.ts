import { TouchableOpacityProps } from 'react-native';

export interface HomeScreenHeaderProps {
  title: string;
  onPressSearch: TouchableOpacityProps['onPress'];
  onPressSetting: TouchableOpacityProps['onPress'];
}
