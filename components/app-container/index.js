
export default class extends Pantarei.Container {

  static module_url = import.meta.url

  async ready () {
    this.data.menu = await this.action('get_menu', 'main')
  }

}
