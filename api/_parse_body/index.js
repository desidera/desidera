
module.exports = async function (request) {
  let body = JSON.parse(request.body)
  return body
}