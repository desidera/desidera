import api from './api.js'

export default async function ({ model_id, field }) {
  if (!field.name) {
    let error = new Error('missing field name')
    console.warn(error)
    return { ok: false, error: error.message }
  }
  field._id = field.name

  let response = await api('put_model_field', {
    collection_name: 'models',
    model_id: model_id,
    field_name: 'fields',
    field: field
  })
  return response.value
}
