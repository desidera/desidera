let MongoDB = require('mongodb')

let config = require('../_config/index.js')

let Client = MongoDB.MongoClient

let create_id = MongoDB.ObjectId

let cache = null

module.exports = async function () {
  if (cache) {
    return [null, cache]
  }

  let client
  try {
    client = await Client.connect(config.database.uri, config.database.params)
  } catch (error) {
    console.warn(error)
    return [error, null]
  }

  let database
  try {
    database = await client.db(config.database.name)
    database.create_id = create_id
  } catch (error) {
    console.warn(error)
    return [error, null]
  }

  cache = database
  return [null, database]
}