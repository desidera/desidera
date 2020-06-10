let open_collection = require('../_open_collection/index.js')

module.exports = async function (collection_name, item) {
  let [error, collection] = await open_collection(collection_name)
  if (error) {
    return [error]
  }
  await collection.deleteOne(item)
  return [null]
}