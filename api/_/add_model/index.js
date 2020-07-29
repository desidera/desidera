let create_item = require('../create_item/index.js')

module.exports = async function (params) {
  let model_name = 'models'
  let entry = params.entry

  let [error, item] = await create_item(model_name, model)
  if (error) {
    return [error, null]
  }

  return [null, item]
}