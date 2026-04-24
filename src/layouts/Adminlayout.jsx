import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// Import your admin components (you can build these next)
// import Sidebar from '../components/admin/Sidebar';
// import Navbar from '../components/admin/Navbar';

const AdminLayout = () => {
  const { isAuthenticated } = useAuth();


  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      
      {/* 1. Sidebar (Fixed on the left) */}
      <aside className="w-64 bg-gray-900 text-white h-full hidden md:block">
        <div className="p-4 text-2xl font-bold border-b border-gray-800">Eter Admin</div>
        <nav className="p-4">
          <p className="text-gray-400 text-sm mb-4">Sidebar navigation goes here...</p>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        
        <header className="h-16 bg-white shadow-sm flex items-center px-6 justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <button className="text-sm bg-gray-200 px-4 py-2 rounded">Logout</button>
        </header>

      
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="bg-white rounded-lg shadow-sm p-6 min-h-full">
             <Outlet /> 
          </div>
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;