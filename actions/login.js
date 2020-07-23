import api from './api.js'

export default async function (params) {
  let [err, res] = await api('login', params)
  if (err) {
    console.warn(err)
    return [err]
  }

  return [null, res]
}
