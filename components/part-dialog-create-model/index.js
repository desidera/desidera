export default class extends Pantarei.Component {

  open () {
    this.refs.dialog.open()
  }

  close () {
    this.refs.dialog.close()
  }

  async on_click_button_create (event) {
    console.log('create')
    let values = this.refs.form.values
    await this.action('create_model', values)
  }

  on_click_button_back (event) {
    console.log('back')
    this.close()
  }

}