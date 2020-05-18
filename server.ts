import express from 'express';
import next from 'next';

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()
  const server = express()

  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))
  server.set('API_BASE_URL', process.env.API_BASE_URL);
  server.set('CMS_APP_NAME', process.env.CMS_APP_NAME);
  
  server.use((req, res, next) => {
    req['language'] = req['language'] || nextI18next.i18n.language || 'es';
    req.app.set('API_BASE_URL', server.get('API_BASE_URL'));
    req.app.set('CMS_APP_NAME', server.get('CMS_APP_NAME'));
    next()
  })

  server.post('/api/*', (req, res) => handle(req, res));
  server.get('*', (req, res) => handle(req, res));
  
  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()