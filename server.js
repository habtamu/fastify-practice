import buildServer from './index.js'

const app = buildServer()

const start = async function () {
  try {
    app.listen({ port: process.env.PORT || 3000 })
  } catch (e) {
    console.error(e)
  }
}

start()
