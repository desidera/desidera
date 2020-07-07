let api = require('../_/api/index.js')
let get_item = require('../_/get_item/index.js')

module.exports = api(async function (request) {
  let body = request.body
  let collection_name = body.collection
  let model = body.model
  let model_id = model._id
  let query = body.query

  let [error, item] = await get_item(collection_name, model_id, query)
  if (error) {
    return [error]
  }

  return [null, item]
})