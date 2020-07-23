let api = require('../_/api/index.js')
let get_items = require('../_/get_items/index.js')

module.exports = api(async function (request) {
  let collection_name = request.query.model_name

  let [error, items] = await get_items(collection_name)
  if (error) {
    return [error, null]
  }

  let result = [null, items]
  return result
})