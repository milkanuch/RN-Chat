import { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import Animated from 'react-native-reanimated';

import { AnimatedButtonProps } from './animatedButton.types';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export const AnimatedButton: FC<AnimatedButtonProps> = ({
  onPress: handlePress,
  style,
  children,
  animatedStyle,
  ...props
}) => {
  return (
    <AnimatedTouchableOpacity
      onPress={handlePress}
      style={[style, animatedStyle]}
      {...props}>
      {children}
    </AnimatedTouchableOpacity>
  );
};
