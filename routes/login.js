import S from 'fluent-schema'
import errors from 'http-errors'

export default async function (app, opts) {
  app.post('/login', {
    schema: {
      body: S.object()
        .prop('username', S.string().required())
        .prop('password', S.string().required())
    }
  }, async (req, res) => {
    const { username, password } = req.body

    if (!(username === 'admin' && password === 'p@ssw0rd')) {
      throw new errors.Unauthorized()
    }

    const token = app.jwt.sign({ username })

    return { token }
  })
}
