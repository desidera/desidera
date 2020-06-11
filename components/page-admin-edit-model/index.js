
export default class Page extends Pantarei.Component {

  async ready () {
    let model_id = this.context.params.model_id
    this.data.model = await this.action('get_model', { model_id })
    this.data.link_new_field = `#/models/${model_id}/fields/new`
  }

}
