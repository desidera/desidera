let api = require('../_api/index.js')
let parse_body = require('../_parse_body/index.js')
let find_items = require('../_find_items/index.js')

module.exports = api(async function (request) {
  let body = await parse_body(request)
  let collection_name = body.collection
  let query = body.query || {}

  let [error, items] = await find_items(collection_name, query)
  if (error) {
    return [error, null]
  }

  let result = [null, items]
  return result
})