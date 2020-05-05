let api = require('../_api/index.js')
let parse_token = require('../_parse_token/index.js')
let get_authenticated = require('../_get_authenticated/index.js')

module.exports = api(async function (request) {
  let token = await parse_token(request)
  if (!token) {
    return null
  }

  let user = await get_authenticated(token)

  return user
})
