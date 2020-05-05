let open_collection = require('../open_collection/index.js')

module.exports = async function (collection_name) {
  let collection = await open_collection('schemas')

  let _id = collection.create_id(collection_name)
  let schema = await collection.findOne({ _id })

  return schema
}