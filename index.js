import Pantarei from '../pantarei/index.js'

async function main () {
  await navigator.serviceWorker.register('./sw.js')
  window.app = await Pantarei.App.start()
}

main()