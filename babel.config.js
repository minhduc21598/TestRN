module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@configs': './app/configs',
          '@components': './app/components',
          '@screens': './app/screens',
          '@navigation': './app/navigation',
          '@assets': './app/assets',
        },
      },
    ],
  ],
};
