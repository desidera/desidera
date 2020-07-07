let get_schema = require('../_get_schema/index.js')

async function solve_relation (item, relation) {
  if (!relation) {
    return item
  }

  let relation_type = relation.type
  let foreign_key = relation.foreign_key
  let foreign_collection = relation.collection

  if (type === 'belongs_to') {
    let id = item[foreign_key]
    let related_doc = await find_item(foreign_collection, id)
    item[foreign_key] = related_doc
    return item
  }

  if (type === 'has_many') {
    let where = { [foreign_key]: item.id }
    let related_items = await find_items({ where })
    item[foreign_key] = related_items
    return item
  }

  if (type === 'has_one') {
    return item
  }

  if (type === 'has_and_belongs_to_many') {
    return item
  }

  if (type === 'has_many_through') {
    return item
  }
}

module.exports = async function solve_relations (model, schema) {
  let includes = []

  let schema_fields = schema.fields

  for (let relation_name of relation_names) {
    let relation_schema = schema.fields[relation_name]
    let relation = await solve_relation(item, relation)
    includes.push(relation)
  }

  return includes
}
