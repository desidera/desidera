
export default class extends Pantarei.Component {

  async ready () {
    let params = this.context.params
    let model_id = params.model_id
    let field_id = params.field_id
    this.data = this.data || {}
    this.data.model = await this.action('get_model', { model_id })
    this.data.field = await this.action('get_model_field', { model_id, field_id })
    this.data.field_schema = await this.action('get_field_schema', this.data.field.type)
  }

  async on_click_update (event) {
    await this.action('update_model_field', this.context.params)
  }

}