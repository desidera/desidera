let open_collection = require('../_open_collection/index.js')
let solve_relations = require('../_solve_relations/index.js')

module.exports = async function (collection_name, query) {
  query = query || {}
  let [error, collection] = await open_collection(collection_name)
  if (error) {
    return [error, null]
  }

  let cursor = await collection.find(query)

  if (query.order_by) {
    cursor.sort(query.order_by)
  }

  if (query.page && query.per_page) {
    let skip = query.per_page * (query.page - 1)
    cursor.skip(skip)
    cursor.limit(query.per_page)
  }

  let items = await cursor.toArray()

  return [null, items]
}
