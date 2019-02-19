const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
    query: {
      configFileName: path.resolve('.storybook', 'tsStories.json'),
      transpileOnly: true,
      silent: true,
    },
  });
  defaultConfig.resolve.extensions.push('.ts', '.tsx', 'json', '.js', '.jsx');
  defaultConfig.resolve.modules.push(path.resolve('./node_modules'));
  defaultConfig.resolve.modules.push(path.resolve('./app'));
  defaultConfig.resolve.modules.push(path.resolve('./static'));
  return defaultConfig;
};
