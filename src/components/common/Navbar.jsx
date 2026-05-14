import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavbar } from '../../hooks/useAnimations';
import { NAV_LINKS, SPA_INFO } from '../../utils/constants';

const Navbar = () => {
  const { isScrolled, isMenuOpen, toggleMenu, closeMenu } = useNavbar();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isLightText = isHome && !isScrolled;

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-spa-dark/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0 group" onClick={closeMenu}>
            <div className="w-16 h-16 flex items-center justify-center -ml-2 mr-1">
              <img src="/logo.png" alt="Dev Unisex Spa Logo" className="w-full h-full object-contain scale-[1.4] drop-shadow-md" />
            </div>
            <div>
              <div className={`text-lg font-serif font-bold leading-none transition-colors duration-300 text-white`}>
                Dev Unisex Spa
              </div>
              <div className={`text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 ${
                !isLightText ? 'text-gold-500' : 'text-white/80'
              }`}>
                Luxury Wellness
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium tracking-wide transition-colors duration-300 ${
                  !isLightText ? 'text-white hover:text-gold-600' : 'text-white/90 hover:text-white'
                } ${isActive(link.path) ? (!isLightText ? 'text-gold-600' : 'text-white') : ''}`}
                style={{ '--after-bg': '#C9A96E' }}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SPA_INFO.phoneLink}
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                !isLightText ? 'text-white hover:text-gold-600' : 'text-white/90 hover:text-white'
              }`}
            >
              <FiPhone size={14} />
              {SPA_INFO.phone}
            </a>
            <Link
              to="/booking"
              className="btn-primary text-sm px-6 py-3"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            id="mobile-menu-toggle"
            className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
              !isLightText ? 'text-white hover:bg-spa-dark/10' : 'text-white hover:bg-spa-dark/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiX size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-spa-dark/60 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 max-w-full z-50 bg-spa-dark shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <div className="text-lg font-serif font-bold text-white">Dev Unisex Spa</div>
                  <div className="text-xs text-gold-500 tracking-widest uppercase">Luxury Wellness</div>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-spa-dark/10 text-white transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.07, duration: 0.4 }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-medium transition-all duration-300 ${
                          isActive(link.path)
                            ? 'bg-gold-50 text-gold-600 border border-gold-200'
                            : 'text-white hover:bg-spa-dark/5 hover:text-gold-600'
                        }`}
                      >
                        {link.label}
                        {isActive(link.path) && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-500" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                  <Link
                    to="/booking"
                    onClick={closeMenu}
                    className="btn-primary w-full justify-center text-sm"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href={SPA_INFO.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center text-sm"
                  >
                    <FaWhatsapp size={16} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-white/10 bg-spa-darker">
                <div className="flex items-center gap-2 text-sm text-nude-200">
                  <FiPhone size={14} className="text-gold-500" />
                  <a href={SPA_INFO.phoneLink} className="font-medium hover:text-gold-600 transition-colors">
                    {SPA_INFO.phone}
                  </a>
                </div>
                <div className="mt-1 text-xs text-white/60">{SPA_INFO.hours}</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
