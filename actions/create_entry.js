import api from './api.js'
import get_model from './get_model.js'

export default async function ({ model_id, entry }) {
  let model = await get_model({ model_id })

  let response = await api('put_model', {
    collection: model.name,
    model: entry
  })

  return response
}
