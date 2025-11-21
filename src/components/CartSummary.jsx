import React from 'react';

function CartSummary({ subtotal, estimatedTax, shipping, total }) {
  // Stripe payment intent ID
  // const [paymentIntentId, setPaymentIntentId] = useState(null);

  // Stripe session creation
  // const createStripeSession = async () => {
  //   // TODO: Implement Stripe checkout session creation
  //   // const session = await stripe.checkout.sessions.create({...});
  // };

  // Stripe checkout redirect
  // const handleCheckout = async () => {
  //   // TODO: Redirect to Stripe checkout
  //   // window.location.href = session.url;
  // };

  return (
    <div className="w-full md:w-80 border border-gray-200 p-8">
      <h2 className="text-black text-xl font-normal mb-6">Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Estimated tax</span>
          <span>${estimatedTax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-200 pt-4 flex justify-between text-black text-lg font-normal">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        disabled
        className="w-full py-3 border border-gray-300 text-gray-400 cursor-not-allowed text-center"
      >
        Checkout with Stripe
      </button>
    </div>
  );
}

export default CartSummary;

