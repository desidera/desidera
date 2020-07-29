let delete_item = require('../delete_item/index.js')

module.exports = async function (params) {
  let token = params.token

  let result = await delete_item('tokens', { token })

  return result
}