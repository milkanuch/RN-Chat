const Reanimated = require('react-native-reanimated/mock');

// eslint-disable-next-line @typescript-eslint/no-empty-function
Reanimated.default.call = () => {};

module.exports = Reanimated;
