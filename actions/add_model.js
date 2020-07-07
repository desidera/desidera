import api from './api.js'

export default async function ({ model }) {

  let [res, err] = await api('add_model', { model })

  if (err) {
    console.warn(err)
    return [err]
  }

  return [null, res]
}
