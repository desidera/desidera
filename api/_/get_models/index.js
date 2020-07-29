let get_items = require('../get_items/index.js')

module.exports = async function (params) {
  let collection_name = 'models'
  let query = params.query || {}

  let [error, items] = await get_items(collection_name, query)
  if (error) {
    return [error, null]
  }

  return [null, items]
}