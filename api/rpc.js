
let add_entry = require('./_/add_entry/index.js')
let del_entry = require('./_/del_entry/index.js')
let get_entries = require('./_/get_entries/index.js')
let get_entry = require('./_/get_entry/index.js')
let set_entry = require('./_/set_entry/index.js')

let add_field = require('./_/add_field/index.js')
let del_field = require('./_/del_field/index.js')
let get_fields = require('./_/get_fields/index.js')
let get_field = require('./_/get_field/index.js')
let set_field = require('./_/set_field/index.js')

let add_model = require('./_/add_model/index.js')
let del_model = require('./_/del_model/index.js')
let get_models = require('./_/get_models/index.js')
let get_model = require('./_/get_model/index.js')
let set_model = require('./_/set_model/index.js')

let signup = require('./_/signup/index.js')
let login = require('./_/login/index.js')
let is_authenticated = require('./_/is_authenticated/index.js')
let logout = require('./_/logout/index.js')

let handlers = {
  add_entry,
  del_entry,
  get_entries,
  get_entry,
  set_entry,

  add_field,
  del_field,
  get_fields,
  get_field,
  set_field,

  add_model,
  del_model,
  get_models,
  get_model,
  set_model,

  signup,
  login,
  is_authenticated,
  logout
}

module.exports = async function (request, response) {
  let body = request.body

  let action = body.action
  let params = body.params

  let handler = handlers[action]

  let [error, data] = await handler(params)

  response.status(200).json({ error, data })
}
