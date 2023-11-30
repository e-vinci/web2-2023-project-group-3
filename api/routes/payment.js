// paymentRouter.js
const Payment = require('../models/Payment');

const express = require('express');

const router = express.Router();

const config = require('../config');
const stripe = require('stripe')(config.stripe_key);

const { allOrdersFromUser } = Payment;

// Define your payment routes here...

router.post('/checkout', async (req, res) => {
  /// mettre query pour ajouter info dans db en fonction info client

  const nom = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;
  const prixUnitaire = req?.body?.prix_unitaire?.length !== 0 ? req.body.prix_unitaire : undefined;
  const type = req?.body?.type?.length !== 0 ? req.body.type : undefined;
  console.log(nom, description, prixUnitaire, type);
  try {
    // Fetch product details from the database

    // Create a Stripe Checkout Session with the fetched product details
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],

      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Sushi',
              description: 'Sushi',

              // Add any other relevant product details from your database
            },
            unit_amount: 100, // Stripe expects the amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',

      success_url: 'http://localhost:3000/payment/succes', // Replace with your success URL
      cancel_url: 'http://localhost:3000/', // Replace with your cancel URL
    });

    // Redirect the user to the Stripe Checkout page
    res.redirect(303, session.url);
  } catch (error) {
    // Handle any error that occurred during the Stripe session creation
    res.status(500).send('Error creating Stripe session');
  }
});

router.get('/succes', async (req, res) => {
  console.log('succes');
  const order = allOrdersFromUser(1);

  return res.json(order);
});

router.get('/test', async (req, res) => {
  console.log('succes');
  const price = Payment.allOrdersFromUser(1).prix_total;

 


  //do that for every object of the array
  console.log(price);

  return res.json(price);
});

module.exports = router;
