import api from './api.js'

export default async function ({ model_id, values }) {

  let [err, res] = await api('set_model', { model_id, values })
  if (err) {
    console.warn(err)
    return [err]
  }

  return [null, res]
}
