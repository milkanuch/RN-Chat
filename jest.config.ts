import type { Config } from 'jest';

const IGNORE_PATTERN =
  'node_modules/(?!(jest-)?@?react-native|@react-native-community|expo|@expo/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@react-navigation|@react-navigation/.*|(jest-)?@?react-native|@react-native-community)';
const config: Config = {
  verbose: true,
  clearMocks: true,
  preset: 'jest-expo',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!.eslintrc.js',
    '!.prettierrc.js',
  ],
  coverageReporters: ['json-summary'],
  setupFilesAfterEnv: [
    './jest.setup.js',
    './src/constants/mocks/server.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  //SOURCE: https://docs.expo.dev/guides/testing-with-jest/#configuration
  transformIgnorePatterns: [IGNORE_PATTERN],
};

module.exports = config;
