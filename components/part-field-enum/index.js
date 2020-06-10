
export default class extends Pantarei.Component {

  get value () {
    return this.refs.input.value
  }

  rendered () {
    this._build()
  }

  _build () {
    if (this._built) {
      return
    }

    let schema = this.data.schema
    if (!schema) {
      return
    }

    let options = schema.options
    if (!Array.isArray(options)) {
      return
    }

    let input = this.parts.input
    for (let option of options) {
      let option_element = document.createElement('option')
      option_element.value = option
      option_element.innerText = option
      input.appendChild(option_element)
    }

    this._built = true
  }

}
