import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  // Define your admin navigation links in an array to keep the code clean
  const navItems = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Inventory', path: '/admin/inventory' },
    { name: 'Orders', path: '/admin/orders' },
    { name: 'Customers', path: '/admin/customers' },
    { name: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Brand / Logo Area */}
      <div className="mb-8 px-4">
        <h2 className="text-2xl font-bold tracking-wider text-white">
          ADMIN PANEL
        </h2>
        <p className="text-xs text-slate-400 mt-1">Store Management</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/admin'} // Ensures exact match for the base dashboard route
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white font-medium' // Active state styling
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white' // Inactive state styling
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Area (e.g., Logout) */}
      <div className="mt-auto border-t border-slate-700 pt-4">
        <button 
          className="w-full text-left px-4 py-3 text-red-400 hover:bg-slate-800 hover:text-red-300 rounded-lg transition-colors duration-200"
          onClick={() => {
            // Add your logout logic here later
            console.log("Logging out...");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;