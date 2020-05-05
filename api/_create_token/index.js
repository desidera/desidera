let jwt = require('jsonwebtoken')
let config = require('../_config/index.js')

module.exports = async function (email) {

  let token = jwt.sign({ email }, config.secret, { expiresIn: '24h' })

  return token
}