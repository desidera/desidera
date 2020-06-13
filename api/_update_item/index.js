let open_collection = require('../_open_collection/index.js')

module.exports = async function (collection_name, item) {
  let [error, collection] = await open_collection(collection_name)
  if (error) {
    return [error, null]
  }

  try {
    let _id = collection.create_id(item._id)
    delete item._id
    let response = await collection.updateOne({ _id }, { $set: item })
    return [null, response]
  }
  catch (error) {
   console.warn(error)
   return [error, null]
  }
}