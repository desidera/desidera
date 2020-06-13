import api from './api.js'

export default async function ({ model_id }) {
  let response = await api('get_model', {
    collection: 'models',
    model: { _id: model_id }
  })
  if (response.error) {
    console.warn(response.error)
    return
  }

  let model = response.value
  model.link = location.hash + '/models/' + model._id
  let fields = model.fields || []
  for (let field of fields) {
    field.link = model.link + '/fields/' + field._id + '/edit'
  }
  return model
}
