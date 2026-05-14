import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import BookingForm from '../components/booking/BookingForm';
import { SPA_INFO } from '../utils/constants';
import { FiPhone, FiClock, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { pageTransition } from '../utils/animations';

const Booking = () => {
  const location = useLocation();
  const preSelectedService = location.state?.service;

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
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80" alt="Booking Hero" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/80 via-transparent to-spa-dark" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag mb-6 inline-block"
          >
            Book Appointment
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Reserve Your{' '}
            <span className="gradient-text italic">Wellness Session</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-nude-200 text-lg max-w-2xl mx-auto"
          >
            Secure your spot at Dev Unisex Spa. We're open 24/7 so you can book any time that suits you.
          </motion.p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding bg-spa-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form - 3 cols */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-spa-dark rounded-4xl border border-white/10 shadow-card p-8"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-serif font-bold text-white mb-2">Complete Your Booking</h2>
                  <p className="text-nude-300 text-sm">Fill in the form below and we'll confirm your appointment within 30 minutes.</p>
                </div>
                <BookingForm />
              </motion.div>
            </div>

            {/* Info Sidebar - 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Spa info card */}
                <div className="relative rounded-3xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80"
                    alt="Dev Unisex Spa"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/90 to-transparent flex items-end p-6">
                    <div>
                      <div className="text-white font-serif font-bold text-lg">Dev Unisex Spa</div>
                      <div className="text-gold-400 text-sm">Sector-119, Noida</div>
                    </div>
                  </div>
                </div>

                {/* Contact info */}
                <div className="space-y-4">
                  {[
                    { Icon: FiPhone, title: "Call to Book", value: SPA_INFO.phone, href: SPA_INFO.phoneLink, color: "bg-blue-50 text-blue-600" },
                    { Icon: FaWhatsapp, title: "WhatsApp Us", value: "Chat instantly", href: SPA_INFO.social.whatsapp, color: "bg-green-50 text-green-600" },
                    { Icon: FiClock, title: "Opening Hours", value: "Open 24 Hours, 7 Days", href: null, color: "bg-gold-50 text-gold-600" },
                    { Icon: FiMapPin, title: "Our Location", value: SPA_INFO.shortAddress, href: SPA_INFO.mapLink, color: "bg-blush-50 text-blush-600" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-spa-darker border border-white/10"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <item.Icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white">{item.title}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-sm text-nude-300 hover:text-gold-600 transition-colors truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm text-green-600 font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Booking note */}
                <div className="mt-6 p-5 bg-gold-500/5 rounded-3xl border border-gold-500/20">
                  <div className="flex gap-3">
                    <span className="text-xl">💡</span>
                    <div>
                      <div className="font-semibold text-gold-400 text-sm mb-1">Booking Policy</div>
                      <p className="text-nude-300 text-xs leading-relaxed">
                        Bookings are confirmed via WhatsApp/call within 30 mins. Please arrive 10 minutes early. Cancellations require 2 hours notice.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Booking;
