
export default class extends Pantarei.Component {

  open () {
    this.refs.dialog.open()
  }

  close () {
    this.refs.dialog.close()
  }

  on_click_close (event) {
    this.close()
  }

  async on_click_create (event) {
    let model = this.data.model
    let values = this.refs.form.values
    await this.action('create_model_field', values)
    this.close()
  }

}
