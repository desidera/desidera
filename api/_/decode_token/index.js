let jwt = require('jsonwebtoken')
let config = require('../config/index.js')

module.exports = function (token) {
  return new Promise(function (resolve) {
    jwt.verify(token, config.secret, function (error, decoded) {
      if (error) {
        resolve([error, null])
        return
      }
      resolve([null, decoded])
    })
  })
}