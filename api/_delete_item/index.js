let open_collection = require('../_open_collection/index.js')

module.exports = async function (collection_name, item) {
  let collection = await open_collection(collection_name)
  await collection.deleteOne(item)
  return true
}