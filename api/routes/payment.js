// paymentRouter.js
const express = require('express');
const config = require('../config');
const stripe = require('stripe')(config.stripe_key);

const Payment = require('../models/Payment');

const router = express.Router();

// Define your payment routes here...
router.get('/total_price', async (req, res) => {
  console.log('Total price');
  const orderFromUser = Payment.allOrdersFromUser(Payment.userId(req.body.userId));
  const price = orderFromUser.prix_total;

  return res.json(price);
});

router.post('/checkout', async (req, res) => {
  /// mettre query pour ajouter info dans db en fonction info client
  console.log(Payment.userId(req.body.userId));

  let price = null;

  try {
    const orderFromUser = Payment.allOrdersFromUser(Payment.userId(req.body.userId));

    if (!orderFromUser) {
      console.log('Rien dans la commande, commande vide');
    } else {
      console.log(orderFromUser);
      console.log(req.body.userId);

      price = orderFromUser.prix_total;

      return res.json(orderFromUser);
    }
  } catch (error) {
    console.error('Rien dans la commande, commande vide');
  }

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
              name: 'sushi',
              description: 'sushi',

              // Add any other relevant product details from your database
            },
            unit_amount: 100 * price, // Stripe expects the amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',

      success_url: 'http://localhost:8080/thanks', // Replace with your success URL
      cancel_url: 'http://localhost:8080/payment', // Replace with your cancel URL
    });

    // Redirect the user to the Stripe Checkout page
    res.redirect(303, session.url);
  } catch (error) {
    // Handle any error that occurred during the Stripe session creation
    res.status(500).send('Error creating Stripe session');
  }
});

router.get('/error', async (req, res) => {
  console.log('error');

  res.send('POST request to the checkout page');
  return res.json();
});

router.get('/test', async (req, res) => {
  console.log('succes');

  //do that for every object of the array
  const orderFromUser = Payment.allOrdersFromUser(1);
  const price = orderFromUser.prix_total;
  const name = orderFromUser.nom;
  const firstname = orderFromUser.prenom;

  console.log(name + '' + firstname + ' vient de faire une commande pour : ' + price + '€');

  return res.json();
});

module.exports = router;
