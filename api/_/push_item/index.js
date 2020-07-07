let open_collection = require('../_open_collection/index.js')

module.exports = async function (collection_name, model_id, field_name, field) {
  let [error, collection] = await open_collection(collection_name)
  if (error) {
    console.warn(error)
    return
  }

  let _id = collection.create_id(model_id)
  let query = { $push: { [field_name]: field } }
  let doc = await collection.update({ _id }, query)

  return doc
}