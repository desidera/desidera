let env = process.env

let config = {}

config.secret = "this-is-a-secret"

let username = env.mongodb_username
let password = env.mongodb_password
let cluster_name = env.mongodb_cluster_name
let database_name = env.mongodb_database_name
let protocol = `mongodb+srv://`
let access = `${username}:${password}`
let location = `@${cluster_name}.mongodb.net`
let params = `?retryWrites=true&w=majority`
let database_uri = protocol + access + location + params

config.database = {}
config.database.name = database_name
config.database.uri = database_uri
config.database.params = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

module.exports = config