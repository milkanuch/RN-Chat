import { fireEvent, render } from '@testing-library/react-native';

import { SignInScreen } from '../SignInScreen';
import { TEST_ID } from '../signInScreen.testIDs';

import { StackContainer } from 'containers/StackScreenContainer/StackContainer';

import { AuthStackScreenTypes } from 'navigation/AuthStackNavigation/authStackNavigation.types';

jest.unmock('../SignInScreen.tsx');
const handleContinueMock = jest.fn();

describe('The Sign In screen', () => {
  const renderBasicComponent = () =>
    render(
      <StackContainer
        screen={SignInScreen}
        screenName={AuthStackScreenTypes.SignIn}
      />,
    );

  it('should render sign in screen', () => {
    const { getByTestId } = renderBasicComponent();

    expect(getByTestId(TEST_ID.CONTAINER)).toBeDefined();
  });

  describe('The sign in forms', () => {
    it('should render phone number input', () => {
      const { getByTestId } = renderBasicComponent();
      const phoneNumberContainer = getByTestId(TEST_ID.PHONE_NUMBER_CONTROLLER);

      expect(phoneNumberContainer).toBeDefined();
      const phoneNumberInput = phoneNumberContainer.children[0];

      expect(phoneNumberInput).toBeDefined();
    });
  });

  // it('should render sign in screen', async () => {
  //   const { getByTestId } = renderBasicComponent();
  //
  //   await fireEvent.press(getByTestId(TEST_ID.CONFIRM_BUTTON));
  //   expect(handleContinueMock).toHaveBeenCalled();
  // });
});
