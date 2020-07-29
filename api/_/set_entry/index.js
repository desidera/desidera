let set_item = require('../set_item/index.js')

module.exports = async function (params) {
  let collection_name = params.collection_name
  let model = params.model

  let [error, item] = await set_item(collection_name, model)
  if (error) {
    return [error, null]
  }

  return [null, item]
}