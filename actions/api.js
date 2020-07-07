
export default async function (action, params) {
  let config = {}

  config.method = 'GET'
  config.headers = {}
  config.headers['Accept'] = 'application/json'
  config.headers['Content-Type'] = 'application/json'

  let token = localStorage.getItem('desidera.token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  try {
    let url = new URL(`${location.origin}/api/${action}`)
    if (params) {
      for (let key in params) {
        let value = params[key]
        let value_string = JSON.stringify(value)
        url.searchParams.append(key, value_string)
      }
    }
    let response = await fetch(url, config)
    let data = await response.json()

    return [null, data]
  } catch (error) {
    return [error, null]
  }

}
