import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import './AdminLayout.css'; 

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="admin-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <aside className={`admin-sidebar-wrapper ${isSidebarOpen ? 'open' : ''}`}>
        <AdminSidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Main Content Area */}
      <div className="admin-main">
        {/* Mobile Header (Hidden on Desktop) */}
        <header className="admin-mobile-header">
          <span>Admin Panel</span>
          <button onClick={() => setIsSidebarOpen(true)}>
            {/* Minimalist Hamburger Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Scrollable Page Content */}
        <main className="admin-content-area">
          <div className="admin-content-container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;