let MongoDB = require('mongodb')

let config = require('../config/index.js')

let Client = MongoDB.MongoClient

let cache = null

module.exports = async function () {
  if (cache) {
    console.log(`get database from cache`)
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
  } catch (error) {
    console.warn(error)
    return [error, null]
  }

  cache = database
  return [null, database]
}