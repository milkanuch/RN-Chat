import type { Config } from 'jest';

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
  setupFilesAfterEnv: ['./src/constants/mocks/server.ts'],
  //SOURCE: https://docs.expo.dev/guides/testing-with-jest/#configuration
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
};

module.exports = config;
