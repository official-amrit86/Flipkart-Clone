import React from 'react';

function Cart() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Your Shopping Cart</h2>

        {/* Cart Items (example placeholder) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <img src="/product1.jpg" alt="Product" className="w-16 h-16 rounded object-cover" />
              <div>
                <h3 className="font-semibold">Product Name</h3>
                <p className="text-gray-500 text-sm">₹999</p>
              </div>
            </div>
            <div className="text-sm">Qty: 1</div>
          </div>

          {/* Repeat for more items or map through cart state */}
        </div>

        {/* Total and Checkout */}
        <div className="mt-6 border-t pt-4 flex justify-between items-center">
          <h4 className="text-lg font-semibold">Total: ₹999</h4>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
