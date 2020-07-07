let api = require('../_/api/index.js')
let login = require('../_/login/index.js')

module.exports = api(async function (request) {
  let body = request.body
  let email = body.email
  let password = body.password
  let credentials = { email, password }

  let token = await login(credentials)

  return { token }
})