import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import { servicesData } from '../../data/servicesData';
import SectionTitle from '../common/SectionTitle';
import { staggerContainer, staggerItem, cardHover } from '../../utils/animations';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative overflow-hidden rounded-3xl luxury-card cursor-pointer"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/70 via-transparent to-transparent" />

        {/* Popular badge */}
        {service.popular && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-white text-xs font-medium rounded-full">
            Popular
          </div>
        )}

        {/* Category */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-spa-dark/20 backdrop-blur-sm border border-white/30 text-white text-xs rounded-full">
          {service.category}
        </div>

        {/* Icon overlay */}
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-spa-dark/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-lg">
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold-600 transition-colors duration-300">
            {service.title}
          </h3>
          <span className="text-xl font-bold text-gold-600 font-serif flex-shrink-0">
            {service.price}
          </span>
        </div>

        <p className="text-nude-300 text-sm leading-relaxed mb-4 line-clamp-2">
          {service.shortDesc}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-white/60 text-xs">
            <FiClock size={12} />
            <span>{service.duration}</span>
          </div>

          <Link
            to={`/services`}
            className="flex items-center gap-1.5 text-gold-600 text-sm font-medium hover:gap-3 transition-all duration-300 group/link"
          >
            Book Now
            <FiArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Bottom gradient border on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-spa-dark">
      <div className="container-custom">
        <SectionTitle
          tag="Our Services"
          title="Luxury Spa"
          titleHighlight="Treatments"
          subtitle="Discover our comprehensive range of premium wellness and beauty services, each designed to restore harmony and radiance to your mind, body, and soul."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-14"
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link to="/services" className="btn-secondary">
            View All Services
            <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
