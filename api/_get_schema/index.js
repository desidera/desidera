let open_collection = require('../_open_collection/index.js')

module.exports = async function (collection_name) {
  let [error, collection] = await open_collection('schemas')
  if (error) {
    return [error, null]
  }

  let _id = collection.create_id(collection_name)
  let schema = await collection.findOne({ _id })

  return [null, schema]
}