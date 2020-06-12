import api from './api.js'

export default  async function (params) {
  let response = await api('get_models', {
    collection: 'models'
  })
  if (response.error) {
    console.warn(response.error)
    return
  }
  let models = response.value

  for (let model of models) {
    model.link = location.hash + '/models/' + model._id
  }

  return models
}
