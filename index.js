import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers, loaders } from './graphql.js'

export default function buildServer () {
  const server = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
  })

  // comment below line to use graphql
  // server.register(import('./app.js'))

  // uncomment below lines to use graphql
  server.register(mercurius, {
    schema,
    resolvers,
    loaders,
    graphiql: true
  })

  return server
}
