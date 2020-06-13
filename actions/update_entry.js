import api from './api.js'
import get_model from './get_model.js'

export default async function ({ model_id, entry_id, entry }) {
  let model = await get_model({ model_id })
  let collection_name = model.name

  entry._id = entry_id

  let response = await api('set_model', {
    collection: collection_name,
    model: entry
  })
  if (response.error) {
    console.warn(response.error)
    return
  }
  return response.value
}
