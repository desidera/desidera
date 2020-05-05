let open_collection = require('../_open_collection/index.js')
let solve_relations = require('../_solve_relations/index.js')

module.exports = async function (collection_name, query) {
  query = query || {}
  let collection = await open_collection(collection_name)
  let cursor = collection.find(query)

  if (query.order_by) {
    cursor.sort(query.order_by)
  }

  if (query.page && query.per_page) {
    let skip = query.per_page * (query.page - 1)
    cursor.skip(skip)
    cursor.limit(query.per_page)
  }

  let items = []

  if (query.include) {
    while (cursor.hasNext()) {
      let item = cursor.next()
      item = await solve_relations(collection_name, item, include)
      items.push(item)
    }
  }

  return items
}
