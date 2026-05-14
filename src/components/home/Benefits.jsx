import { motion } from 'framer-motion';
import { BENEFITS } from '../../utils/constants';
import SectionTitle from '../common/SectionTitle';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Benefits = () => {
  return (
    <section className="section-padding bg-spa-dark">
      <div className="container-custom">
        <SectionTitle
          tag="Why Choose Us"
          title="The Dev Unisex Spa"
          titleHighlight="Difference"
          subtitle="We believe every person deserves the finest wellness experience. Here's what sets us apart from every other spa in Noida."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14"
        >
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="group relative rounded-3xl overflow-hidden bg-spa-darker border border-white/10 hover:shadow-luxury-lg hover:border-gold-500/50 transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              {/* Image Background */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-spa-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-darker to-transparent z-20" />
              </div>

              {/* Content */}
              <div className="p-8 pt-4 relative z-30">
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-nude-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gold-500 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
