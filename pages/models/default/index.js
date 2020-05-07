
export default class Page extends Pantarei.Component {

  async connected () {
    let model_id = this.context.params[0]
    this.data.model = await this.action('get_model', model_id)
  }

  on_click_edit_model (event) {
    this.refs.dialog_edit_model.open()
  }

  on_click_create_field (event) {
    this.refs.dialog_create_field.open()
  }

  on_click_edit_field (event) {
    let field = event.detail
    this.refs.form_edit_field.type = { [field.type]: true }
    this.refs.form_edit_field.data = field
    this.refs.dialog_edit_field.open()
  }

}
