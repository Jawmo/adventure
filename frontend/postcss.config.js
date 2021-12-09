/* eslint-disable */

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1,
      autoprefixer: {
        flexbox: 'no-2009'
      }
    },
    autoprefixer: {},
    cssnano: {}
  }
}
