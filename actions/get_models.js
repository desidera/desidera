import api from './api.js'

export default  async function (params) {
  let [err, models] = await api('get_models', {})
  if (err) {
    console.warn(err)
    return
  }

  return models
}
