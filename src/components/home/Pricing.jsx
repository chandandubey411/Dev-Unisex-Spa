import { motion } from 'framer-motion';
import { pricingData } from '../../data/pricingData';
import SectionTitle from '../common/SectionTitle';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PricingCard = ({ plan, index }) => {
  return (
    <motion.div
      variants={staggerItem}
      className={`relative rounded-4xl overflow-hidden ${
        plan.popular
          ? 'shadow-luxury-lg scale-105 z-10'
          : 'shadow-card'
      }`}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="px-6 py-1.5 bg-gold-500 text-white text-xs font-bold tracking-wider uppercase rounded-b-2xl">
            {plan.badge}
          </div>
        </div>
      )}

      <div className={`h-full flex flex-col ${
        plan.popular
          ? 'bg-gradient-to-br from-gold-500 to-nude-600 text-white pt-10'
          : 'bg-spa-dark border border-white/10 pt-8'
      }`}>
        <div className="px-8 pb-8">
          {/* Plan name */}
          <h3 className={`text-2xl font-serif font-bold mb-1 ${plan.popular ? 'text-white' : 'text-white'}`}>
            {plan.name}
          </h3>
          <p className={`text-sm mb-6 ${plan.popular ? 'text-white/80' : 'text-nude-300'}`}>
            {plan.subtitle}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-2">
            <span className={`text-5xl font-bold font-serif ${plan.popular ? 'text-white' : 'text-white'}`}>
              {plan.price}
            </span>
          </div>
          <div className={`text-sm mb-8 ${plan.popular ? 'text-white/70' : 'text-white/60'}`}>
            {plan.duration}
          </div>

          {/* CTA */}
          <Link
            to="/booking"
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-medium text-sm transition-all duration-300 ${
              plan.popular
                ? 'bg-spa-dark text-gold-600 hover:bg-spa-dark/5'
                : 'bg-gold-500 text-white hover:bg-gold-600'
            }`}
          >
            {plan.ctaText}
            <FiArrowRight size={14} />
          </Link>
        </div>

        {/* Divider */}
        <div className={`h-px mx-8 ${plan.popular ? 'bg-spa-dark/20' : 'bg-cream-200'}`} />

        {/* Features */}
        <div className="px-8 py-8 flex-1">
          <div className={`text-xs font-semibold uppercase tracking-wider mb-4 ${plan.popular ? 'text-white/70' : 'text-white/60'}`}>
            What's included
          </div>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  plan.popular ? 'bg-spa-dark/20' : 'bg-gold-50 border border-gold-200'
                }`}>
                  <FiCheck size={11} className={plan.popular ? 'text-white' : 'text-gold-600'} />
                </div>
                <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-white'}`}>
                  {feature}
                </span>
              </li>
            ))}
            {plan.notIncluded.map((feature, idx) => (
              <li key={`no-${idx}`} className="flex items-center gap-3 opacity-50">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  plan.popular ? 'bg-spa-dark/10' : 'bg-nude-100'
                }`}>
                  <FiX size={11} className={plan.popular ? 'text-white' : 'text-white/60'} />
                </div>
                <span className={`text-sm line-through ${plan.popular ? 'text-white/60' : 'text-white/60'}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-spa-dark to-spa-darker">
      <div className="container-custom">
        <SectionTitle
          tag="Pricing Plans"
          title="Transparent &"
          titleHighlight="Affordable Packages"
          subtitle="Choose the perfect wellness package that suits your needs and budget. All prices are inclusive of taxes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-14"
        >
          {pricingData.map((plan, idx) => (
            <PricingCard key={plan.id} plan={plan} index={idx} />
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/60 text-sm mt-10"
        >
          * Prices may vary based on specific services. Contact us for custom packages and group bookings.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
