import api from './api.js'

export default  async function (params) {
  let [err, models] = await api('get_models', {})
  if (err) {
    console.warn(err)
    return
  }

  for (let model of models) {
    let model_name = model.name
    let params = `model_name=${model_name}`
    model.view_link = `#/editor/list-entry?${params}`
  }

  return models
}
