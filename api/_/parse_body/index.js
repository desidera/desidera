
module.exports = async function (request) {
  let result = {}

  let query = request.query
  if (query) {
    for (let key in query) {
      let value = query[key]
      value = JSON.parse(value)
      result[key] = value
    }
  }

  let body = request.body
  if (body) {
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body)
      } catch (error) {
        body = {}
      }
    }

    for (let key in body) {
      let value = body[value]
      result[key] = value
    }
  }

  return result
}