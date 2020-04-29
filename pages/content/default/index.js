
export default class Page extends Pantarei.Component {

  static get props () {
    return {
      fields: { type: Array },
      data: { type: Object }
    }
  }

  static get components () {
    return [
      'part-field-date',
      'part-field-number',
      'part-field-string',
      'part-field-text'
    ]
  }

  async connected () {
    let model_id = this.route.params.model_name
    let model = await this.action('get_model', model_id)

    let entry_id = this.route.params.entry_id
    let entry = await this.action('get_entry', entry_id)
    this.entry = entry

    let fields = []
    let model_fields = model.fields
    for (let model_field of model_fields) {
      let field = Object.assign({}, model_field)
      let field_name = field.name
      let value = entry[field_name]
      field.value = value
      fields.push(field)
    }

    for (let field of fields) {
      let type = field.type
      let field_name = 'part-field-' + type
      let field_element = document.createElement(field_name)
      field_element.data = field
      this.refs.fields.appendChild(field_element)
    }

  }

  on_change_field (event) {
    let entry = this.entry
    let detail = event.detail
    let field = detail.field
    let value = detail.value

    let entry_id = entry._id
    let field_name = field.name
    this.action('update_field', { entry_id, field_name, value })
  }

}