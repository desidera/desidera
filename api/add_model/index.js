let api = require('../_/api/index.js')
let create_item = require('../_/create_item/index.js')

module.exports = api(async function (request) {
  let body = request.body
  let model_name = 'models'
  let entry = body.entry

  let [error, item] = await create_item(model_name, model)
  if (error) {
    return [error, null]
  }

  return [null, item]
})
