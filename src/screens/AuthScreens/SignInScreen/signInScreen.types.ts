import { KeyboardType } from 'react-native';

import { TextMatch } from '@testing-library/react-native/build/matches';
import {
  GetByQuery,
  QueryByQuery,
} from '@testing-library/react-native/build/queries/make-queries';
import { CommonQueryOptions } from '@testing-library/react-native/build/queries/options';
import { Mask } from 'react-native-mask-input';
import { ReactTestInstance } from 'react-test-renderer';

export interface SignInForm {
  phoneNumber: string;
  password: string;
  confirmPassword?: string;
}

export interface SignInInputsSettings {
  name: 'phoneNumber' | 'password' | 'confirmPassword';
  label: string;
  maxLength?: number;
  placeholder: string;
  keyboardMask?: Mask;
  countryCode?: string;
  keyboardType?: KeyboardType;
}

export type FillPhoneNumberFormReturn = {
  getByTestId: GetByQuery<TextMatch, CommonQueryOptions>;
  queryByTestId: QueryByQuery<TextMatch, CommonQueryOptions>;
  phoneNumberForm: ReactTestInstance;
  phoneNumberInput: ReactTestInstance;
};
