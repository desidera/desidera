
export default class Page extends Pantarei.Component {

  async ready () {
    let model_name = this.context.search.model_name
    this.data.link_new_entry = `#/make-entry?model_id=${model_name}`

    this._get_models()
    this._get_entries(model_name)
  }

  async _get_models () {
    this.data.models = await this.action('get_entries_models')
  }

  async _get_entries (model_name) {
    this.data.entries = await this.action('get_entries', { model_name })
  }

}
