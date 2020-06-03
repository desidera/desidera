
export default class extends Pantarei.Component {

  async connected () {
    this.data.models = await this.action('get_models')
  }

}
