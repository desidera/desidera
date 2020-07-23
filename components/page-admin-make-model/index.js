
export default class extends Pantarei.Component {

  async on_click_create (event) {
    let values = this.refs.form.values
    this.action('create_model', values)
  }

}
