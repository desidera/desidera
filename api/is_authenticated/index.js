let api = require('../_api/index.js')
let parse_token = require('../_parse_token/index.js')
let is_authenticated = require('../_is_authenticated/index.js')

module.exports = api(async function (request) {
  let token = await parse_token(request)
  if (!token) {
    return false
  }

  let result = await is_authenticated(token)

  return result
})
