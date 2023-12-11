import React from 'react';

import { act, fireEvent, render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';

import { SignInScreen } from 'screens/AuthScreens/SignInScreen/SignInScreen';
import { FillPhoneNumberFormReturn } from 'screens/AuthScreens/SignInScreen/signInScreen.types';

import { server } from 'constants/mocks/server';

import { TEST_ID } from '../signInScreen.testIDs';

import { StackContainer } from 'containers/StackScreenContainer/StackContainer';

import { SIGNIN_SCREEN_OPTIONS } from 'navigation/AuthStackNavigation/authStackNavigation.settings';
import { AuthStackScreenTypes } from 'navigation/AuthStackNavigation/authStackNavigation.types';

const PHONE_NUMBERS = {
  INVALID: '1234567890',
  REGISTERED: '(97) 999-9999',
};

const PHONE_NUMBER_INPUT_ACTIONS = {
  CHANGE_TEXT: 'onChangeText',
  END_EDITING: 'onEndEditing',
};

describe('The Sign In screen', () => {
  beforeEach(() => server.listen());
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

  const fillPhoneNumberForm = async (
    phoneNumber: string,
  ): Promise<FillPhoneNumberFormReturn> => {
    const { getByTestId, queryByTestId } = renderBasicComponent();

    const phoneNumberContainer = getByTestId(TEST_ID.PHONE_NUMBER_CONTROLLER);

    expect(phoneNumberContainer).toBeDefined();
    const phoneNumberInput = phoneNumberContainer
      .children[0] as ReactTestInstance;
    const phoneNumberForm = phoneNumberInput.children[0] as ReactTestInstance;

    await act(() => {
      fireEvent(
        phoneNumberForm,
        PHONE_NUMBER_INPUT_ACTIONS.CHANGE_TEXT,
        phoneNumber,
      );
    });

    await act(() => {
      fireEvent(phoneNumberForm, PHONE_NUMBER_INPUT_ACTIONS.END_EDITING);
    });

    return { getByTestId, queryByTestId, phoneNumberForm, phoneNumberInput };
  };

  it('should render sign in screen', () => {
    const { getByTestId } = renderBasicComponent();

    expect(getByTestId(TEST_ID.CONTAINER)).toBeDefined();
  });

  describe('The sign in forms', () => {
    it("should render confirm password input if user isn't registered", async () => {
      const { getByTestId } = await fillPhoneNumberForm(PHONE_NUMBERS.INVALID);

      expect(getByTestId(TEST_ID.PASSWORD_CONTROLLER)).toBeDefined();
      expect(getByTestId(TEST_ID.CONFIRM_PASSWORD_CONTROLLER)).toBeDefined();
    });

    it('should set user registered on registered phone number entered', async () => {
      const { getByTestId, queryByTestId, phoneNumberForm } =
        await fillPhoneNumberForm(PHONE_NUMBERS.REGISTERED);

      expect(phoneNumberForm.props.value).toBe(PHONE_NUMBERS.REGISTERED);
      expect(getByTestId(TEST_ID.PASSWORD_CONTROLLER)).toBeDefined();
      expect(queryByTestId(TEST_ID.CONFIRM_PASSWORD_CONTROLLER)).toBeNull();
    });

    it('should set errors on invalid password', async () => {
      const { getByTestId } = await fillPhoneNumberForm(PHONE_NUMBERS.INVALID);

      const passwordInput = getByTestId(TEST_ID.PASSWORD_CONTROLLER)
        .children[0] as ReactTestInstance;
      const passwordForm = passwordInput.children[0] as ReactTestInstance;

      await act(() => {
        fireEvent(
          passwordForm,
          PHONE_NUMBER_INPUT_ACTIONS.CHANGE_TEXT,
          'invalid',
        );
      });

      expect(passwordForm.props.error).toStrictEqual(
        'Password must contain a number.',
      );

      await act(() => {
        fireEvent(
          passwordForm,
          PHONE_NUMBER_INPUT_ACTIONS.CHANGE_TEXT,
          'Inval1d',
        );
      });

      expect(passwordForm.props.error).toStrictEqual(
        'Password must be at least 8 characters.',
      );

      await act(() => {
        fireEvent(
          passwordForm,
          PHONE_NUMBER_INPUT_ACTIONS.CHANGE_TEXT,
          '1ValidPass1',
        );
      });
      const confirmPasswordInput = getByTestId(
        TEST_ID.CONFIRM_PASSWORD_CONTROLLER,
      ).children[0] as ReactTestInstance;
      const confirmPasswordForm = confirmPasswordInput
        .children[0] as ReactTestInstance;

      await act(() => {
        fireEvent(
          confirmPasswordForm,
          PHONE_NUMBER_INPUT_ACTIONS.CHANGE_TEXT,
          'invalid',
        );
      });

      expect(confirmPasswordForm.props.error).toStrictEqual(
        'Passwords must match',
      );
    });

    it('should enter password on password input without no errors', async () => {
      const { getByTestId } = await fillPhoneNumberForm(PHONE_NUMBERS.INVALID);

      const passwordInput = getByTestId(TEST_ID.PASSWORD_CONTROLLER)
        .children[0] as ReactTestInstance;
      const passwordForm = passwordInput.children[0] as ReactTestInstance;

      await act(() => {
        fireEvent(
          passwordForm,
          PHONE_NUMBER_INPUT_ACTIONS.CHANGE_TEXT,
          '1ValidPass1',
        );
      });

      const confirmPasswordInput = getByTestId(
        TEST_ID.CONFIRM_PASSWORD_CONTROLLER,
      ).children[0] as ReactTestInstance;
      const confirmPasswordForm = confirmPasswordInput
        .children[0] as ReactTestInstance;

      await act(() => {
        fireEvent(
          confirmPasswordForm,
          PHONE_NUMBER_INPUT_ACTIONS.CHANGE_TEXT,
          '1ValidPass1',
        );
      });

      expect(passwordForm.props.error).toBeUndefined();
      expect(confirmPasswordForm.props.error).toBeUndefined();

      expect(passwordForm.props.value).toBe('1ValidPass1');
      expect(confirmPasswordForm.props.value).toBe('1ValidPass1');
    });
  });

  it('handles continue button press when user is not registered', async () => {
    const { getByTestId } = await fillPhoneNumberForm(PHONE_NUMBERS.INVALID);

    fireEvent.press(getByTestId(TEST_ID.CONFIRM_BUTTON));
  });
});
