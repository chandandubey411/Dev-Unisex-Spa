import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import ScrollProgress from '../components/common/ScrollProgress';

// Scroll to top on route change
const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <ScrollToTopOnRoute />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
