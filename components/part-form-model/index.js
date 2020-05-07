
export default class extends Pantarei.Component {

  get values () {
    return this.refs.form.values
  }

  ready () {
    this.data.schema = {
      "fields": [
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
  }

}
