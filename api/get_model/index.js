let api = require('../_/api/index.js')
let get_item = require('../_/get_item/index.js')

module.exports = api(async function (request) {
  let collection_name = 'models'
  let { model_id } = request.query

  let [error, items] = await get_item(collection_name, model_id)
  if (error) {
    return [error, null]
  }

  return [null, items]
})
