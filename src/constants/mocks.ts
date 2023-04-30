export const EMPTY_OBJECT = Object.freeze({});

export const EMPTY_STRING = Object.freeze('');

export const EMPTY_ARRAY = Object.freeze([]);

export const STACK_MOCKED_NAVIGATION = {
  dispatch: jest.fn(),
  goBack: jest.fn(),
  navigate: jest.fn(),
  setParams: jest.fn(),
  addListener: jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  isFocused: jest.fn(),
  getParent: jest.fn(),
  reset: jest.fn(),
  setOptions: jest.fn(),
  canGoBack: jest.fn(),
  getId: jest.fn(),
  getState: jest.fn(),
  removeListener: jest.fn(),
};
