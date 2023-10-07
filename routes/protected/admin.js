export default async function (app, opts) {
  app.get('/admin', async () => {
    return { user: 'Admin' }
  })
}
