import api from './api.js'
import get_model from './get_model.js'

export default async function ({ model_id }) {
  let model = await get_model({ model_id })

  let response = await api('get_models', {
    collection: model.name
  })
  if (response.error) {
    console.warn(response.error)
    return
  }
  let models = response.value

  for (let model of models) {
    model.link = location.hash + '/entries/' + model._id
  }

  return models
}
