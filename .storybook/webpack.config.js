const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        query: {
          configFileName: path.resolve('.storybook', 'tsStories.json'),
          transpileOnly: true,
          useCache: true,
          useBabel: true,
          silent: true,
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  defaultConfig.module.rules.push({
    test: /\.mkd$/,
    loader: require.resolve('raw-loader'),
  });
  defaultConfig.resolve.extensions.push('.ts', '.tsx', 'json', '.js', '.jsx');
  defaultConfig.resolve.modules.push(path.resolve('./node_modules'));
  defaultConfig.resolve.modules.push(path.resolve('./app'));
  defaultConfig.resolve.modules.push(path.resolve('./static'));
  return defaultConfig;
};
