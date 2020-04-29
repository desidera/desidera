
export default class extends Pantarei.Component {

  on_click_edit (event) {
    let field = this.data.item
    this.fire('click_edit', field)
  }

}