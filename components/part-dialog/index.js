
export default class extends Pantarei.Component {

  open () {
    this.toggleAttribute('open', true)
  }

  close () {
    this.toggleAttribute('open', false)
  }

  on_click_close (event) {
    this.close()
  }

}