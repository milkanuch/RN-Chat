import { FC, useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import MaskInput from 'react-native-mask-input';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedButton } from 'components/AnimatedButton/AnimatedButton';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInput';
import { Title } from 'components/Title/Title';

import { COLORS } from 'constants/color';

import { signInScheme } from './signInScreen.schema';
import { getAuthorizationProgress } from './signInScreen.utils';

import {
  FORM_MODE,
  DEFAULT_VALUE,
  PASSWORD_SETTINGS,
  PHONE_NUMBER_SETTINGS,
  CONFIRM_PASSWORD_SETTINGS,
  SHAKE_ANIMATION,
  SHAKE_ANIMATION_CONFIG,
  PROGRESS_ANIMATION_DURATION,
  TITLE,
} from './signInScreen.settings';
import { styles } from './signInScreen.styles';
import { SignInForm } from './signInScreen.types';
import {
  AuthStackScreenTypes,
  SignInScreenProps,
} from 'navigation/AuthStackNavigation/authStackNavigation.types';

export const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const [isUserRegistered, setIsUserRegistered] = useState<boolean>(true);
  const authorizationProgress = useSharedValue<number>(0);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(signInScheme),
    mode: FORM_MODE,
  });

  const buttonTitle = isUserRegistered ? 'SIGN UP' : 'CONTINUE';
  const isButtonDisabled = !!Object.keys(errors).length;

  useEffect(() => {
    const values = getValues();

    authorizationProgress.value = withTiming(
      getAuthorizationProgress(errors, values, isUserRegistered),
      PROGRESS_ANIMATION_DURATION,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    errors.phoneNumber,
    errors.password,
    errors.confirmPassword,
    isUserRegistered,
  ]);

  const buttonProgressStyle = useAnimatedStyle(() => {
    return {
      width: `${authorizationProgress.value}%`,
      height: 50,
      backgroundColor: COLORS.darkBlue,
    };
  }, [authorizationProgress]);

  const buttonShakeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSequence(
            withTiming(SHAKE_ANIMATION.left, SHAKE_ANIMATION_CONFIG),
            withTiming(SHAKE_ANIMATION.right, SHAKE_ANIMATION_CONFIG),
            withTiming(SHAKE_ANIMATION.left, SHAKE_ANIMATION_CONFIG),
            withTiming(SHAKE_ANIMATION.right, SHAKE_ANIMATION_CONFIG),
          ),
        },
      ],
    };
  }, [authorizationProgress.value]);

  const handleContinue = () => {
    const phoneNumber = getValues(PHONE_NUMBER_SETTINGS.name);
    const password = getValues(PASSWORD_SETTINGS.name);
    if (isUserRegistered && phoneNumber && password) {
      navigation.navigate(AuthStackScreenTypes.SignUp, {
        phoneNumber,
        password,
      });
      return;
    }
    //TODO: add mobx user store
    setIsUserRegistered(true);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Title containerStyle={styles.titleContainer} title={TITLE} />
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>{PHONE_NUMBER_SETTINGS.label}</Text>
          <View style={[styles.inputContainer, styles.phoneNumberContainer]}>
            <Text style={styles.countryCode}>
              {PHONE_NUMBER_SETTINGS.countryCode}
            </Text>
            <Controller
              control={control}
              defaultValue={DEFAULT_VALUE}
              name={PHONE_NUMBER_SETTINGS.name}
              render={({ field: { onChange: handlePhoneNumber, value } }) => (
                <MaskInput
                  keyboardType={PHONE_NUMBER_SETTINGS.keyboardType}
                  mask={PHONE_NUMBER_SETTINGS.keyboardMask}
                  maxLength={PHONE_NUMBER_SETTINGS.maxLength}
                  onChangeText={handlePhoneNumber}
                  placeholder={PHONE_NUMBER_SETTINGS.placeholder}
                  style={[styles.input, styles.phoneNumberInput]}
                  value={value}
                />
              )}
            />
          </View>
          {!!errors.phoneNumber && (
            <Text style={styles.error}>{errors.phoneNumber.message}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            defaultValue={DEFAULT_VALUE}
            name={PASSWORD_SETTINGS.name}
            render={({ field: { onChange: handlePhoneNumber, value } }) => (
              <CustomTextInput
                error={errors.password?.message}
                label={PASSWORD_SETTINGS.label}
                onChangeText={handlePhoneNumber}
                placeholder={PASSWORD_SETTINGS.placeholder}
                secureTextEntry={true}
                style={styles.input}
                value={value}
              />
            )}
          />
        </View>

        {!isUserRegistered && (
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              defaultValue={DEFAULT_VALUE}
              name={CONFIRM_PASSWORD_SETTINGS.name}
              render={({ field: { onChange: handlePhoneNumber, value } }) => (
                <CustomTextInput
                  error={errors.confirmPassword?.message}
                  label={CONFIRM_PASSWORD_SETTINGS.label}
                  onChangeText={handlePhoneNumber}
                  placeholder={CONFIRM_PASSWORD_SETTINGS.placeholder}
                  secureTextEntry={true}
                  style={styles.input}
                  value={value}
                />
              )}
            />
          </View>
        )}

        <AnimatedButton
          animatedStyle={buttonShakeStyle}
          disabled={isButtonDisabled}
          onPress={handleSubmit(handleContinue)}
          style={styles.button}>
          <Animated.View style={buttonShakeStyle}>
            <Animated.View style={buttonProgressStyle} />
            <Text
              style={[
                styles.buttonLabel,
                isButtonDisabled && styles.disabledButtonLabel,
              ]}>
              {buttonTitle}
            </Text>
          </Animated.View>
        </AnimatedButton>
      </View>
    </SafeAreaView>
  );
};
