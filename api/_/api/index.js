
module.exports = function (handler) {
  return async function (request, response) {
    let [error, data] = await handler(request)

    if (error) {
      console.log(error)
      response.status(200).json({ ok: false, error })
      return
    }

    response.status(200).json({ ok: true, data })
  }
}