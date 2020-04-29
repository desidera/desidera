
export default class Part extends Pantarei.Component {

  static get props () {
    return {
      type_name: { value: '' }
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

  render () {
    this.update()
  }

  update () {
    if (this._updated) {
      return
    }
    let type = this.type_name
    if (type) {
      let field_name = 'part-field-' + type
      let field = document.createElement(field_name)
      this.shadowRoot.appendChild(field)
      this._updated = true
    }
  }

}
