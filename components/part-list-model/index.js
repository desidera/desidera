
export default class Part extends Pantarei.Component {

  on_click_item (event) {
    event.stopPropagation()
    let target = event.target
    let item = target.data
    this.fire('click_item', item)
  }

}
