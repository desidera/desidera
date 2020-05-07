export default class extends Pantarei.Component {

  open () {
    this.refs.dialog.open()
  }

  close () {
    this.refs.dialog.close()
  }

  on_click_close (event) {
    this.close()
  }

  async on_click_update (event) {
    let model = this.refs.form.values
    await this.action('update_model', {
      model_id: this.data.model._id,
      model: model
    })
  }

}