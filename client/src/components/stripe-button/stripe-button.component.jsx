import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

// stripe.com/docs/testing
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_pAAStSnCyp28H2onhu266hJG004V9xru5H";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error:', JSON.parse(error))
      alert('there was an issue with your payment, Please sure you use the provided credit card')
    });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing LTd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
