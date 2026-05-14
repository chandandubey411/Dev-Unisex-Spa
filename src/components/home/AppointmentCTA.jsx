import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SPA_INFO } from '../../utils/constants';

const AppointmentCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1400&q=80"
          alt="Spa CTA background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-spa-dark/95 via-spa-dark/80 to-gold-900/70" />
      </div>

      {/* Decorative circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-gold-500/20 opacity-50"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-gold-500/10 opacity-50"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag bg-spa-dark/10 border-white/20 text-gold-300 mb-6 inline-block"
          >
            Book Your Visit
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
          >
            Ready to Experience{' '}
            <span className="text-gold-400 italic">Pure Bliss?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed mb-10"
          >
            Book your appointment today and let our expert therapists take you on a journey of relaxation and renewal. Available 24 hours, 7 days a week.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/booking" className="btn-primary text-base px-10 py-5 shadow-luxury-lg">
              Book Appointment
              <FiArrowRight size={18} />
            </Link>
            <a
              href={SPA_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-base px-10 py-5"
            >
              <FaWhatsapp size={20} />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Contact Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <FiPhone size={14} className="text-gold-400" />
              <a href={SPA_INFO.phoneLink} className="hover:text-white transition-colors">
                {SPA_INFO.phone}
              </a>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open 24 Hours
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
