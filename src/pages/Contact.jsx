import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';
import { pageTransition } from '../utils/animations';

const Contact = () => {
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
          <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80" alt="Contact Hero" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/80 via-transparent to-spa-dark" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag mb-6 inline-block"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Contact{' '}
            <span className="gradient-text italic">Dev Unisex Spa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-nude-200 text-lg max-w-2xl mx-auto"
          >
            We're here to help. Reach out to us anytime — we're open 24 hours, 7 days a week.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-spa-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-spa-dark p-8 md:p-10 rounded-4xl shadow-luxury-lg border border-white/10 h-fit"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-white mb-3">Send us a Message</h2>
                <p className="text-nude-300 leading-relaxed text-sm">
                  Have a question about our services or want to learn more? Fill out the form and our team will get back to you shortly.
                </p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 lg:pl-6"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-3">Visit Our Spa</h2>
                <p className="text-nude-300 leading-relaxed text-sm mb-6">
                  Come experience the luxury of Dev Unisex Spa in person. We're located at Rise Madison Square, Sector 1, Greater Noida.
                </p>
                <ContactInfo />
              </div>
              <Map />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
