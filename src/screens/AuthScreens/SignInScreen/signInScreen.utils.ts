import { FieldErrors } from 'react-hook-form';

import { SignInForm } from './signInScreen.types';

const ANIMATION_PERCENTAGE = 100;

const REGISTERED_USER_FIELDS_LENGTH = 2;
const UNREGISTERED_USER_FIELDS_LENGTH = 3;

export const getAuthorizationProgress = (
  errors: FieldErrors<SignInForm>,
  values: SignInForm,
  isRegistered: boolean,
): number => {
  const valuesLength = Object.entries(values).filter(
    (value: string[]) => !!value[1] && !errors[value[0] as keyof SignInForm],
  ).length;
  const fieldsLength = isRegistered
    ? REGISTERED_USER_FIELDS_LENGTH
    : UNREGISTERED_USER_FIELDS_LENGTH;

  return (valuesLength / fieldsLength) * ANIMATION_PERCENTAGE;
};

export const getFormattedPhoneNumber = (phoneNumber: string) => {
  const regex = /[()\s-]/g;
  const formattedPhoneNumber = phoneNumber.replace(regex, '');

  return `+380${formattedPhoneNumber}`;
};
