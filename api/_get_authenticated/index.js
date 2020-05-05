let decode_token = require('../_decode_token/index.js')
let item = require('../find_item/index.js')

module.exports = async function (token) {
  let decoded = await decode_token(token)
  if (!decoded) {
    return null
  }

  let email = decoded.email
  let user = await find_item('users', { email })
  if (!user) {
    return null
  }

  delete user.password

  return user
}