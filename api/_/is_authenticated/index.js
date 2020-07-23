let decode_token = require('../decode_token/index.js')
let find_item = require('../find_item/index.js')

module.exports = async function (token) {
  let decoded = await decode_token(token)
  if (!decoded) {
    return false
  }

  let session = await find_item('tokens', { token })
  if (!session) {
    return false
  }

  return true
}