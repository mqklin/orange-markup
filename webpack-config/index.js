const merge = require('webpack-merge');
const common = require('./common');
const dev = require('./dev');
const prod = require('./prod');

module.exports = merge(
  process.env.NODE_ENV === 'production' ? prod : dev,
  common
);
