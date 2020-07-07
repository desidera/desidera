let api = require('../_/api/index.js')
let parse_token = require('../_/parse_token/index.js')
let logout = require('../_/logout/index.js')

module.exports = api(async function (request) {
  let token = await parse_token(request)
  let result = await logout(token)
  return result
})