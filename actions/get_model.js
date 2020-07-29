import api from './api.js'

export default async function ({ model_id }) {
  let [err, model] = await api('get_model', { model_id })
  if (err) {
    console.warn(err)
    return
  }

  model.edit_link = `#/admin/edit-model?model_id=${model_id}`

  return model
}
