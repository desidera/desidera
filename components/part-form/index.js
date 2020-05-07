
export default class Part extends Pantarei.Component {

  static get components () {
    return [
      'part-field-date',
      'part-field-number',
      'part-field-string',
      'part-field-text',
      'part-field-enum'
    ]
  }

  constructor () {
    super()
    this.components = {}
  }

  get values () {
    let values = {}
    let components = this.components
    for (let field_id in components) {
      let component = components[field_id]
      values[field_id] = component.value
    }
    return values
  }

  render () {
    this._build()
  }

  _build () {
    if (this._built) {
      return
    }

    if (!this.data.fields) {
      return
    }

    this._build_fields(this.data.fields)

    this._built = true
  }

  _build_fields (fields) {
    for (let field of fields) {
      this._build_field(field)
    }
  }

  _build_field (field) {
    let type = field.type || 'string'
    let component_name = `part-field-${type}`
    let component = document.createElement(component_name)
    component.classList.add('field')
    component.data = component.data || {}
    component.data.id = field.id
    component.data.label = field.label || field.name
    component.data.schema = field
    this.appendChild(component)
    this.components[field.id] = component
  }

}
