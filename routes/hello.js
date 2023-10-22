export default async function (app, opts) {
  app.get('/', async (req, reply) => {
    return { hello: 'world' }
    // const query = '{ add(x: 2, y: 2) }'
    // return reply.graphql(query)
  })
}
