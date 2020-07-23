
export default class extends Pantarei.Component {

  get values () {
    return this.refs.form.values
  }

  async ready () {
    this.data.fields = [
      {
        "id": "name",
        "name": "name",
        "type": "string"
      },
      {
        "id": "description",
        "name": "description",
        "type": "string"
      }
    ]
  }

  async rendered () {
    if (this.data && this.data.values && this._values !== this.data.values) {

    }
  }

}
