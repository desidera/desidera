self.importScripts('https://unpkg.com/pantarei@4.8.0/modules/sw/index.js')

let service = new self.Service('0.0.1')

self.addEventListener('install', service.on_install)
self.addEventListener('activate', service.on_activate)
self.addEventListener('fetch', service.on_fetch)
