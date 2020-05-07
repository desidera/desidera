
module.exports = async function (request) {
  let body = request.body
  let empty = {}
  if (!body) {
    return empty
  }

  if (typeof body === 'object') {
    return body
  }

  if (typeof body !== 'string') {
    return empty
  }

  try {
    let data = JSON.parse(body)
    return data
  } catch (error) {
    return empty
  }
}