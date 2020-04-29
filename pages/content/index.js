
export default class Page extends Pantarei.Component {

  async connected () {
    console.log('connected')
    this.model_id = this.context.params.model_id
    if (this.model_id) {
      this.entries = await this.action('get_entries', this.model_name)
    } else {
      this.entries = []
    }
    this.models = await this.action('get_models')
  }

  on_click_model (event) {
    let model = event.detail
    this.action('open_content_model', model)
  }

  on_click_create (event) {
    let model_name = this.model_name
    this._create_content(model_name)
  }

  async _create_content (model_name) {
    let content = await this.action('create_content', model_name)
    let content_id = content.id
    this.action('open_content', { model_name, content_id })
  }

  on_click_entry (event) {
    let entry = event.detail
    let model_name = this.model_name
    let content_id = entry._id
    this.action('open_content', { model_name, content_id })
  }

}
