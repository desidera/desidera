
export default class extends Pantarei.Controller {

  async api (action, params) {
    let config = {}

    config.method = 'GET'
    config.headers = {}
    config.headers['Accept'] = 'application/json'
    config.headers['Content-Type'] = 'application/json'

    let token = localStorage.getItem('desidera.token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    try {
      let url = new URL(`${location.origin}/api/${action}`)
      if (params) {
        for (let key in params) {
          let value = params[key]
          let value_string = JSON.stringify(value)
          url.searchParams.append(key, value_string)
        }
      }
      let response = await fetch(url, config)
      let data = await response.json()
      return { value: data.value }
    } catch (error) {
      console.log(error)
      return { error }
    }
  }



  async get_models (params) {
    let response = await this.api('get_models', {
      collection: 'models'
    })
    if (response.error) {
      console.warn(response.error)
      return
    }
    let models = response.value

    for (let model of models) {
      model.link = `#/models/${model._id}`
    }

    return models
  }

  async get_model ({ model_id }) {
    let response = await this.api('get_model', {
      collection: 'models',
      model: { _id: model_id }
    })
    if (response.error) {
      console.warn(response.error)
      return
    }

    let model = response.value
    model.link = `#/models/${model._id}`
    let fields = model.fields || []
    for (let field of fields) {
      field.link = model.link + `/fields/${field._id}`
    }
    return model
  }

  async create_model (model) {
    let response = await this.api('put_model', {
      collection: 'models',
      model: model
    })
    if (response.error) {
      console.warn(response.error)
      return
    }
    return response.value
  }

  async update_model ({ model_id, model }) {}

  async delete_model ({ model_id }) {}



  async get_model_fields ({ model_id }) {}

  async get_model_field ({ model_id, field_id }) {
    let model = await this.get_model({ model_id })
    let fields = model.fields || []
    let field = fields.find(field => field.name === field_id)
    return field
  }

  async create_model_field ({ model_id, field }) {
    if (!field.name) {
      let error = new Error('missing field name')
      console.warn(error)
      return { ok: false, error: error.message }
    }
    field._id = field.name

    let response = await this.api('put_model_field', {
      collection_name: 'models',
      model_id: model_id,
      field_name: 'fields',
      field: field
    })
    return response.value
  }

  async update_model_field ({ model_id, field_id, field }) {}

  async delete_model_field ({ model_id, field_id }) {}



  async get_field_schema (field_type) {
    return [
      {
        "type": "boolean",
        "name": "option1",
        "description": "This is the option 1"
      },
      {
        "type": "boolean",
        "name": "option2",
        "description": "This is the option 2"
      },
      {
        "type": "boolean",
        "name": "option3",
        "description": "This is the option 3"
      }
    ]
  }



  async get_entries ({ model_id }) {}

  async get_entry ({ entry_id }) {}

  async create_entry ({ model_id, entry }) {}

  async update_entry ({ entry_id, entry }) {}

  async delete_entry ({ entry_id }) {}

}
