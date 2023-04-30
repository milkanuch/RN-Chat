import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  clearMocks: true,
  preset: 'jest-expo',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.config.ts',
  ],
  //SOURCE: https://docs.expo.dev/guides/testing-with-jest/#configuration
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
};

module.exports = config;
