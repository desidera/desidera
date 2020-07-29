let find_item = require('../get_item/index.js')
let create_token = require('../create_token/index.js')
let save_item = require('../set_item/index.js')

module.exports = async function (credentials) {
  let error

  let email = credentials.email
  if (!email) {
    error = new Error('email is undefined')
    return [error]
  }

  let password = credentials.password
  if (!password) {
    error = new Error('password is undefined')
    return [error]
  }

  let user = await find_item('users', { email })
  if (password !== user.password) {
    error = new Error('Authentication failed!')
    return [error]
  }

  let token
  [error, token] = await create_token(email)
  if (error) {
    return [error]
  }

  let response
  [error, response] = await save_item('tokens', { token })
  if (error) {
    return [error]
  }

  return [null, token]
}