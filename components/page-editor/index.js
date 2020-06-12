
export default class Page extends Pantarei.Component {

  async ready () {
    this.data.models = await this.action('get_models')
  }

}
