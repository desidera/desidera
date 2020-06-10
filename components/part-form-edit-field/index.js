
export default class extends Pantarei.Component {

  async rendered () {
    await this.build()
  }

  async build () {
    if (this._built) {
      return
    }

    this._built = true
  }

}