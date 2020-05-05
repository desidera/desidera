let delete_item = require('../delete_item/index.js')

module.exports = async function (token) {
  let result = await delete_item('tokens', { token })

  return result
}