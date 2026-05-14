import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiAward, FiHeart, FiUsers } from 'react-icons/fi';
import SectionTitle from '../components/common/SectionTitle';
import { TEAM_MEMBERS, STATS, BENEFITS, SPA_INFO } from '../utils/constants';
import { staggerContainer, staggerItem, fadeLeft, fadeRight, pageTransition } from '../utils/animations';
import Stats from '../components/home/Stats';
import Team from '../components/home/Team';
import AppointmentCTA from '../components/home/AppointmentCTA';

const AboutHero = () => (
  <section className="pt-32 pb-20 relative overflow-hidden bg-spa-dark">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80" alt="About Hero" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/80 via-transparent to-spa-dark" />
    </div>

    <div className="container-custom relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.span variants={staggerItem} className="section-tag w-fit">Our Story</motion.span>
          <motion.h1
            variants={staggerItem}
            className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight"
          >
            Welcome to{' '}
            <span className="gradient-text italic">Dev Unisex Spa</span>
          </motion.h1>
          <motion.p variants={staggerItem} className="text-nude-200 text-lg leading-relaxed">
            Dev Unisex Spa was founded with a singular vision: to create Noida's most exceptional wellness sanctuary where every guest experiences true luxury and healing.
          </motion.p>
          <motion.p variants={staggerItem} className="text-nude-300 leading-relaxed">
            Located in the heart of Sector-119, The Aranya Hotmart Market, our spa combines time-tested therapeutic traditions with innovative modern wellness techniques, delivered by our highly-trained team of certified therapists.
          </motion.p>
          <motion.div variants={staggerItem} className="flex gap-4">
            <Link to="/booking" className="btn-primary">
              Book Experience <FiArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-secondary">View Services</Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="relative rounded-4xl overflow-hidden shadow-luxury-lg aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1591343395082-e120087004b4?w=700&q=80"
              alt="Dev Unisex Spa"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Stats overlay */}
          <div className="absolute -bottom-8 -left-8 glass-card p-6 shadow-luxury">
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "10K+", label: "Clients" },
                { val: "5+", label: "Years" },
                { val: "4.9", label: "Rating" },
                { val: "24/7", label: "Open" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold font-serif gradient-text">{s.val}</div>
                  <div className="text-xs text-nude-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Mission = () => (
  <section className="section-padding bg-spa-dark">
    <div className="container-custom">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: FiAward, title: "Our Mission", text: "To provide a sanctuary of healing and beauty, where every client experiences transformative wellness through expert care and premium treatments.", color: "bg-gold-50 text-gold-600 border-gold-200" },
          { icon: FiHeart, title: "Our Vision", text: "To be recognized as Noida's leading luxury wellness destination, pioneering innovative spa experiences that inspire total well-being.", color: "bg-blush-50 text-blush-600 border-blush-200" },
          { icon: FiUsers, title: "Our Values", text: "Excellence, compassion, integrity, and innovation guide every interaction. We celebrate individuality and create personalized experiences for each guest.", color: "bg-sage-50 text-sage-600 border-sage-200" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="text-center p-8 rounded-3xl border border-white/10 bg-spa-darker/50 hover:shadow-card-hover transition-all duration-500"
            whileHover={{ y: -4 }}
          >
            <div className={`w-16 h-16 rounded-2xl border ${item.color} flex items-center justify-center mx-auto mb-5`}>
              <item.icon size={28} />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3">{item.title}</h3>
            <p className="text-nude-300 leading-relaxed text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AboutHero />
      <Mission />
      <Stats />
      <Team />
      <AppointmentCTA />
    </motion.div>
  );
};

export default About;
