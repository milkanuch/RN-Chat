import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from 'components/CustomButton/customButton.styles';
import { Icon } from 'components/Icon/Icon';

import { ButtonSize, CustomButtonProps } from './customButton.types';

export const CustomButton: FC<CustomButtonProps> = ({
  onPress: handlePress,
  title,
  icon,
  iconSize,
  children,
  buttonType = ButtonSize.large,
  ...props
}) => (
  <TouchableOpacity
    onPress={handlePress}
    style={[styles.button, !!icon && styles.icon]}
    {...props}>
    {!!icon && <Icon name={icon} size={iconSize} style={styles.icon} />}
    {!!title && <Text style={[styles[buttonType], styles.text]}>{title}</Text>}
    {children}
  </TouchableOpacity>
);
