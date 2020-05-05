
module.exports = function (handler) {
  return async function (request, response) {
    try {
      let value = await handler(request, response)
      response.status(200).json({ ok: true, value })
    } catch (error) {
      let message = error.message
      response.status(200).json({ ok: false, message })
    }
  }
}