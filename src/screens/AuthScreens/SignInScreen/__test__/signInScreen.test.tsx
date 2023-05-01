import { RouteProp } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

import { STACK_MOCKED_NAVIGATION } from 'constants/mocks';

import { SignInScreen } from '../SignInScreen';

import { TEST_ID } from './signInScreen.testIDs';

import {
  AuthStackScreenParamsList,
  AuthStackScreenTypes,
} from 'navigation/AuthStackNavigation/authStackNavigation.types';

jest.unmock('../SignInScreen.tsx');

const MOCKED_ROUTE: RouteProp<
  AuthStackScreenParamsList,
  AuthStackScreenTypes.SignIn
> = {
  key: AuthStackScreenTypes.SignIn,
  name: AuthStackScreenTypes.SignIn,
  params: undefined,
};

describe('The Sign In screen', () => {
  it('should render sign in screen', () => {
    const { getByTestId } = render(
      <SignInScreen
        navigation={STACK_MOCKED_NAVIGATION}
        route={MOCKED_ROUTE}
      />,
    );
    expect(getByTestId(TEST_ID.CONTAINER)).toBeDefined();
  });
});
