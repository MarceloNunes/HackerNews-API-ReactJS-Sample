const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: './app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules:[{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: [ /node_modules/ ]
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    stats: {
      warnings: false
    },
    plugins: [
      new LiveReloadPlugin()
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
