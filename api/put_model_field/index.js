let api = require('../_api/index.js')
let parse_body = require('../_parse_body/index.js')
let push_item = require('../_push_item/index.js')

module.exports = api(async function (request) {
  let body = await parse_body(request)

  let collection_name = body.collection_name
  let model_id = body.model_id
  let field_name = body.field_name
  let field = body.field

  let item = await push_item(collection_name, model_id, field_name, field)

  return item
})