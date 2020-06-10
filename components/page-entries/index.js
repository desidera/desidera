
export default class Page extends Pantarei.Component {

  async ready () {
    let model_id = this.context.params.model_id

    this.data.link_new_entry = '#/entries/new'
    this.data.models = await this.action('get_models')

    if (model_id) {
      this.data.model = await this.action('get_model', { model_id })
      this.data.entries = await this.action('get_entries', { model_id })
    }
  }

}
