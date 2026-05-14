import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import GalleryGrid from '../components/gallery/GalleryGrid';
import AppointmentCTA from '../components/home/AppointmentCTA';
import { pageTransition } from '../utils/animations';

const Gallery = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-spa-dark">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1920&q=80" alt="Gallery Hero" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/80 via-transparent to-spa-dark" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag mb-6 inline-block"
          >
            Our Gallery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Visual{' '}
            <span className="gradient-text italic">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-nude-200 text-lg max-w-2xl mx-auto"
          >
            Step inside our world of luxury wellness. Each photograph tells a story of serenity, beauty, and transformation.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-spa-dark">
        <div className="container-custom">
          <GalleryGrid />
        </div>
      </section>

      <AppointmentCTA />
    </motion.div>
  );
};

export default Gallery;
