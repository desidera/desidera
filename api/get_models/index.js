let api = require('../_api/index.js')
let parse_body = require('../_parse_body/index.js')
let find_items = require('../_find_items/index.js')

module.exports = api(async function (request) {
  let body = await parse_body(request)
  let collection_name = body.collection
  let query = body.query || {}

  let item = await find_items(collection_name, query)

  return item
})