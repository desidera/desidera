let open_database = require('../open_database/index.js')

let cache = {}

module.exports = async function (collection_name) {
  let collection = cache[collection_name]
  if (collection) {
    console.log(`get collection "${collection_name}" from cache`)
    return [null, collection]
  }

  let [error, database] = await open_database()
  if (error) {
    return [error, null]
  }

  try {
    collection = await database.collection(collection_name)
  } catch (error) {
    return [error, null]
  }

  console.log(`put collection "${collection_name}" to cache`)
  cache[collection_name] = collection

  return [null, collection]
}