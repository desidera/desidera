
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
          "id": "type",
          "name": "type",
          "type": "enum",
          "options": [
            "text",
            "number",
            "date",
            "location",
            "boolean"
          ]
        }
      ]
    }
  }

}
