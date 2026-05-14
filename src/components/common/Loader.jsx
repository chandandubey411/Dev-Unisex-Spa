import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo mark */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-luxury-lg">
            <span className="text-3xl font-serif font-bold text-white">D</span>
          </div>
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full border-2 border-gold-400 animate-ping opacity-30" />
          <div className="absolute -inset-2 rounded-full border border-gold-300 animate-ping opacity-20" style={{ animationDelay: '0.3s' }} />
        </motion.div>

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="text-2xl font-serif font-bold text-white mb-1">Dev Unisex Spa</div>
          <div className="text-xs text-gold-500 tracking-widest uppercase">Luxury Wellness</div>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-48 h-0.5 bg-cream-200 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-gold-500 to-transparent"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60 text-xs tracking-widest uppercase"
        >
          Preparing your experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
