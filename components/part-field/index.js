
export default class Part extends Pantarei.Component {

  static get components () {
    return [
      'part-field-date',
      'part-field-number',
      'part-field-string',
      'part-field-text'
    ]
  }

  static field_name (type) {
    return 'part-field-' + type
  }

  render () {
    this.update()
  }

  update () {
    if (this._updated) {
      return
    }

    let type = this.type
    if (!type) {
      return
    }

    let field_name = this.constructor.field_name(type)
    let field = document.createElement(field_name)
    this.appendChild(field)
    this._updated = true
  }

}
