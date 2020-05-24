import express from 'express';
import next from 'next';
import cors from 'cors';
import bodyParser from 'body-parser';
import { sendMail } from './email-sender';

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()
  const server = express()

  server.use(cors());
  server.use(bodyParser());
  server.post('/api/invitation-confirmation', async (req, res, next) => {
  console.log("req", req.body)
    const to = process.env.MAILGUN_ADMIN_MAILING_LIST;

    switch (req.method) {
      case 'POST':
        await sendMail({
          to, 
          subject: req.body.subject,
          content: req.body.message
        });
    
        return res.status(200).end();
        break;
    
      default:
        res.status(405).end();
        break;
    }
    next();
})
server.post('/api/*', (req, res) => handle(req, res));
  server.get('*', (req, res) => handle(req, res));
  
  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()