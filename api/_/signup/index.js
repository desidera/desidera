let find_item = require('../find_item/index.js')
let save_item = require('../save_item/index.js')

module.exports = async function (credentials) {
  let email = credentials.email
  if (!email) {
    let error = new Error('email is undefined')
    return [error, null]
  }

  let password = credentials.password
  if (!password) {
    let error = new Error('password is undefined')
    return [error, null]
  }

  let existed_user = await find_item('users', { email })
  if (existed_user) {
    let error = new Error('email is already used')
    return [error, null]
  }

  let [error, new_user] = await save_item('users', { email, password })
  if (error) {
    return [error, null]
  }

  return new_user
}