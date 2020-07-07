let api = require('../_/api/index.js')
let set_item = require('../_/set_item/index.js')

module.exports = api(async function (request) {
  let body = request.body
  let collection_name = body.collection_name
  let model = body.model

  let [error, item] = await set_item(collection_name, model)
  if (error) {
    return [error, null]
  }

  return [null, item]
})