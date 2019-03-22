/* eslint-disable @typescript-eslint/no-var-requires */
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const compose = require('next-compose');

module.exports = withTypescript(withSass());
