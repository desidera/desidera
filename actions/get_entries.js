import api from './api.js'

export default async function ({ collection_name }) {

  let [err, entries] = await api('get_entries', { collection_name })
  if (err) {
    console.warn(err)
    return
  }

  return entries
}
