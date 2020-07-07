let api = require('../_/api/index.js')
let signup = require('../_/signup/index.js')

module.exports = api(async function (request) {
  let body = request.body
  let email = body.email
  let password = body.password
  let credentials = { email, password }

  let user = await signup(credentials)

  return user
})