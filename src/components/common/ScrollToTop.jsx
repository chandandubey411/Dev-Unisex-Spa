import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={scrollToTop}
          id="scroll-to-top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-gold-500 hover:bg-gold-600 text-white rounded-full shadow-luxury-lg flex items-center justify-center transition-colors duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
