const { response } = require("express");
const express = require("express");
const Stripe = require("stripe");
const router = express.Router(); 
require("dotenv").config();
CLIENT_URL = "http://localhost:3000";
STRIPE_KEY = "sk_test_51MG43NSB2bJ4cNuX05GR2WI6O4wsGuCCdmSyiBYPpMT4f6tkqbnDwAnXRHUQIUnBQKqCXr4RHlt8X8GsCPVMDknV00l9mkkF1g"
 
const stripe = Stripe(STRIPE_KEY) 
 
router.post("/create-checkout-session", async (req, res) => {
  const customer = await stripe.customers.create({ 
    metadata: {
      // userId: req.body.userId,
      cart: JSON.stringify(req.body.cartItems), 
    },  
  });   

  
  

   const line_items = req.body.cartItems.map((element) => {
    
    return { 
      price_data: { 
        currency: "inr", 
        product_data: {
          name: element.item_name,
          images: [element.img],
          // description: item.description, 
          metadata: {   
            id: element.id,
          },  
        },
        unit_amount: element.price * 100, 
      },
       
      quantity: 1,   
    }; 
  });      



   



  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],     
    shipping_address_collection: {
      allowed_countries: [ "IN","US" ],
    },
    shipping_options: [  
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "inr",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "inr",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            }, 
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    line_items,
     
    mode: "payment",
    customer: customer.id,
    success_url: `${CLIENT_URL}/success`,
    cancel_url: `${CLIENT_URL}/cart`,
  });

  // res.redirect(303, session.url);
  res.send({ url: session.url });
});



// // Create order function

// const createOrder = async (customer, data) => {
//   const Items = JSON.parse(customer.metadata.cart);

//   const products = Items.map((item) => {
//     return {
//       productId: item.id,
//       quantity: item.cartQuantity,
//     };
//   });

//   const newOrder = new Order({
//     userId: customer.metadata.userId,
//     customerId: data.customer,
//     paymentIntentId: data.payment_intent,
//     products,
//     subtotal: data.amount_subtotal,
//     total: data.amount_total,
//     shipping: data.customer_details,
//     payment_status: data.payment_status,
//   });

//   try {
//     const savedOrder = await newOrder.save();
//     console.log("Processed Order:", savedOrder);
//   } catch (err) {
//     console.log(err);
//   }
// };


  module.exports = router;