import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-spa-dark to-spa-darker flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* 404 number */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-[160px] font-serif font-bold gradient-text leading-none mb-4"
        >
          404
        </motion.div>

        <h1 className="text-3xl font-serif font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-nude-300 mb-10 leading-relaxed">
          Oops! The page you're looking for seems to have slipped away into complete relaxation. Let us guide you back.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <FiHome size={16} />
            Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary">
            <FiArrowLeft size={16} />
            Go Back
          </button>
        </div>

        {/* Decorative */}
        <div className="mt-16 flex justify-center gap-8 opacity-40">
          {['✨', '🌸', '💆', '🪨'].map((emoji, idx) => (
            <motion.span
              key={idx}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2 + idx * 0.5, repeat: Infinity, delay: idx * 0.3 }}
              className="text-3xl"
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
