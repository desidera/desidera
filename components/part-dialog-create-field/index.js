
export default class extends Pantarei.Component {

  on_click_close (event) {
    this.refs.dialog.close()
  }

  on_click_create (event) {
    let name = this.refs.input_name.value
    let type = this.refs.input_type.value

    let field = { name, type }
    this.fire('submit', field)
  }

}
