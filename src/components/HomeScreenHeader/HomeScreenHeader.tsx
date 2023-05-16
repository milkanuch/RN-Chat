import { FC } from 'react';
import { View, Text } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';
import {
  iconSearch,
  iconSettings,
  iconSize,
  TITLE,
} from 'components/HomeScreenHeader/homeScreenHeader.settings';
import { styles } from 'components/HomeScreenHeader/homeScreenHeader.styles';
import { HomeScreenHeaderProps } from 'components/HomeScreenHeader/homeScreenHeader.types';

export const HomeScreenHeader: FC<HomeScreenHeaderProps> = ({
  onPressSearch: handlePressSearch,
}) => {
  const handlePressSettings = () => {
    // TODO: implement
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>{TITLE}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          icon={iconSearch}
          iconSize={iconSize}
          onPress={handlePressSearch}
        />
        <CustomButton
          icon={iconSettings}
          iconSize={iconSize}
          onPress={handlePressSettings}
        />
      </View>
    </View>
  );
};
