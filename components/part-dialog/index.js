
export default class extends Pantarei.Component {

  open () {
    this.toggleAttribute('closed', false)
  }

  close () {
    this.toggleAttribute('closed', true)
  }

  on_click_close (event) {
    this.close()
  }

}