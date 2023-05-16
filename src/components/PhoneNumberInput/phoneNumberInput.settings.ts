import { SignInInputsSettings } from 'screens/AuthScreens/SignInScreen/signInScreen.types';

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
