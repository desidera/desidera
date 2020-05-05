let api = require('../_api/index.js')
let parse_body = require('../_parse_body/index.js')
let find_item = require('../_find_item/index.js')

module.exports = api(async function (request) {
  let body = await parse_body(request)
  let collection = body.collection
  let query = body.query

  let item = await find_item(collection, query)

  return item
})