
module.exports = function (handler) {
  return async function (request, response) {
    let error
    let value

    try {
      [error, value] = await handler(request, response)
    } catch (hander_error) {
      error = handler_error
    }

    if (error) {
      error = error.message
      response.status(200).json({ ok: false, error })
      return
    }

    response.status(200).json({ ok: true, value })
  }
}