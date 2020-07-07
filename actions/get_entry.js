import api from './api.js'

export default async function ({ model_name, entry_id }) {

  let [err, entry] = await api('get_entry', { model_name, entry_id })
  if (err) {
    console.warn(err)
    return
  }

  return entry
}
