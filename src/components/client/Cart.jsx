import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Mock data - This will eventually come from your Global State/Context
  const cartItems = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      spec: "Natural Titanium, 256GB",
      price: 999,
      qty: 1,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="cart-page bg-gray-50 pt-32 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {cartItems.length > 0 ? (
          <>
            <header className="mb-12">
              <h1 className="text-4xl font-semibold text-gray-900">Review your bag.</h1>
              <p className="text-gray-500 mt-2">Free delivery and free returns on all orders.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* List of Items */}
              <div className="lg:col-span-2 space-y-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6 pb-8 border-b border-gray-200">
                    <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm">
                      <img src={item.img} alt={item.name} className="object-contain" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-xl font-medium">{item.name}</h2>
                          <p className="text-sm text-gray-500 mt-1">{item.spec}</p>
                        </div>
                        <p className="text-lg font-medium">${item.price.toLocaleString()}</p>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-4 text-sm text-blue-600">
                          <select className="bg-transparent font-medium focus:outline-none">
                            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                          </select>
                          <button className="hover:underline">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <aside className="bg-white p-8 rounded-2xl shadow-sm h-fit sticky top-32">
                <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">FREE</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-gray-100 text-xl font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl mt-8 font-medium hover:bg-blue-700 transition-colors">
                  Check Out
                </button>
              </aside>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-semibold">Your bag is empty.</h1>
            <p className="text-gray-500 mt-4 mb-8">Items stay in your bag for 30 days.</p>
            <Link to="/products" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;