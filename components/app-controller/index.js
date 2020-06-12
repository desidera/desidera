import actions from '../../actions/index.js'

export default class extends Pantarei.Controller {

  constructor () {
    super()
    this.use(actions)
  }

}
