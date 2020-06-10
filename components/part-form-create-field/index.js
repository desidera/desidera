
export default class extends Pantarei.Component {

  get values () {
    return this.parts.form.values
  }

  async ready () {
    this.data.fields = [
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
