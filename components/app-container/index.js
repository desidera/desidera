
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
          link: '#/admin/models'
        },
        {
          label: "Content",
          link: '#/editor'
        }
      ]
    }
  }

}
