
export default class extends Pantarei.Component {

  async update () {
    if (this._updated) {
      return
    }
    let model = this.data.model
    let entry = this.data.entry
    let form = this.parts.form

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
      form.appendChild(field_element)
    }

    this._updated = true
  }

}