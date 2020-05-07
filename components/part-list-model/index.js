
export default class Part extends Pantarei.Component {

  on_click_item (event) {
    event.stopPropagation()
    let target = event.target
    this.fire('click_item', target.data.item)
  }

}
