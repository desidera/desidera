
export default class extends Pantarei.Component {

  async ready () {
    this.data.models = await this.action('get_models')
    this.data.link_new = '#/admin/make-model'
  }

}
