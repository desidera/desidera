import Pantarei from 'http://localhost:2000/pantarei/index.js'

async function main () {
  await navigator.serviceWorker.register('./sw.js')
  window.app = await Pantarei.App.start()
}

main()