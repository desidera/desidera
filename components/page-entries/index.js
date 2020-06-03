
export default class Page extends Pantarei.Component {

  async connected () {
    let model_id = this.context.params.model_id
    this.data.models = await this.action('get_models')
    this.data.model = await this.action('get_model', { model_id })
    this.data.entries = await this.action('get_entries', { model_id })
  }

}
