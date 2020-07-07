import api from './api.js'

export default async function ({ model_name, entry }) {

  let [err, res] = await api('add_entry', { model_name, entry })

  if (err) {
    console.warn(err)
    return [err]
  }

  return [null, res]
}
