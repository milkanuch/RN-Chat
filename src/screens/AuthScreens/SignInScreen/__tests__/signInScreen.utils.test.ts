import {
  getAuthorizationProgress,
  getFormattedPhoneNumber,
} from '../signInScreen.utils';

const AUTHORIZATION_PROGRESS_MOCKS = {
  fail: 0,
  inProgress: 50,
  success: 100,
};

describe('The SignInScreen utils', () => {
  it('should return zero authorization progress', () => {
    const errorsMock = {
      phoneNumber: undefined,
      confirmPassword: undefined,
      password: undefined,
    };
    const valuesMock = {
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    };
    const result = getAuthorizationProgress(errorsMock, valuesMock, true);

    expect(result).toStrictEqual(AUTHORIZATION_PROGRESS_MOCKS.fail);
  });

  it('should return in progress authorization ', () => {
    const errorsMock = {
      phoneNumber: undefined,
      password: undefined,
    };
    const valuesMock = {
      phoneNumber: '+380123456789',
      password: '',
    };
    const result = getAuthorizationProgress(errorsMock, valuesMock, true);

    expect(result).toStrictEqual(AUTHORIZATION_PROGRESS_MOCKS.inProgress);
  });

  it('should return 100 authorization progress', () => {
    const errorsMock = {
      phoneNumber: undefined,
      password: undefined,
    };
    const valuesMock = {
      phoneNumber: '+380123456789',
      password: 'PASSWORD1',
    };
    const result = getAuthorizationProgress(errorsMock, valuesMock, true);

    expect(result).toStrictEqual(AUTHORIZATION_PROGRESS_MOCKS.success);
  });

  it('should return formatted phone number', () => {
    const phoneNumberMock = '(12)345-67-89';
    const result = getFormattedPhoneNumber(phoneNumberMock);

    expect(result).toStrictEqual('+380123456789');
  });

  it('should return empty phone number', () => {
    const phoneNumberMock = '';
    const result = getFormattedPhoneNumber(phoneNumberMock);

    expect(result).toStrictEqual('+380');
  });
});
