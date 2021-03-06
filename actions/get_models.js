import api from './api.js'

export default  async function (params) {
  let [err, models] = await api('get_models', {})
  if (err) {
    console.warn(err)
    return
  }

  for (let model of models) {
    let model_id = model._id
    let params = `model_id=${model_id}`
    model.view_link = `#/admin/view-model?${params}`
    model.edit_link = `#/admin/edit-model?${params}`
  }

  return models
}

