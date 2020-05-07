let api = require('../_api/index.js')
let parse_body = require('../_parse_body/index.js')
let save_item = require('../save_item/index.js')

module.exports = api(async function (request) {
  let body = await parse_body(request)
  let collection = body.collection
  let model = body.model

  let item = await save_item(collection, model)

  return item
})