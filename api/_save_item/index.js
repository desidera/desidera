let open_collection = require('../_open_collection/index.js')

module.exports = async function (collection_name, item) {
  let [error, collection] = await open_collection(collection_name)
  if (error) {
    return [error, null]
  }

  let response
  try {
    response = await collection.insertOne(item)
  } catch (error) {
   console.warn(error)
   return [error, null]
  }

  return [null, response]
}