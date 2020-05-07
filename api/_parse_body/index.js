
module.exports = async function (request) {
  let body = request.body
  let empty = {}
  if (!body) {
    return empty
  }

  try {
    let data = JSON.parse(body)
    return data
  } catch (error) {
    return empty
  }
}