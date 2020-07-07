import api from './api.js'

export default async function ({ model_name, entry_id, entry }) {

  let [err, res] = await api('set_entry', { model_name, entry_id, entry })
  if (err) {
    console.warn(err)
    return [err]
  }

  return [null, res]
}
