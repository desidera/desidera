import api from './api.js'

export default async function ({ model_id, field_id }) {

  let [err, field] = await api('get_field', { model_id, field_id })
  if (err) {
    console.warn(err)
    return
  }

  return field
}
