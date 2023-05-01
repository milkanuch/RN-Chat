module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        //SOURCE: https://github.com/tleunen/babel-plugin-module-resolver
        'module-resolver',
        {
          alias: {
            components: './src/components',
            constants: './src/constants',
            navigation: './src/navigation',
            screens: './src/screens',
            services: './src/services',
            assets: './src/assets',
            store: './src/store',
          },
        },
      ],
      //SOURCE: https://mobx.js.org/enabling-decorators.html#babel-7
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-transform-flow-strip-types', { loose: false }],
      //SOURCE: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: 'dotenv',
          path: '.env',
        },
      ],
    ],
    //SOURCE: https://babeljs.io/docs/assumptions
    assumptions: {
      setPublicClassFields: false,
    },
  };
};
