let api = require('../_api/index.js')
let parse_body = require('../_parse_body/index.js')
let login = require('../_login/index.js')

module.exports = api(async function (request) {
  let credentials = request.body
  let token = await login(credentials)
  return { token }
})
