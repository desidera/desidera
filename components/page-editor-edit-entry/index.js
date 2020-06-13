
export default class Page extends Pantarei.Component {

  async ready () {
    let model_id = this.context.params.model_id
    let entry_id = this.context.params.entry_id
    this.data.entry = await this.action('get_entry', { model_id, entry_id })
  }

  async on_click_save (event) {
    let model_id = this.context.params.model_id
    let entry_id = this.context.params.entry_id
    let entry = this.refs.form.values
    await this.action('update_entry', { model_id, entry_id, entry })
  }

}