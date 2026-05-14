import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../../utils/constants';
import SectionTitle from '../common/SectionTitle';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { FiInstagram } from 'react-icons/fi';

const TeamCard = ({ member }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-3xl mb-5 aspect-[3/4]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
          loading="lazy"
          style={{ objectPosition: 'top' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Social on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <a
            href="#"
            className="flex items-center gap-2 text-white text-sm hover:text-gold-400 transition-colors"
          >
            <FiInstagram size={16} />
            Follow on Instagram
          </a>
        </div>

        {/* Experience badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-gold-500 text-white text-xs font-bold rounded-full">
          {member.experience}
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold-600 transition-colors duration-300 mb-1">
          {member.name}
        </h3>
        <div className="text-gold-600 text-sm font-medium mb-1">{member.role}</div>
        <div className="text-white/60 text-xs">{member.speciality}</div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section className="section-padding bg-spa-darker">
      <div className="container-custom">
        <SectionTitle
          tag="Meet Our Experts"
          title="The Skilled"
          titleHighlight="Therapists"
          subtitle="Our certified team of wellness experts are passionate about helping you achieve total relaxation and rejuvenation."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-14"
        >
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
