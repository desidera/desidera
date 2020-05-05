let open_database = require('../_open_database/index.js')

let cache = {}

module.exports = async function (collection_name) {
  let collection = cache[collection_name]
  if (collection) {
    return collection
  }

  let database = await open_database()

  let create_id = database.create_id

  collection = await database.collection(collection_name)

  collection.create_id = create_id

  cache[collection_name] = collection

  return collection
}