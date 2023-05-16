import { ValidationMode } from 'react-hook-form';
import { Easing } from 'react-native-reanimated';

import { SignInInputsSettings } from './signInScreen.types';

//NOTE: Hook form settings
export const DEFAULT_VALUE = '';
export const FORM_MODE: keyof ValidationMode = 'onChange';
//NOTE: inputs settings
export const PHONE_NUMBER_SETTINGS: SignInInputsSettings = {
  name: 'phoneNumber',
  label: 'Phone number',
  maxLength: 14,
  placeholder: '(00) 000-0000',
  countryCode: '🇺🇦 +380',
  keyboardType: 'phone-pad',
  keyboardMask: [
    '(',
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
};

export const PASSWORD_SETTINGS: SignInInputsSettings = {
  name: 'password',
  label: 'Password',
  placeholder: '********',
};

export const CONFIRM_PASSWORD_SETTINGS: SignInInputsSettings = {
  name: 'confirmPassword',
  label: 'Confirm Password',
  placeholder: '********',
};
//NOTE: Animations settings
export const SHAKE_ANIMATION = {
  left: 1,
  right: 0,
};
export const SHAKE_ANIMATION_CONFIG = { duration: 100, easing: Easing.linear };
export const PROGRESS_ANIMATION_DURATION = { duration: 500 };
export const BUTTON_HEIGHT = 50;
//NOTE: title
export const TITLE = 'Authorization';
export const CONTINUE_TITLE = 'CONTINUE';
export const SIGN_UP_TITLE = 'SIGN UP';
