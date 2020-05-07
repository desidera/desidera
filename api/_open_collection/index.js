let open_database = require('../_open_database/index.js')

let cache = {}

module.exports = async function (collection_name) {
  let collection = cache[collection_name]
  if (collection) {
    return [null, collection]
  }

  let [error, database] = await open_database()
  if (error) {
    return [error, null]
  }

  try {
    collection = await database.collection(collection_name)
    collection.create_id = database.create_id
  } catch (error) {
    console.log({ collection_name })
    console.warn(error)
    return [error, null]
  }

  cache[collection_name] = collection

  return [null, collection]
}