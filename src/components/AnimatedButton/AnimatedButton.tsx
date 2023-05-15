import { FC } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import Animated from 'react-native-reanimated';

import { styles } from './animatedButton.styles';
import { AnimatedButtonProps } from './animatedButton.types';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export const AnimatedButton: FC<AnimatedButtonProps> = ({
  onPress: handlePress,
  style,
  children,
  isLoading,
  animatedStyle,
  ...props
}) => {
  return (
    <AnimatedTouchableOpacity
      onPress={handlePress}
      style={[style, animatedStyle]}
      {...props}>
      {isLoading ? <ActivityIndicator style={styles.loader} /> : children}
    </AnimatedTouchableOpacity>
  );
};
