const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
app.prepare()
  .then(() => {
    const server = express()

    // set permission in file
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json())
    server.use(cors())

    // nextJS connect to express
    server.get('*', (req, res) => {
      return handle(req, res)
    });

    // Omise API
    let omise = require('omise')({
      'publicKey': process.env.OMISE_PUBLIC_KEY,
      'secretKey': process.env.OMISE_SECRET_KEY
    });
    server.post('/pay', async (req, res, next) => {
      try {
        let customer = await omise.customers.create({
          description: req.body.book_name,
          card: req.body.token
        });
        let charge = await omise.charges.create({
          amount: req.body.total,
          currency: 'thb',
          customer: customer.id
        });
        console.log('Omise --->', charge);
        res.send({
          amount: charge.amount,
          status: charge.status
        })
      } catch (error) {
        console.log(error);
      }
      
      next();
    });

    // server running
    server.listen(80, (err) => {
      if (err)
        throw err
      console.log('> Ready on http://localhost:80')
    });
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  });