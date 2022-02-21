module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      "module:metro-react-native-babel-preset",
    ],

    // plugins: [
    //   [
    //     "module:react-native-dotenv",
    //     {
    //       moduleName: "@env",
    //       path: ".env",
    //     },
    //   ],
    // ],

    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: ['TEST', 'BASE_URL'],
          safe: false,
          allowUndefined: true,
        },
      ],
    ]
  };
};
