
export default class extends Pantarei.Container {

  async ready () {
    this.data.menu = {
      items: [
        {
          label: "Home",
          link: '#/'
        },
        {
          label: "Admin",
          link: '#/admin'
        },
        {
          label: "Editor",
          link: '#/editor'
        }
      ]
    }
  }

}
