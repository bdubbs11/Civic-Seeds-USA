import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

function Cart() {
  // Sample cart items - in a real app, this would come from state management or API
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "The Parent's Guide",
      price: 28,
      quantity: 1
    },
    {
      id: 2,
      name: "The Workbook",
      price: 15,
      quantity: 2
    }
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const estimatedTax = subtotal * 0.08; // 8% tax placeholder
  const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping over $50
  const total = subtotal + estimatedTax + shipping;

  return (
    <div className="w-full min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-normal text-black mb-16 text-center">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items */}
            <div className="flex-1">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:sticky lg:top-20 lg:self-start">
              <CartSummary
                subtotal={subtotal}
                estimatedTax={estimatedTax}
                shipping={shipping}
                total={total}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

