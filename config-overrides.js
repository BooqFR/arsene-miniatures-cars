/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': './src/components/index',
    '@components/*': './src/components/*',
    '@hooks': './src/hooks/index',
    '@hooks/*': './src/hooks/*',
    '@pages': './src/pages/index',
    '@pages/*': './src/pages/*'
  })(config)

  return config
}
