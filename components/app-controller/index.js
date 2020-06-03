
export default class extends Pantarei.Controller {

  async api (action, params) {
    let config = {}

    if (params) {
      config.method = 'POST'
      config.body = JSON.stringify(params)
    } else {
      config.method = 'GET'
    }

    config.headers = {}
    config.headers['Accept'] = 'application/json'
    config.headers['Content-Type'] = 'application/json'

    let token = localStorage.getItem('desidera.token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    try {
      let response = await fetch(`/api/${action}`, config)
      let data = await response.json()
      return { value: data.value }
    } catch (error) {
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
    return response.value
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
    return response.value
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

  async get_model_field ({ model_id, field_id }) {}

  async create_model_field ({ model_id, field }) {
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



  async get_entries ({ model_id }) {}

  async get_entry ({ entry_id }) {}

  async create_entry ({ model_id, entry }) {}

  async update_entry ({ entry_id, entry }) {}

  async delete_entry ({ entry_id }) {}

}
