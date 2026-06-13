import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { fadeLeft, fadeRight, staggerContainer, staggerItem } from '../../utils/animations';

const AboutPreview = () => {
  const highlights = [
    "Open 24 hours, 7 days a week",
    "Expert certified therapists",
    "100% organic & natural products",
    "Personalized treatment plans",
    "Premium hygienic facilities",
    "Over 10,000 satisfied clients",
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-spa-dark via-spa-darker to-spa-darker">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-4xl overflow-hidden shadow-luxury-lg">
              <img
                src="https://images.unsplash.com/photo-1591343395082-e120087004b4?w=700&q=80"
                alt="Dev Unisex Spa Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/30 to-transparent" />
            </div>

            {/* Floating card - experience */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card p-5 shadow-luxury z-10"
            >
              <div className="text-4xl font-serif font-bold gradient-text">5+</div>
              <div className="text-sm text-nude-300 font-medium">Years of Excellence</div>
            </motion.div>

            {/* Floating card - rating */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-card p-5 shadow-luxury z-10"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-gold-500 text-sm">★</span>
                  ))}
                </div>
                <span className="text-white font-bold">4.9</span>
              </div>
              <div className="text-xs text-white/60">500+ Google Reviews</div>
            </motion.div>

            {/* Decorative shape */}
            <div className="absolute -z-10 -inset-8 rounded-4xl bg-gold-500/5 blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.span variants={staggerItem} className="section-tag w-fit">
              About Dev Unisex Spa
            </motion.span>

            <motion.h2
              variants={staggerItem}
              className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight"
            >
              Where Luxury Meets{' '}
              <span className="gradient-text italic">Wellness</span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-nude-200 leading-relaxed text-lg"
            >
              Dev Unisex Spa is Greater Noida's premier luxury wellness destination, nestled in the heart of Sector 1. We blend ancient healing traditions with modern therapeutic techniques to deliver an unmatched spa experience.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-nude-200 leading-relaxed"
            >
              Our team of certified therapists, our commitment to using only the finest organic products, and our state-of-the-art facilities make every visit a transformative journey toward total well-being.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
            >
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <FiCheckCircle size={16} className="text-gold-500 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={staggerItem} className="flex items-center gap-4 mt-2">
              <Link to="/about" className="btn-primary">
                Our Story
                <FiArrowRight size={16} />
              </Link>
              <a href={`tel:087962 86821`} className="btn-secondary">
                Call Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
