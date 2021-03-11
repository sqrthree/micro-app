const dotenv = require('dotenv')
const { consola } = require('@sqrtthree/wraps')

dotenv.config()

module.exports = (req, res) => {
  consola.debug('Welcome to Micro')
  consola.info('Welcome to Micro')

  res.end('Welcome to Micro')
}
