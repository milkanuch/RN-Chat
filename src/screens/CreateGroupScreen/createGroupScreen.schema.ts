import * as yup from 'yup';

import {
  GROUP_NAME_INPUT_SETTINGS,
  PASSWORD_INPUT_SETTINGS,
} from './createGroupScreen.settings';

const MIN_GROUP_PASSWORD_LENGTH = 6;

export const createGroupScheme = yup.object().shape({
  [GROUP_NAME_INPUT_SETTINGS.name]: yup
    .string()
    .min(
      MIN_GROUP_PASSWORD_LENGTH,
      `Group name must be at least ${MIN_GROUP_PASSWORD_LENGTH} characters`,
    )
    .required('GroupName is required'),
  [PASSWORD_INPUT_SETTINGS.name]: yup
    .string()
    .min(
      MIN_GROUP_PASSWORD_LENGTH,
      `Password must be at least ${MIN_GROUP_PASSWORD_LENGTH} characters`,
    )
    .required('Group password is required'),
});
