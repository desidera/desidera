
export default class extends Pantarei.Component {

  async on_click_create (event) {
    let model_id = this.data.model.id
    let field = this.refs.form.values
    await this.action('create_model_field', { model_id, field })
  }

}
