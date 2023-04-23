import { FC, useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { ButtonSize } from 'components/CustomButton/customButton.types';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInput';
import { Title } from 'components/Title/Title';

import { signUpScheme } from './signUpScreen.schema';

import {
  BIOGRAPHY,
  BUTTON_TITLE,
  CAMERA_ICON,
  CAMERA_SETTINGS,
  FADE_ANIMATION_CONFIG,
  GALLERY_ICON,
  ICON_SIZE,
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  NICKNAME,
  SAFE_AREA_INSETS,
  SIGN_UP_FORM_MODE,
  SUBTITLE,
  TITLE,
} from './signUpScreen.settings';
import { styles } from './signUpScreen.styles';
import { SignUpForm } from './signUpScreen.types';
import { SignUpScreenProps } from 'navigation/AuthStackNavigation/authStackNavigation.types';

export const SignUpScreen: FC<SignUpScreenProps> = () => {
  const [image, setImage] = useState<string>('');
  const [isKeyboardOpened, setIsKeyboardOpened] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(signUpScheme),
    mode: SIGN_UP_FORM_MODE,
  });

  const isButtonDisabled = !!Object.keys(errors).length;

  //SOURCE: https://reactnative.dev/docs/keyboard#usage
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpened(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpened(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const imageFadeStyle = useAnimatedStyle(
    () => ({
      height: withTiming(
        isKeyboardOpened ? 0 : IMAGE_HEIGHT,
        FADE_ANIMATION_CONFIG,
      ),
      width: withTiming(
        isKeyboardOpened ? 0 : IMAGE_WIDTH,
        FADE_ANIMATION_CONFIG,
      ),
    }),
    [isKeyboardOpened],
  );

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

  const handleSignUp = () => {
    //TODO: add sign up logic
  };

  return (
    <SafeAreaView edges={SAFE_AREA_INSETS} style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.screenContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Title title={TITLE} />
          {!!image && (
            <Animated.Image
              source={{ uri: image }}
              style={[styles.image, imageFadeStyle]}
            />
          )}
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
          <Title containerStyle={styles.subtitle} title={SUBTITLE} />
        </View>
        <View style={styles.container}>
          <Controller
            control={control}
            name={NICKNAME.name}
            render={({
              field: {
                onChange: handleNicknameChange,
                onBlur: handleNicknameBlur,
                value,
              },
            }) => (
              <CustomTextInput
                autoCapitalize={NICKNAME.autoCapitalize}
                error={errors.nickname?.message}
                label={NICKNAME.label}
                onBlur={handleNicknameBlur}
                onChangeText={handleNicknameChange}
                placeholder={NICKNAME.placeholder}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name={BIOGRAPHY.name}
            render={({
              field: {
                onChange: handleBiographyChange,
                onBlur: handleBiographyBlur,
                value,
              },
            }) => (
              <CustomTextInput
                autoCapitalize={BIOGRAPHY.autoCapitalize}
                error={errors.biography?.message}
                label={BIOGRAPHY.label}
                multiline={true}
                numberOfLines={BIOGRAPHY.numberOfLines}
                onBlur={handleBiographyBlur}
                onChangeText={handleBiographyChange}
                placeholder={BIOGRAPHY.placeholder}
                style={styles.biographyInput}
                value={value}
              />
            )}
          />
          <CustomButton
            buttonType={ButtonSize.large}
            disabled={isButtonDisabled}
            onPress={handleSubmit(handleSignUp)}
            style={[
              styles.createButton,
              isButtonDisabled && styles.errorButton,
            ]}
            title={BUTTON_TITLE}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
