let find_item = require('../_find_item/index.js')
let create_token = require('../_create_token/index.js')
let save_item = require('../_save_item/index.js')

module.exports = async function (credentials) {
  let email = credentials.email
  if (!email) {
    throw new Error('email is undefined')
  }

  let password = credentials.password
  if (!password) {
    throw new Error('password is undefined')
  }

  let user = await find_item('users', { email })
  if (password !== user.password) {
    throw new Error('Authentication failed!')
  }

  let token = await create_token(email)
  await save_item('tokens', { token })

  return token
}