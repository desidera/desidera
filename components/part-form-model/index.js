
export default class extends Pantarei.Component {

  ready () {
    this.data.schema = [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "description"
      }
    ]
  }

}
