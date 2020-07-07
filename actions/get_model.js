import api from './api.js'

export default async function ({ model_id }) {
  let [err, model] = await api('get_model', { model_id })
  if (err) {
    console.warn(err)
    return
  }

  return model
}
