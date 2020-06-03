
export default class extends Pantarei.Component {

  async on_click_create (event) {
    let values = this.parts.form.values
    this.action('create_model', values)
  }

}
