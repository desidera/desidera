import api from './api.js'

export default async function (params) {
  let method = ''

  let [err, res] = await api(method, params)
  if (err) {
    console.warn(err)
    return [err]
  }

  return [null, res]
}
