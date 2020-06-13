import api from './api.js'
import get_model from './get_model.js'

export default async function ({ model_id, entry_id }) {
  let model = await get_model({ model_id })

  let response = await api('get_model', {
    collection: model.name,
    model: { _id: entry_id }
  })
  if (response.error) {
    console.warn(response.error)
    return
  }

  let entry = response.value

  for (let field of model.fields) {
    field.value = entry[field.name]
  }

  return model
}
