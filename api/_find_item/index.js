let open_collection = require('../_open_collection/index.js')
let solve_relations = require('../_solve_relations/index.js')

module.exports = async function (collection_name, id, query) {
  let [error, collection] = await open_collection(collection_name)
  if (error) {
    console.warn(error)
    return
  }

  let _id = collection.create_id(id)
  let doc = await collection.findOne({ _id })

  if (!doc) {
    return
  }

  if (query && query.includes) {
    doc = await solve_relations(collection_name, doc, includes)
  }

  doc._id = doc._id.toString()

  return doc
}