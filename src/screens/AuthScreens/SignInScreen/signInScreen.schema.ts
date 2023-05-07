import * as yup from 'yup';

import {
  PASSWORD_SETTINGS,
  PHONE_NUMBER_SETTINGS,
  CONFIRM_PASSWORD_SETTINGS,
} from './signInScreen.settings';

const MIN_PASSWORD_LENGTH = 8;

const PHONE_NUMBER_REGEX = /^\((67|68|96|97|98)\) \d{3}-\d{4}$/;

const PASSWORD_REGEX = /(?=.*[0-9])/;

export const signInScheme = yup
  .object({
    [PHONE_NUMBER_SETTINGS.name]: yup
      .string()
      .matches(PHONE_NUMBER_REGEX, 'Please, provide valid  phone number.')
      .required('Phone number is required'),
    [PASSWORD_SETTINGS.name]: yup
      .string()
      .uppercase('Password must contain a capital letter.')
      .matches(PASSWORD_REGEX, 'Password must contain a number.')
      .min(
        MIN_PASSWORD_LENGTH,
        `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`,
      )
      .required('Password is required'),
    [CONFIRM_PASSWORD_SETTINGS.name]: yup
      .string()
      .required('Confirm password is required'),
  })
  .required();
