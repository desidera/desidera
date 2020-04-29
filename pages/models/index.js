
export default class extends Pantarei.Component {

  async connected () {
    this.data.models = await this.action('get_models')
  }

  on_click_button_add (event) {
    this.refs.dialog.open()
  }

  on_click_button_create (event) {
    let model = this.refs.form.data
    this.action('create_model', model)
    this.refs.dialog.close()
  }

  on_click_button_undo (event) {
    this.refs.dialog.close()
  }

  on_click_item_model (event) {
    let model = event.detail
    this.action('open_model', model)
  }

}