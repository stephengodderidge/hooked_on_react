const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
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
  config.module.rules.push({
    test: /\.mkd$/,
    loader: require.resolve('raw-loader'),
  });
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  });
  config.resolve.extensions.push('.ts', '.tsx', 'json', '.js', '.jsx');
  config.resolve.modules.push(path.resolve('./node_modules'));
  config.resolve.modules.push(path.resolve('./app'));
  config.resolve.modules.push(path.resolve('./static'));
  config.resolve.modules.push(path.resolve('./scss'));
  return config;
};
