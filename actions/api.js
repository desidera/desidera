
function get_token () {
  let token = localStorage.getItem('desidera.token')
  return token
}

export default async function (action, params) {
  try {
    let request = {}

    let method = 'POST'

    let headers = {}
    headers['Accept'] = 'application/json'
    headers['Content-Type'] = 'application/json'

    let token = get_token()
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    let endpoint = '/api/rpc'
    let url = new URL(endpoint, location.origin)

    let body = JSON.stringify({ action, params })

    request.method = method
    request.headers = headers
    request.body = body

    let response = await fetch(url, request)

    let json = await response.json()
    if (json.error) {
      throw new Error(json.error)
    }
    let data = json.data

    return [null, data]
  }
  catch (error) {
    return [error, null]
  }
}
