// src/layouts/ClientLayout.jsx
import { Outlet } from 'react-router-dom';
import MegaMenu from '../components/client/MegaMenu';
import Footer from '../components/client/Footer';

const ClientLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <header className="sticky top-0 z-50">
        <MegaMenu />
      </header>

      {/* Dynamic Content Area */}
      <main className="flex-grow bg-white">
        <Outlet /> 
      </main>

    
      <Footer />
    </div>
  );
};

export default ClientLayout;