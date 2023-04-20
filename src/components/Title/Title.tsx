import { FC } from 'react';
import { View, Text } from 'react-native';

import { styles } from './title.styles';
import { TitleProps } from './title.types';

export const Title: FC<TitleProps> = ({
  title,
  containerStyle,
  titleStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};
