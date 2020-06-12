import get_model from './get_model.js'

export default async function ({ model_id, field_id }) {
  let model = await get_model({ model_id })
  let fields = model.fields || []
  let field = fields.find(field => field.name === field_id)
  return field
}
