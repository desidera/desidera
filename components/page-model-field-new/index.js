
export default class extends Pantarei.Component {

  async on_click_create (event) {
    let model_id = this.context.params.model_id
    let field = this.parts.form.values
    await this.action('create_model_field', { model_id, field })
  }

}
