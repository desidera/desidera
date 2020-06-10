let decode_token = require('../_decode_token/index.js')
let item = require('../find_item/index.js')

module.exports = async function (token) {
  let [error, decoded] = await decode_token(token)
  if (error) {
    return [error, null]
  }
  if (!decoded) {
    return [null, null]
  }

  let email = decoded.email
  let [error, user] = await find_item('users', { email })
  if (error) {
    return [error]
  }
  if (!user) {
    return null
  }

  delete user.password

  return [null, user]
}