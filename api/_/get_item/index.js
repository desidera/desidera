let open_collection = require('../open_collection/index.js')
let create_id = require('../create_id/index.js')

module.exports = async function (collection_name, id) {
  let [error, collection] = await open_collection(collection_name)
  if (error) {
    return [error, null]
  }

  let item_id = create_id(id)
  let item
  try {
    item = await collection.findOne({ _id: item_id })
  } catch (error) {
    return [error, null]
  }
  if (!item) {
    return [null, null]
  }

  item._id = item._id.toString()

  return [null, item]
}