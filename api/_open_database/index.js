let MongoDB = require('mongodb')

let config = require('../_config/index.js')

let Client = MongoDB.MongoClient

let create_id = MongoDB.ObjectId

let cache = null

module.exports = async function () {
  if (cache) {
    return cache
  }

  let client = await Client.connect(config.database.uri, config.database.params)

  let database = await client.db(config.database.name)

  database.create_id = create_id

  cache = database

  return database
}