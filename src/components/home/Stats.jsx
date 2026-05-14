import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUpComponent from 'react-countup';
import { STATS } from '../../utils/constants';

const CountUp = CountUpComponent.default || CountUpComponent;

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="text-center group"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-spa-dark/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-spa-dark/20 transition-colors duration-300">
        {stat.icon}
      </div>

      {/* Number */}
      <div className="text-5xl lg:text-6xl font-serif font-bold text-white mb-2">
        {isInView ? (
          <CountUp
            start={0}
            end={stat.value}
            duration={2.5}
            separator=","
            suffix={stat.suffix}
          />
        ) : (
          <span>0{stat.suffix}</span>
        )}
      </div>

      <div className="text-white/70 text-sm font-medium tracking-wide">{stat.label}</div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1400&q=80"
          alt="Spa background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-spa-dark/85" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag bg-spa-dark/10 border-white/20 text-gold-300">Our Milestones</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mt-4">
            Numbers That{' '}
            <span className="text-gold-400 italic">Define Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
