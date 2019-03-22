const path = require('path');

module.exports = {
  entry: './index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'app/components/'),
      modules: path.resolve(__dirname, 'app/modules/'),
      pages: path.resolve(__dirname, 'pages/'),
      types: path.resolve(__dirname, 'app/types/'),
    },
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
};
