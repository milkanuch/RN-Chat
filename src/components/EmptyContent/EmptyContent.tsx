import { FC } from 'react';
import { View, Text } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { ButtonSize } from 'components/CustomButton/customButton.types';
import { styles } from 'components/EmptyContent/emptyContent.styles';
import { EmptyContentProps } from 'components/EmptyContent/emptyContent.types';
import { Icon } from 'components/Icon/Icon';

import { COLORS } from 'constants/color';

export const EmptyContent: FC<EmptyContentProps> = ({
  title,
  description,
  buttonTitle,
  onPress: handlePress,
  icon,
  iconSize,
}) => {
  return (
    <View style={styles.container}>
      <Icon color={COLORS.darkGrey} name={icon} size={iconSize} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          buttonType={ButtonSize.small}
          onPress={handlePress}
          title={buttonTitle}
        />
      </View>
    </View>
  );
};
