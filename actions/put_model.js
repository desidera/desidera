import api from './api.js'

export default async function (model) {
  let response = await api('put_model', {
    collection: 'models',
    model: model
  })
  if (response.error) {
    console.warn(response.error)
    return
  }
  return response.value
}
