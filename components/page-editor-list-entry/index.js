
export default class Page extends Pantarei.Component {

  async ready () {
    let model_id = this.context.params.model_id
    this.data.link_new_entry = `#/editor/${model_id}/new`

    this._get_models()
    this._get_model()
    this._get_entries()
  }

  async _get_models () {
    this.data.models = await this.action('get_models')
  }

  async _get_model (model_id) {
    this.data.model = await this.action('get_model', { model_id })
  }

  async _get_entries (model_id) {
    this.data.entries = await this.action('get_entries', { model_id })
  }

}
