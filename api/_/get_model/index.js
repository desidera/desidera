let get_item = require('../get_item/index.js')

module.exports = async function (params) {
  let collection_name = 'models'
  let model_id = params.model_id

  let [error, items] = await get_item(collection_name, model_id)
  if (error) {
    return [error, null]
  }

  return [null, items]
}