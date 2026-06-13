import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiStar, FiClock, FiMapPin } from 'react-icons/fi';
import { SPA_INFO } from '../../utils/constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=85&auto=format&fit=crop"
          alt="Luxury Spa Interior"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-spa-dark/90 via-spa-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/60 via-transparent to-spa-dark/20" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[35%] w-24 h-24 rounded-full bg-gold-500/20 backdrop-blur-sm border border-gold-400/30 hidden lg:flex items-center justify-center"
      >
        <span className="text-4xl">✨</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-48 right-[28%] w-16 h-16 rounded-full bg-blush-500/20 backdrop-blur-sm border border-blush-400/30 hidden lg:flex items-center justify-center"
      >
        <span className="text-2xl">🌸</span>
      </motion.div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-spa-dark/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm mb-8"
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <FiStar key={i} size={12} className="fill-gold-400 text-gold-400" />)}
            </div>
            <span>Greater Noida's #1 Luxury Spa</span>
            <span className="text-gold-400">•</span>
            <span className="text-green-400 font-medium">Open 24/7</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[1.05] mb-6 text-shadow-dark"
          >
            Rejuvenate
            <span className="block text-gold-400 italic">Your Mind,</span>
            <span className="block">Body & Soul</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-xl"
          >
            Premium massage & wellness spa in Sector 1, Greater Noida. Experience luxury treatments by expert therapists — available 24 hours a day, every day.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          >
            <Link to="/booking" className="btn-primary text-base px-10 py-5 shadow-luxury-lg">
              Book Appointment
              <FiArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-outline-white text-base px-10 py-5">
              Explore Services
            </Link>
          </motion.div>

          {/* Info Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <div className="w-8 h-8 rounded-full bg-spa-dark/10 backdrop-blur-sm flex items-center justify-center">
                <FiClock size={14} className="text-gold-400" />
              </div>
              <div>
                <div className="text-white font-medium text-xs">Hours</div>
                <div className="text-white/60 text-xs">Open 24/7</div>
              </div>
            </div>
            <div className="w-px h-8 bg-spa-dark/20 self-center" />
            <a
              href={SPA_INFO.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-spa-dark/10 backdrop-blur-sm flex items-center justify-center">
                <FiMapPin size={14} className="text-gold-400" />
              </div>
              <div>
                <div className="text-white font-medium text-xs">Location</div>
                <div className="text-white/60 text-xs">Sector 1, Greater Noida</div>
              </div>
            </a>
            <div className="w-px h-8 bg-spa-dark/20 self-center" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-spa-dark/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-sm">⭐</span>
              </div>
              <div>
                <div className="text-white font-medium text-xs">{SPA_INFO.rating} Rating</div>
                <div className="text-white/60 text-xs">{SPA_INFO.reviews} Reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Stat Cards */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-20 right-8 lg:right-20 flex flex-col gap-3 hidden md:flex"
      >
        {/* Happy clients card */}
        <div className="glass-card p-4 flex items-center gap-3 max-w-[200px]">
          <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-xl flex-shrink-0">
            😊
          </div>
          <div>
            <div className="text-xl font-bold text-white font-serif">10K+</div>
            <div className="text-xs text-nude-300">Happy Clients</div>
          </div>
        </div>
        {/* Open 24/7 card */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="glass-card p-4 flex items-center gap-3 max-w-[200px]"
        >
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <div>
            <div className="text-sm font-bold text-white">Open Now</div>
            <div className="text-xs text-nude-300">24 Hours • 7 Days</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-spa-dark/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
