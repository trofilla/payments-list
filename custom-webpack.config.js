const webpack = require('webpack');

module.exports = config => {
  config.plugins.push(new webpack.EnvironmentPlugin({ ENV_NAME: null }));
  
  return config;
};
