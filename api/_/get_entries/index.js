let get_items = require('../get_items/index.js')

module.exports = async function (params) {
  let collection_name = params.collection_name

  let [error, items] = await get_items(collection_name)
  if (error) {
    return [error, null]
  }

  let result = [null, items]
  return result
}