import express from "express";
import Stripe from "stripe";
require("dotenv").config();

const app = express();

const port = 3301;

const PUBLISHABLE_KEY = process.env.STRIPE_PUBLIC_KEY;
const PRIVATE_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = Stripe(PRIVATE_KEY, { apiVersion: "2022-11-15" });
app.listen(port, () => {
  console.log("Listening on port", port);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "usd",
      payment_method_types: ["card"],
    });
    const clientSecret = paymentIntent.client_secret;
    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({
      error: e.message,
    });
  }
});
