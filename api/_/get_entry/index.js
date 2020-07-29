let get_item = require('../get_item/index.js')

module.exports = async function (params) {
  let collection_name = params.collection_name
  let model = params.model
  let query = body.query

  let model_id = model._id

  let [error, item] = await get_item(collection_name, model_id, query)
  if (error) {
    return [error]
  }

  return [null, item]
}