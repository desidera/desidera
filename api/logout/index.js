let api = require('../_api/index.js')
let parse_token = require('../_parse_token/index.js')
let logout = require('../_logout/index.js')

module.exports = api(async function (request) {
  let token = await parse_token(request)
  let result = await logout(token)
  return result
})