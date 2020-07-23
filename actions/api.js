
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

  let response_data
  try {
    let url = new URL(`${location.origin}/api/${action}`)

    if (params) {
      let entries = Object.entries(params)
      for (let [name, value] of entries) {
        if (typeof value === 'object') {
          value = JSON.stringify(value)
        }
        url.searchParams.append(name, value)
      }
    }

    let response = await fetch(url, config)
    let json = await response.json()
    if (!json.ok) {
      throw new Error(json.error)
    }
    let data = json.data

    return [null, data]
  }
  catch (error) {
    return [error, null]
  }
}
