import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiStar } from 'react-icons/fi';
import { pageTransition, staggerContainer, staggerItem } from '../utils/animations';

// Import all model images
import girl1 from '../assets/model/girl1.jpeg';
import girl2 from '../assets/model/girl2.jpeg';
import girl3 from '../assets/model/girl3.jpeg';
import girl4 from '../assets/model/girl4.jpeg';
import girl5 from '../assets/model/girl5.jpeg';
import girl6 from '../assets/model/girl6.jpeg';
import girl7 from '../assets/model/girl7.jpeg';
import girl8 from '../assets/model/girl8.jpg.jpeg';
import girl9 from '../assets/model/girl9.jpg.jpeg';
import girl10 from '../assets/model/girl10.jpeg';
import girls11 from '../assets/model/girls11.jpeg';
import girls12 from '../assets/model/girls12.jpeg';
import girls13 from '../assets/model/girls13.jpeg';
import girls14 from '../assets/model/girls14.jpeg';
import girls15 from '../assets/model/girls15.jpeg';
import girls16 from '../assets/model/girls16.jpeg';
import girls17 from '../assets/model/girls17.jpeg';
import girls18 from '../assets/model/girls18.jpeg';
import girls19 from '../assets/model/girls19.jpeg';
import girls20 from '../assets/model/girls20.jpeg';
import girls21 from '../assets/model/girls21.jpeg';
import girls22 from '../assets/model/girls22.jpeg';
import girls23 from '../assets/model/girls23.jpeg';
import girls24 from '../assets/model/girls24.jpeg';

const allModels = [
  { id: 1, name: 'Ananya Sharma', img: girl1, specialty: 'Bridal & Glam Makeup' },
  { id: 2, name: 'Priya Mehta', img: girl2, specialty: 'Skin & Facial Care' },
  { id: 3, name: 'Kavya Nair', img: girl3, specialty: 'Hair Styling Expert' },
  { id: 4, name: 'Divya Kapoor', img: girl4, specialty: 'Body Spa & Wellness' },
  { id: 5, name: 'Shreya Iyer', img: girl5, specialty: 'Nail Art Specialist' },
  { id: 6, name: 'Pooja Reddy', img: girl6, specialty: 'Massage Therapist' },
  { id: 7, name: 'Riya Joshi', img: girl7, specialty: 'Aromatherapy Expert' },
  { id: 8, name: 'Meera Pillai', img: girl8, specialty: 'Deep Cleanse Facial' },
  { id: 9, name: 'Sneha Gupta', img: girl9, specialty: 'Hair Colour Artist' },
  { id: 10, name: 'Tanvi Bhat', img: girl10, specialty: 'Anti-Ageing Specialist' },
  { id: 11, name: 'Aditi Verma', img: girls11, specialty: 'Eyebrow Threading' },
  { id: 12, name: 'Nisha Pandey', img: girls12, specialty: 'Waxing & Grooming' },
  { id: 13, name: 'Swati Kulkarni', img: girls13, specialty: 'Keratin Treatment' },
  { id: 14, name: 'Pallavi Singh', img: girls14, specialty: 'Eyelash Extensions' },
  { id: 15, name: 'Kriti Dubey', img: girls15, specialty: 'Head Massage Therapy' },
  { id: 16, name: 'Ankita Rao', img: girls16, specialty: 'Pedicure & Manicure' },
  { id: 17, name: 'Monika Tiwari', img: girls17, specialty: 'Smoothening & Rebonding' },
  { id: 18, name: 'Deepika Mishra', img: girls18, specialty: 'Gold Facial Treatment' },
  { id: 19, name: 'Bharti Saxena', img: girls19, specialty: 'Protein Hair Treatment' },
  { id: 20, name: 'Simran Sethi', img: girls20, specialty: 'Tan Removal Expert' },
  { id: 21, name: 'Jyoti Malhotra', img: girls21, specialty: 'Foot Reflexology' },
  { id: 22, name: 'Rekha Chauhan', img: girls22, specialty: 'Body Polishing' },
  { id: 23, name: 'Sunita Rawat', img: girls23, specialty: 'Threading & Cleanup' },
  { id: 24, name: 'Geetanjali Das', img: girls24, specialty: 'Luxury Spa Rituals' },
];

const ModelsPage = () => {
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
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
            alt="Models Hero"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/80 via-transparent to-spa-dark" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag mb-6 inline-block"
          >
            Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Meet Our{' '}
            <span className="gradient-text italic">Beauty Artists</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-nude-200 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Our curated team of skilled beauty professionals are here to transform
            your look and elevate your confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors duration-300"
            >
              <FiArrowLeft size={18} />
              Back to Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="section-padding bg-spa-dark">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {allModels.map((model) => (
              <motion.div
                key={model.id}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.15)' }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={model.img}
                    alt={model.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark via-spa-dark/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Star badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.4)' }}>
                    <FiStar size={14} className="text-gold-400" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="text-white font-serif font-bold text-base mb-1 leading-tight">
                    {model.name}
                  </h3>
                  <p className="text-gold-400 text-xs font-medium leading-relaxed">
                    {model.specialty}
                  </p>
                </div>

                {/* Hover overlay CTA */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(10,8,20,0.75)', backdropFilter: 'blur(4px)' }}>
                  <p className="text-white font-serif font-bold text-lg mb-1">{model.name}</p>
                  <p className="text-gold-400 text-xs mb-4">{model.specialty}</p>
                  <Link
                    to="/booking"
                    className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-luxury"
                    style={{ background: 'linear-gradient(135deg, #d4af37, #b8860b)' }}
                  >
                    Book With Her
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-nude-300 text-lg mb-6">
              Ready to experience the magic of our beauty artists?
            </p>
            <Link
              to="/booking"
              className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-lg"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ModelsPage;
