import Fastify from 'fastify'
import mercurius from 'mercurius'
import config from './lib/config.js'
import { schema, resolvers } from './graphql.js'

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

  server.register(import('@fastify/postgres'), {
    connectionString: config.PG_CONNECTION_STRING
  })

  // uncomment below lines to use graphql
  server.register(mercurius, {
    schema,
    resolvers,
    graphiql: true
  })

  return server
}
