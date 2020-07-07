
module.exports = async function (request) {
  let headers = request.headers
  let token = headers['authorization'] || headers['x-access-token']

  if (!token) {
    return null
  }

  let prefix = 'Bearer '
  if (token.startsWith(prefix)) {
    token = token.slice(prefix.length, token.length)
  }

  return token
}