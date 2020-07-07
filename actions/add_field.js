import api from './api.js'

export default async function ({ model_id, field }) {
  if (!field.name) {
    let err = new Error('missing field name')
    console.warn(err)
    return [err]
  }

  let [err, res] = await api('add_field', {
    collection_name: 'models',
    model_id: model_id,
    field_name: 'fields',
    field: field
  })
  if (err) {
    console.warn(err)
    return [err]
  }

  return [null, res]
}
