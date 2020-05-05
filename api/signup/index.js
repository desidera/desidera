let api = require('../_api/index.js')
let parse_body = require('../_parse_body/index.js')
let signup = require('../_signup/index.js')

module.exports = api(async function (request) {
  let body = await parse_body(request)
  let email = body.email
  let password = body.password
  let credentials = { email, password }

  let user = await signup(credentials)

  return user
})