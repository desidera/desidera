
export default class Page extends Pantarei.Component {

  async connected () {
    let model_id = this.context.params.model_id
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

  on_update_model (event) {
    let model = event.detail
    this._update_model(model)
    this.refs.dialog_edit_model.close()
  }

  async _update_model (model) {
    let model_id = this.model._id
    console.log(model_id, model)
    this.model = await this.action('update_model', { model_id, model })
  }

  on_create_field (event) {
    let field = event.detail
    this._create_field (field)
    this.refs.dialog_create_field.close()
  }

  async _create_field (field) {
    let model_id = this.model._id
    this.model = await this.action('create_field', { model_id, field })
  }

}
