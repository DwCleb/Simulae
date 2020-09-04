module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    '@babel/transform-flow-strip-types',
    '@babel/proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./source'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          //  "~/": "./source/",
          '~/assets': './source/assets',
          '~/components': './source/components',
          '~/pages': './source/pages',
          '~/routes': './source/routes',
          '~/services': './source/services',
          '~/theme': './source/theme',
          '~/i18n': './source/i18n',
          '~/mocks': './source/mocks',
          '~/utils': './source/utils',
          '~/configs': './source/configs',
        },
      },
    ],
  ],
};
