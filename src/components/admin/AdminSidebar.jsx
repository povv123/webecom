import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Admin/AdminSidebar.css';

const Icon = ({ name }) => {
  const icons = {
    grid: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />,
    clock: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    box: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    layout: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
    check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    chart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
    user: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    briefcase: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    edit: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
    info: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    mail: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  };

  return (
    <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {icons[name] || icons.grid}
    </svg>
  );
};

const AdminSidebar = ({ closeSidebar }) => {
  const menuGroups = [
    {
      title: 'OVERVIEW',
      items: [
        { name: 'Home', path: '/admin', icon: 'grid' },
        { name: 'Orders', path: '/admin/orders', icon: 'clock' },
      ]
    },
    {
      title: 'CATALOG',
      items: [
        { name: 'Products', path: '/admin/products', icon: 'box' },
        { name: 'Inventory', path: '/admin/inventory', icon: 'shield' },
      ]
    },
    {
      title: 'CONTENT',
      items: [
        { name: 'Services', path: '/admin/services', icon: 'layout' },
        { name: 'Solutions', path: '/admin/solutions', icon: 'check' },
        { name: 'Resources', path: '/admin/resources', icon: 'chart' },
        { name: 'About Us', path: '/admin/about', icon: 'info' },
        { name: 'Contact', path: '/admin/contact', icon: 'mail' },
      ]
    },
    {
      title: 'PEOPLE',
      items: [
        { name: 'Customers', path: '/admin/customers', icon: 'user' },
        { name: 'Careers', path: '/admin/careers', icon: 'briefcase' },
        { name: 'Support', path: '/admin/support', icon: 'edit' },
      ]
    }
  ];

  return (
    <div className="adminSider">
      <div className="adminSider-header">
        <h1> Servial Admin</h1>
      </div>

      <nav className="adminSider-nav">
        {menuGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="nav-group">
            <span className="nav-group-title">{group.title}</span>
            
            <div className="nav-group-items">
              {group.items.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={closeSidebar}
                  end={item.path === '/admin'}
                  className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                >
                  <div className="nav-item-content">
                    <Icon name={item.icon} />
                    <span>{item.name}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="adminSider-footer">
        <button>Sign Out</button>
      </div>
    </div>
  );
};

export default AdminSidebar;