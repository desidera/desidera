import api from './api.js'

export default async function ({ model_name }) {

  let [err, entries] = await api('get_entries', { model_name })
  if (err) {
    console.warn(err)
    return
  }

  return entries
}
