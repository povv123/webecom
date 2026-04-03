import React, { useState } from 'react';

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    { q: "How do I track my order?", a: "Once your order ships, you'll receive an email with a tracking link. You can also view status in your Eter account." },
    { q: "What is the return policy?", a: "We offer a 14-day return policy for all hardware and furniture items in original packaging." },
    { q: "Do you offer international shipping?", a: "Yes, Eter currently ships to over 25 countries worldwide with carbon-neutral delivery." },
    { q: "How can I contact technical support?", a: "You can reach our support team 24/7 via the 'Support' link in our footer or via live chat." }
  ];

  return (
    <div className="pt-32 pb-20 bg-[#f5f5f7] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">How can we help?</h1>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for a topic..." 
              className="w-full p-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-lg"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <div className="space-y-4">
          {faqs.filter(item => item.q.toLowerCase().includes(searchTerm.toLowerCase())).map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-3">{item.q}</h3>
              <p className="text-gray-500 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center border-t border-gray-200 pt-10">
          <p className="text-gray-400">Still need help?</p>
          <button className="mt-4 text-blue-600 font-medium hover:underline">Contact Support →</button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;