
export default class Part extends Pantarei.Component {

  on_change (event) {
    event.stopPropagation()
    let field = this.data
    let value = event.target.value
    this.fire('change', { field, value })
  }

}
