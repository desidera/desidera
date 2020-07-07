let api = require('../_/api/index.js')
let get_items = require('../_/get_items/index.js')

module.exports = api(async function (request) {
  let body = request.body
  let collection_name = body.collection_name
  let query = body.query || {}

  let [error, items] = await get_items(collection_name, query)
  if (error) {
    return [error, null]
  }

  let result = [null, items]
  return result
})