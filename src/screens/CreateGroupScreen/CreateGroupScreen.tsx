import { FC, useState } from 'react';
import { Switch, View, Text } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from 'expo-image';
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native-gesture-handler';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInput';
import { Icon } from 'components/Icon/Icon';
import { Title } from 'components/Title/Title';

import { setGroupChatAvatar, startGroupChat } from 'services/user/user';

import { formatFilePathToBase64 } from '../../helpers/convertImageToBase64';

import { createGroupScheme } from './createGroupScreen.schema';

import {
  BUTTON_TITLE,
  CAMERA_ICON,
  CAMERA_SETTINGS,
  FORM_MODE,
  GALLERY_ICON,
  GROUP_NAME_INPUT_SETTINGS,
  ICON_COLOR,
  ICON_SIZE,
  LOCK_ICON,
  PASSWORD_INPUT_SETTINGS,
  SUBTITLE,
  SWITCH_ICON_SIZE,
  SWITCH_TITLE,
  TITLE,
  UNLOCK_ICON,
} from './createGroupScreen.settings';
import { styles } from './createGroupScreen.styles';
import { CreateGroupForm } from './createGroupScreen.types';
import {
  AppStackTypes,
  CreateGroupScreenProp,
} from 'navigation/AppStackNavigation/appStackNavigation.types';

export const CreateGroupScreen: FC<CreateGroupScreenProp> = ({
  navigation,
}) => {
  const [image, setImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const {
    control,
    getValues,
    formState: { errors },
  } = useForm<CreateGroupForm>({
    resolver: yupResolver(createGroupScheme),
    mode: FORM_MODE,
  });

  const isButtonDisabled = !!Object.keys(errors).length;

  const handleChatPrivacy = () => {
    setIsPrivate(!isPrivate);
  };

  const handlePickGallery = async () => {
    const galleryResult = await launchImageLibraryAsync(CAMERA_SETTINGS);

    if (!galleryResult.canceled) {
      setImage(galleryResult.assets[0].uri);
    }
  };

  const handlePickCamera = async () => {
    const cameraResult = await launchCameraAsync(CAMERA_SETTINGS);

    if (!cameraResult.canceled) {
      setImage(cameraResult.assets[0].uri);
    }
  };

  const handleCreateGroup = async () => {
    setIsLoading(true);
    const base64Image = await formatFilePathToBase64(image);
    const values = getValues();

    if (values.name && values.password) {
      const { id } = await startGroupChat({
        ...values,
        privacyMode: isPrivate,
      });
      const result = await setGroupChatAvatar(id, base64Image);

      if (result) {
        navigation.navigate(AppStackTypes.ChatScreen, { id: id.toString() });
      }
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.descriptionContainer}>
        <View style={styles.container}>
          <Title title={TITLE} />
          {!!image && <Image source={image} style={styles.image} />}
          <View style={styles.buttonsContainer}>
            <CustomButton
              icon={GALLERY_ICON}
              iconSize={ICON_SIZE}
              onPress={handlePickGallery}
              style={styles.button}
            />
            <CustomButton
              icon={CAMERA_ICON}
              iconSize={ICON_SIZE}
              onPress={handlePickCamera}
              style={styles.button}
            />
          </View>
          {!image && (
            <Title containerStyle={styles.subtitle} title={SUBTITLE} />
          )}
        </View>
        <View>
          <Text style={styles.privacyText}>{SWITCH_TITLE}</Text>
          <View style={styles.switchContainer}>
            <Icon
              color={ICON_COLOR}
              name={UNLOCK_ICON}
              size={SWITCH_ICON_SIZE}
            />
            <Switch onChange={handleChatPrivacy} value={isPrivate} />
            <Icon color={ICON_COLOR} name={LOCK_ICON} size={SWITCH_ICON_SIZE} />
          </View>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.input}>
            <Controller
              control={control}
              name={GROUP_NAME_INPUT_SETTINGS.name}
              render={({ field: { onChange: handleGroupName, value } }) => (
                <CustomTextInput
                  error={errors.name?.message}
                  label={GROUP_NAME_INPUT_SETTINGS.label}
                  onChangeText={handleGroupName}
                  placeholder={GROUP_NAME_INPUT_SETTINGS.placeholder}
                  value={value}
                />
              )}
            />
          </View>
          <View style={styles.input}>
            <Controller
              control={control}
              name={PASSWORD_INPUT_SETTINGS.name}
              render={({ field: { onChange: handleGroupName, value } }) => (
                <CustomTextInput
                  error={errors.password?.message}
                  label={PASSWORD_INPUT_SETTINGS.label}
                  onChangeText={handleGroupName}
                  placeholder={PASSWORD_INPUT_SETTINGS.placeholder}
                  secureTextEntry={PASSWORD_INPUT_SETTINGS.secureTextEntry}
                  value={value}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
      <CustomButton
        disabled={isButtonDisabled}
        isLoading={isLoading}
        onPress={handleCreateGroup}
        style={styles.createButton}
        title={BUTTON_TITLE}
      />
    </View>
  );
};
