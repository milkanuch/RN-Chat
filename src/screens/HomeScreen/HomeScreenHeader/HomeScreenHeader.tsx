import { FC } from 'react';
import { View, Text } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';

import {
  iconSearch,
  iconSettings,
  iconSize,
} from 'screens/HomeScreen/HomeScreenHeader/homeScreenHeader.settings';
import { styles } from 'screens/HomeScreen/HomeScreenHeader/homeScreenHeader.styles';
import { HomeScreenHeaderProps } from 'screens/HomeScreen/HomeScreenHeader/homeScreenHeader.types';

export const HomeScreenHeader: FC<HomeScreenHeaderProps> = ({
  title,
  onPressSearch: handlePressSearch,
  onPressSetting: handlePressSettings,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>{title}</Text>
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
