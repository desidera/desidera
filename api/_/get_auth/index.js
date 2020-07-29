let parse_token = require('../parse_token/index.js')
let get_authenticated = require('../get_authenticated/index.js')

module.exports = async function (params) {
  let token = await parse_token(params)
  if (!token) {
    return null
  }

  let user = await get_authenticated(token)

  return user
}