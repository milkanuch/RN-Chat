import { TouchableOpacityProps, ViewStyle } from 'react-native';

import { AnimatedStyleProp } from 'react-native-reanimated';

export interface AnimatedButtonProps extends TouchableOpacityProps {
  animatedStyle?: AnimatedStyleProp<ViewStyle>;
}
