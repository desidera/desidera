
export default class Page extends Pantarei.Component {

  async ready () {
    let entry_id = this.context.params.entry_id
    this.data.entry = await this.action('get_entry', { entry_id })
  }

}