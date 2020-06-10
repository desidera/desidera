
export default class extends Pantarei.Container {

  async ready () {
    this.data.menu = {
      items: [
        {
          label: "Home",
          link: '#/'
        },
        {
          label: "Models",
          link: '#/models'
        },
        {
          label: "Content",
          link: '#/entries'
        }
      ]
    }
  }

}
