
export default class Part extends Pantarei.Component {

  static get components () {
    return [
      'part-field-boolean',
      'part-field-date',
      'part-field-enum',
      'part-field-number',
      'part-field-string',
      'part-field-text'
    ]
  }

  get values () {
    let values = {}
    let fields = this.fields
    for (let field_id in fields) {
      let field = fields[field_id]
      values[field_id] = field.value
    }
    return values
  }

  async rendered () {
    if (this.data && this.fields && this.data.fields !== this._fields) {
      this._destroy()
    }
    this._build()
  }

  _destroy () {
    for (let field of this.fields) {
      field.remove()
    }
    this._built = false
  }

  _build () {
    if (this._built) {
      return
    }

    if (!this.data.fields) {
      return
    }

    this.fields = {}
    this._build_fields(this.data.fields)

    this._fields = this.data.fields
    this._built = true
  }

  _build_fields (fields) {
    for (let field of fields) {
      this._build_field(field)
    }
  }

  _build_field (field) {
    let id = field.id || field._id || field.name
    let type = field.type || 'string'
    let name = field.name
    let label = field.label || field.name

    let component_name = `part-field-${type}`
    let component = document.createElement(component_name)
    component.classList.add('field')
    component.data = component.data || {}
    component.data.id = id
    component.data.label = label
    component.data.schema = field

    this.refs.fieldset.appendChild(component)
    this.fields[id] = component
  }

}
