
export default class extends Pantarei.Component {

  async ready () {
    let model_id = this.context.search.model_id
    this.data.model = await this.action('get_model', { model_id })
    this.data.link_new_field = `#/models/${model_id}/fields/new`
  }

  async on_click_update (event) {
    let values = this.refs.form.values
    await this.action('set_model', values)
  }

}
