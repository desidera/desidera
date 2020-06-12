
export default class Page extends Pantarei.Component {

  async ready () {
    let model_id = this.context.params.model_id
    this.data.model = await this.action('get_model', { model_id })
  }

  async on_click_create (event) {
    let model_id = this.context.params.model_id
    let entry = this.refs.form.values
    await this.action('create_entry', { model_id, entry })
  }

}