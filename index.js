import Fastify from 'fastify'
import mercurius from 'mercurius'
import { typeDefs, resolvers } from './graphql.js'
import { makeExecutableSchema } from '@graphql-tools/schema'

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
    schema: makeExecutableSchema({ typeDefs, resolvers })
  })

  return server
}
