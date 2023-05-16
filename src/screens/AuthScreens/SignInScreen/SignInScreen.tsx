import React, { FC, useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedButton } from 'components/AnimatedButton/AnimatedButton';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInput';
import { PhoneNumberInput } from 'components/PhoneNumberInput/PhoneNumberInput';
import { Title } from 'components/Title/Title';

import { COLORS } from 'constants/color';

import { checkIsUserRegistered, login } from 'services/auth/auth';
import { setUserTokens } from 'services/storage/storage';
import { user } from 'store/user/user';

import { signInScheme } from './signInScreen.schema';
import { TEST_ID } from './signInScreen.testIDs';
import {
  getAuthorizationProgress,
  getFormattedPhoneNumber,
} from './signInScreen.utils';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const authorizationProgress = useSharedValue<number>(0);

  const {
    control,
    getValues,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(signInScheme),
    mode: FORM_MODE,
  });

  const values = getValues();
  const buttonTitle = isUserRegistered ? 'SIGN UP' : 'CONTINUE';
  const isButtonDisabled = !!Object.keys(errors).length;

  useEffect(() => {
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
      backgroundColor: COLORS.white,
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

  const handleContinue = async () => {
    const { phoneNumber, password, confirmPassword } = values;

    setIsLoading(true);
    if (phoneNumber && password) {
      const formattedPhoneNumber = getFormattedPhoneNumber(phoneNumber);

      if (!isUserRegistered && !!confirmPassword) {
        navigation.navigate(AuthStackScreenTypes.SignUp, {
          phoneNumber: formattedPhoneNumber,
          password,
        });
      } else if (isUserRegistered) {
        const userResponse = await login({
          phoneNumber: formattedPhoneNumber,
          password,
        });

        await setUserTokens(userResponse);
        user.setIsRegistered(userResponse.isRegistered);
      }
    }
    setIsLoading(false);
  };

  const handleCheckPhoneNumber = async () => {
    const { phoneNumber } = values;

    if (phoneNumber) {
      const formattedPhoneNumber = getFormattedPhoneNumber(phoneNumber);

      setIsLoading(true);
      const isPhoneNumberRegistered = await checkIsUserRegistered(
        formattedPhoneNumber,
      );

      setIsUserRegistered(isPhoneNumberRegistered);
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.screen} testID={TEST_ID.CONTAINER}>
      <Title containerStyle={styles.titleContainer} title={TITLE} />
      <View style={styles.container}>
        <Controller
          control={control}
          defaultValue={DEFAULT_VALUE}
          name={PHONE_NUMBER_SETTINGS.name}
          render={({ field: { onChange: handlePhoneNumber, value } }) => (
            <PhoneNumberInput
              error={errors.phoneNumber?.message}
              onChangeText={handlePhoneNumber}
              onEndEditing={handleCheckPhoneNumber}
              value={value}
            />
          )}
        />
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            defaultValue={DEFAULT_VALUE}
            name={PASSWORD_SETTINGS.name}
            render={({ field: { onChange: handlePassword, value } }) => (
              <CustomTextInput
                error={errors.password?.message}
                label={PASSWORD_SETTINGS.label}
                onChangeText={handlePassword}
                placeholder={PASSWORD_SETTINGS.placeholder}
                secureTextEntry={true}
                style={styles.input}
                value={value}
              />
            )}
          />
        </View>

        {!isUserRegistered && (
          <View
            style={styles.inputContainer}
            testID={TEST_ID.CONFIRM_PASSWORD_CONTROLLER}>
            <Controller
              control={control}
              defaultValue={DEFAULT_VALUE}
              name={CONFIRM_PASSWORD_SETTINGS.name}
              render={({
                field: { onChange: handleConfirmPassword, value },
              }) => (
                <CustomTextInput
                  error={errors.confirmPassword?.message}
                  label={CONFIRM_PASSWORD_SETTINGS.label}
                  onChangeText={handleConfirmPassword}
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
          isLoading={isLoading}
          onPress={handleContinue}
          style={styles.button}
          testID={TEST_ID.CONFIRM_BUTTON}>
          <Animated.View style={buttonShakeStyle}>
            <Animated.View style={buttonProgressStyle} />
            <Text style={styles.buttonLabel}>{buttonTitle}</Text>
          </Animated.View>
        </AnimatedButton>
      </View>
    </SafeAreaView>
  );
};
