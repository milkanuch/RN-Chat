import { ImagePickerOptions, MediaTypeOptions } from 'expo-image-picker';

import { COLORS } from 'constants/color';

import { GroupInputSettings } from './createGroupScreen.types';

const ASPECT_RATIO = {
  x: 4,
  y: 3,
};

export const CAMERA_SETTINGS: ImagePickerOptions = {
  mediaTypes: MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [ASPECT_RATIO.x, ASPECT_RATIO.y],
  quality: 1,
};

export const FORM_MODE = 'onChange';

export const CAMERA_ICON = 'camera';
export const GALLERY_ICON = 'image';
export const ICON_SIZE = 34;

export const SUBTITLE = 'Upload a group photo';
export const TITLE = 'Create a group';

export const GROUP_NAME_INPUT_SETTINGS: GroupInputSettings = {
  name: 'name',
  label: 'GROUP NAME',
  placeholder: 'Kaizen!',
};

export const PASSWORD_INPUT_SETTINGS: GroupInputSettings = {
  name: 'password',
  label: 'PASSWORD',
  placeholder: '********',
  secureTextEntry: true,
};

export const BUTTON_TITLE = 'CREATE GROUP';

export const SWITCH_TITLE = 'Is private?';
export const LOCK_ICON = 'lock';
export const UNLOCK_ICON = 'unlock';
export const SWITCH_ICON_SIZE = 24;
export const ICON_COLOR = COLORS.darkBlue;
