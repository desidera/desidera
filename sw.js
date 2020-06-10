self.importScripts('http://localhost:2000/pantarei/modules/sw/index.js')

const version = '0.0.1'
const service = new self.Service(version)

self.addEventListener('install', service.on_install)
self.addEventListener('activate', service.on_activate)
self.addEventListener('fetch', service.on_fetch)
