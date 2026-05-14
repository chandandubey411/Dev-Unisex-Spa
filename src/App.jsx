import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import Loader from './components/common/Loader';
import './index.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <AppRoutes key="app" />
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
