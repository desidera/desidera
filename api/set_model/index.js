let api = require('../_api/index.js')
let parse_body = require('../_parse_body/index.js')
let update_item = require('../_update_item/index.js')

module.exports = api(async function (request) {
  let body = await parse_body(request)
  let collection_name = body.collection
  let model = body.model

  let [error, item] = await update_item(collection_name, model)
  if (error) {
    return [error, null]
  }

  return [null, item]
})