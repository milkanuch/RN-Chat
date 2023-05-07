import React, { FC } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { styles } from 'components/CustomButton/customButton.styles';
import { Icon } from 'components/Icon/Icon';

import { COLORS } from 'constants/color';

import { ButtonSize, CustomButtonProps } from './customButton.types';

export const CustomButton: FC<CustomButtonProps> = ({
  onPress: handlePress,
  title,
  icon,
  children,
  iconSize,
  isLoading,
  buttonType = ButtonSize.large,
  ...props
}) => (
  <TouchableOpacity
    onPress={handlePress}
    style={[styles.button, !!icon && styles.icon]}
    {...props}>
    {!!icon && !isLoading && (
      <Icon name={icon} size={iconSize} style={styles.icon} />
    )}
    {!!title && !isLoading && (
      <Text style={[styles[buttonType], styles.text]}>{title}</Text>
    )}
    {isLoading ? (
      <ActivityIndicator
        color={COLORS.white}
        size={buttonType}
        style={props.style}
      />
    ) : (
      children
    )}
  </TouchableOpacity>
);
