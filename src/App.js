import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- LAYOUT COMPONENTS ---
import MegaMenu from './components/client/MegaMenu';

// --- CORE & UTILITIES ---
import Home from './pages/client/Home';
import SearchPage from './pages/client/Search';

// --- PRODUCTS ---
import Products from './pages/client/Products/products';
import MobilePhonePage from './pages/client/Products/mobilephone';
import LaptopPage from './pages/client/Products/laptop';
import AccessoriesPhone from './pages/client/Products/accessoriesphone';
import OfficeFurniture from './pages/client/Products/officefur';
import HomeFurniture from './pages/client/Products/homefur';
import AccessoriesFurniture from './pages/client/Products/accessoriesfur';
import Machinery from './pages/client/Products/machinery';
import Machintools from './pages/client/Products/machinetools';
import BuyPage from './pages/client/Products/buypage';
import ProductDetail from './pages/client/Products/productdetail';


// --- CAREERS ---
import CareerOverview from './pages/client/Careers/Career';
import JobOpenings from './pages/client/Careers/openings';
import Internships from './pages/client/Careers/internships';

// --- ABOUT US ---
import AboutUs from './pages/client/Aboutus/aboutus';
import History from './pages/client/Aboutus/history';
import Leadership from './pages/client/Aboutus/leadership';
import Mission from './pages/client/Aboutus/mission';

// --- RESOURCES ---
import Resources from './pages/client/Resources/resources';
import CaseStudies from './pages/client/Resources/Casestudies';
import Whitepapers from './pages/client/Resources/whitepapers';
import Blog from './pages/client/Resources/blog';
import FAQs from './pages/client/Resources/FAQs';

// --- CONTACT ---
import Contact from './pages/client/Contact/Contact';
import Inquiry from './pages/client/Contact/inquiry';
import Quote from './pages/client/Contact/quote';
import Support from './pages/client/Contact/support';
import Shipping from './pages/client/Contact/ship';

// --- SERVICES ---
import Services from './pages/client/Services/Services';
import BusinessStrategy from './pages/client/Services/BusinessStrategy';
import ITConsulting from './pages/client/Services/ITConsulting';
import FinancialAnalysis from './pages/client/Services/FinancialAnalysis';
import Taxes from './pages/client/Services/Taxes';
import LogisticsServices from './pages/client/Services/LogisticsServices';
import EquipmentServicing from './pages/client/Services/EquipmentServicing';
import FacilityManagement from './pages/client/Services/FacilityManagement';
import SpareParts from './pages/client/Services/SpareParts';
import InternetProvider from './pages/client/Services/InternetProvider';
import TechnicalTraining from './pages/client/Services/TechnicalTraining';
import CustomerServiceTraining from './pages/client/Services/CustomerServiceTraining';

// --- SOLUTIONS ---
import Solutions from './pages/client/Solutions/Solution';
import EducationSolution from './pages/client/Solutions/education';
import HealthcareSolution from './pages/client/Solutions/healthcare';
import ManufacturingSolution from './pages/client/Solutions/manufacturing';

// --- CART & PROFILE ---
import Cart from './components/client/Cart';
import Orders from './pages/client/oders'; 
import YourSaves from './pages/client/yoursave'; 
import SignIn from './pages/client/signin'; 
import Account from './pages/client/account'; 
import CreateAccount from './pages/client/createaccount';


// Helper: Resets scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* The MegaMenu stays outside the Routes so it appears on every page */}
      <MegaMenu />
      
      <main className="min-h-screen bg-white">
        <Routes>
          {/* --- CORE & COMMERCE --- */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          
          {/* --- PRODUCT ROUTES --- */}
          <Route path="/products" element={<Products />} />
          <Route path="/buy/:categoryId" element={<BuyPage />} />
          <Route path="/products/item/:productId" element={<ProductDetail />} />
         
          
          <Route path="/products/electronics/mobile" element={<MobilePhonePage />} />
          <Route path="/products/electronics/laptops" element={<LaptopPage />} />
          <Route path="/products/electronics/accessories" element={<AccessoriesPhone />} />
          
          <Route path="/products/furniture/office" element={<OfficeFurniture />} />
          <Route path="/products/furniture/home" element={<HomeFurniture />} />
          <Route path="/products/furniture/accessories" element={<AccessoriesFurniture />} />
          
          <Route path="/products/industrial/machinery" element={<Machinery />} />
          <Route path="/products/industrial/machinetools" element={<Machintools />} />

          {/* --- CAREERS --- */}
          <Route path="/careers" element={<CareerOverview />} />
          <Route path="/careers/openings" element={<JobOpenings />} />
          <Route path="/careers/internships" element={<Internships />} />

          {/* --- ABOUT --- */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/mission" element={<Mission />} />

          {/* --- RESOURCES --- */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/whitepapers" element={<Whitepapers />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/faqs" element={<FAQs />} />

          {/* --- CONTACT --- */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/inquiry" element={<Inquiry />} />
          <Route path="/contact/quote" element={<Quote />} />
          <Route path="/contact/support" element={<Support />} />
          <Route path="/contact/ship" element={<Shipping />} />

          {/* --- SERVICES --- */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting/strategy" element={<BusinessStrategy />} />
          <Route path="/services/consulting/it" element={<ITConsulting />} />
          <Route path="/services/consulting/financial" element={<FinancialAnalysis />} />
          <Route path="/services/consulting/taxes" element={<Taxes />} />
          <Route path="/services/consulting/logistics" element={<LogisticsServices />} />
          <Route path="/services/maintenance/equipment" element={<EquipmentServicing />} />
          <Route path="/services/maintenance/facility" element={<FacilityManagement />} />
          <Route path="/services/maintenance/repair" element={<SpareParts />} />
          <Route path="/services/maintenance/isp" element={<InternetProvider />} />
          <Route path="/services/training/technical" element={<TechnicalTraining />} />
          <Route path="/services/training/customer-service" element={<CustomerServiceTraining />} />
          
          {/* --- SOLUTIONS --- */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/education" element={<EducationSolution />} />
          <Route path="/solutions/healthcare" element={<HealthcareSolution />} />
          <Route path="/solutions/manufacturing" element={<ManufacturingSolution />} />

          {/* --- CART & PROFILE ROUTES --- */}
          <Route path="/bag" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/saves" element={<YourSaves />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/account" element={<Account />} /> 
          <Route path="/register" element={<CreateAccount />} />


          {/* --- 404 FALLBACK --- */}
          <Route path="*" element={<div className="py-40 text-center text-2xl font-semibold">404: Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;