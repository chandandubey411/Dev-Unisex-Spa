import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock, FiStar, FiUsers } from 'react-icons/fi';
import { servicesData } from '../data/servicesData';
import SectionTitle from '../components/common/SectionTitle';
import AppointmentCTA from '../components/home/AppointmentCTA';
import { staggerContainer, staggerItem, pageTransition } from '../utils/animations';

// Model image imports
import girl1 from '../assets/model/girl1.jpeg';
import girl2 from '../assets/model/girl2.jpeg';
import girl3 from '../assets/model/girl3.jpeg';

const featuredModels = [
  { id: 1, name: 'Ananya Sharma', specialty: 'Bridal & Glam Makeup', img: girl1 },
  { id: 2, name: 'Priya Mehta', specialty: 'Skin & Facial Care', img: girl2 },
  { id: 3, name: 'Kavya Nair', specialty: 'Hair Styling Expert', img: girl3 },
];

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
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
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

      {/* Meet Our Models */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #0a0814 0%, #0f0c1f 100%)' }}>
        <div className="container-custom">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-tag mb-4 inline-block">Our Beauty Artists</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Meet Our{' '}
              <span className="gradient-text italic">Models</span>
            </h2>
            <p className="text-nude-300 text-lg max-w-xl mx-auto leading-relaxed">
              Skilled professionals dedicated to bringing out your best look with every visit.
            </p>
          </motion.div>

          {/* 3 Model Preview Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12"
          >
            {featuredModels.map((model) => (
              <motion.div
                key={model.id}
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
                }}
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={model.img}
                    alt={model.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark via-spa-dark/30 to-transparent" />
                  {/* Star badge */}
                  <div
                    className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(212,175,55,0.25)', border: '1px solid rgba(212,175,55,0.5)' }}
                  >
                    <FiStar size={15} className="text-gold-400" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="text-white font-serif font-bold text-xl mb-1">{model.name}</h3>
                  <p className="text-gold-400 text-sm font-medium">{model.specialty}</p>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(10,8,20,0.80)', backdropFilter: 'blur(6px)' }}
                >
                  <p className="text-white font-serif font-bold text-xl mb-1">{model.name}</p>
                  <p className="text-gold-400 text-sm mb-5">{model.specialty}</p>
                  <Link
                    to="/booking"
                    className="px-6 py-2.5 rounded-full text-sm font-semibold text-white hover:shadow-luxury transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg,#d4af37,#b8860b)' }}
                  >
                    Book With Her
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <Link
              to="/models"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-lg text-white transition-all duration-300 hover:shadow-luxury hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(184,134,11,0.1))',
                border: '1.5px solid rgba(212,175,55,0.5)',
              }}
            >
              <FiUsers size={20} className="text-gold-400" />
              <span>View All Models</span>
              <FiArrowRight
                size={18}
                className="text-gold-400 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <AppointmentCTA />
    </motion.div>
  );
};

export default ServicesPage;
