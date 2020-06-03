
export default class Page extends Pantarei.Component {

  async connected () {
    let model_id = this.context.params.model_id
    this.data.model = await this.action('get_model', model_id)
  }

}
