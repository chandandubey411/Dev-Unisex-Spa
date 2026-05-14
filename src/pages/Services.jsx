import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock, FiFilter } from 'react-icons/fi';
import { servicesData } from '../data/servicesData';
import SectionTitle from '../components/common/SectionTitle';
import AppointmentCTA from '../components/home/AppointmentCTA';
import { staggerContainer, staggerItem, pageTransition } from '../utils/animations';

const categories = ['All', 'Face', 'Body', 'Hair', 'Beauty', 'Wellness'];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

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
          <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&q=80" alt="Services Hero" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/80 via-transparent to-spa-dark" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag mb-6 inline-block"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Premium Spa{' '}
            <span className="gradient-text italic">Treatments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-nude-200 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Explore our full range of luxury wellness and beauty treatments, each crafted to rejuvenate your body, mind, and spirit.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-spa-dark">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-white shadow-luxury'
                    : 'bg-white/5 text-nude-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((service) => (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="group luxury-card rounded-3xl overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/70 via-transparent to-transparent" />
                  {service.popular && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-white text-xs font-bold rounded-full">
                      Popular
                    </div>
                  )}
                  <div className="absolute top-4 right-4 text-2xl">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 px-2 py-0.5 bg-spa-dark/20 backdrop-blur-sm text-white text-xs rounded-full">
                    {service.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-serif font-bold text-white">{service.title}</h3>
                    <span className="text-gold-600 font-bold font-serif ml-2 flex-shrink-0">{service.price}</span>
                  </div>
                  <p className="text-nude-300 text-sm leading-relaxed mb-4 line-clamp-2">{service.shortDesc}</p>

                  {/* Features */}
                  <div className="space-y-1 mb-5">
                    {service.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-nude-300">
                        <span className="w-1 h-1 rounded-full bg-gold-400 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-white/60 text-xs">
                      <FiClock size={12} />
                      {service.duration}
                    </div>
                    <Link
                      to="/booking"
                      state={{ service: service.title }}
                      className="flex items-center gap-1.5 text-gold-600 text-sm font-medium hover:gap-3 transition-all duration-300"
                    >
                      Book Now <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AppointmentCTA />
    </motion.div>
  );
};

export default ServicesPage;
