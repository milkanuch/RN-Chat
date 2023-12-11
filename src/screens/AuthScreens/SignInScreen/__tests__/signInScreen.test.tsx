import React from 'react';

import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';

import { SignInScreen } from 'screens/AuthScreens/SignInScreen/SignInScreen';

import { server } from 'constants/mocks/server';

import { TEST_ID } from '../signInScreen.testIDs';

import { StackContainer } from 'containers/StackScreenContainer/StackContainer';

import { SIGNIN_SCREEN_OPTIONS } from 'navigation/AuthStackNavigation/authStackNavigation.settings';
import { AuthStackScreenTypes } from 'navigation/AuthStackNavigation/authStackNavigation.types';

const handleContinueMock = jest.fn();

describe('The Sign In screen', () => {
  beforeEach(() => {
    server.listen();
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const renderBasicComponent = () => {
    const component = (
      <StackContainer
        screen={SignInScreen}
        screenName={AuthStackScreenTypes.SignIn}
        screenOptions={SIGNIN_SCREEN_OPTIONS}
      />
    );

    return render(component);
  };

  it('should render sign in screen', () => {
    const { getByTestId } = renderBasicComponent();

    expect(getByTestId(TEST_ID.CONTAINER)).toBeDefined();
  });

  describe('The sign in forms', () => {
    it("should render confirm password input if user isn't registered", async () => {
      const { getByTestId } = renderBasicComponent();

      const phoneNumberContainer = getByTestId(TEST_ID.PHONE_NUMBER_CONTROLLER);

      expect(phoneNumberContainer).toBeDefined();
      const phoneNumberInput = phoneNumberContainer
        .children[0] as ReactTestInstance;
      const phoneNumberForm = phoneNumberInput.children[0] as ReactTestInstance;

      await act(() => {
        fireEvent(phoneNumberForm, 'onChangeText', '1234567890');
      });

      await act(() => {
        fireEvent(phoneNumberForm, 'onEndEditing');
      });

      expect(getByTestId(TEST_ID.PASSWORD_CONTROLLER)).toBeDefined();
      expect(getByTestId(TEST_ID.CONFIRM_PASSWORD_CONTROLLER)).toBeDefined();
    });

    it.skip('should render password input', () => {
      const { getByTestId, debug } = renderBasicComponent();

      debug();
      const passwordInput = getByTestId(TEST_ID.PASSWORD_CONTROLLER);

      expect(passwordInput).toBeDefined();
    });

    it.skip('should render confirm password input when user is not registered', async () => {
      const { getByTestId } = renderBasicComponent();

      fireEvent.changeText(
        getByTestId(TEST_ID.PHONE_NUMBER_CONTROLLER),
        '1234567890',
      );

      await waitFor(() => {
        fireEvent.press(getByTestId(TEST_ID.CONFIRM_BUTTON));
      });

      // expect(confirmPasswordInput).toBeDefined();
    });
  });

  it.skip('handles continue button press when user is not registered', async () => {
    const { getByTestId } = renderBasicComponent();

    fireEvent.changeText(
      getByTestId(TEST_ID.PHONE_NUMBER_CONTROLLER),
      '1234567890',
    );

    fireEvent.press(getByTestId(TEST_ID.CONFIRM_BUTTON));

    await waitFor(() => {
      expect(handleContinueMock).toHaveBeenCalled();
    });
  });
});
