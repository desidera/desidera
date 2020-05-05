let find_item = require('../_find_item/index.js')
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

  let new_user = { email, password }

  let existed_user = await find_item('users', { email })
  if (existed_user) {
    throw new Error('email is already used')
  }

  let user = await save_item('users', new_user)

  return user
}