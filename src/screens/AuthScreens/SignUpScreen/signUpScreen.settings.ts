import { ImagePickerOptions, MediaTypeOptions } from 'expo-image-picker';
import { Easing } from 'react-native-reanimated';

import { SignUpInputsSettings } from './signUpScreen.types';

const ASPECT_RATIO = {
  x: 4,
  y: 3,
};

export const SIGN_UP_FORM_MODE = 'onChange';

export const CAMERA_ICON = 'camera';
export const GALLERY_ICON = 'image';
export const ICON_SIZE = 34;

export const IMAGE_MODE = 'cover';
export const IMAGE_HEIGHT = 200;
export const IMAGE_WIDTH = IMAGE_HEIGHT;

export const TITLE = 'Create new account';
export const SUBTITLE = 'Upload a picture';

export const BUTTON_TITLE = 'CREATE ACCOUNT';

export const CAMERA_SETTINGS: ImagePickerOptions = {
  mediaTypes: MediaTypeOptions.All,
  allowsEditing: true,
  aspect: [ASPECT_RATIO.x, ASPECT_RATIO.y],
  quality: 1,
};

export const FADE_ANIMATION_CONFIG = { duration: 250, easing: Easing.linear };

export const NICKNAME: SignUpInputsSettings = {
  name: 'nickname',
  label: 'HOW ARE YOU CALLED?',
  placeholder: 'Nickname',
  autoCapitalize: 'words',
};

export const BIOGRAPHY: SignUpInputsSettings = {
  name: 'biography',
  label: 'TELL US ABOUT YOURSELF',
  placeholder: 'Biography',
  autoCapitalize: 'sentences',
  numberOfLines: 4,
};
