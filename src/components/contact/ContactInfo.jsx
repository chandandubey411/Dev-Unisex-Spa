import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiInstagram, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SPA_INFO } from '../../utils/constants';
import { staggerContainer, staggerItem } from '../../utils/animations';

const contactCards = [
  {
    icon: FiPhone,
    title: "Call Us",
    content: SPA_INFO.phone,
    sub: "Available 24/7",
    href: SPA_INFO.phoneLink,
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    content: "Chat with us",
    sub: "Quick responses",
    href: SPA_INFO.social.whatsapp,
  },
  {
    icon: FiMail,
    title: "Email Us",
    content: SPA_INFO.email,
    sub: "Reply within 24 hours",
    href: SPA_INFO.emailLink,
  },
  {
    icon: FiMapPin,
    title: "Get Directions",
    content: "Sector-119",
    sub: "View on Map",
    href: SPA_INFO.mapLink,
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact cards */}
      <div className="grid grid-cols-2 gap-4">
        {contactCards.map((card, idx) => (
          <motion.a
            key={idx}
            href={card.href}
            target={card.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            variants={staggerItem}
            className="group flex flex-col p-5 sm:p-6 rounded-3xl bg-spa-dark border border-white/10 hover:border-gold-300 shadow-card hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-spa-darker text-gold-600 flex items-center justify-center mb-4 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
              <card.icon size={20} />
            </div>
            <div className="text-base font-serif font-bold text-white mb-1">{card.title}</div>
            <div className="text-sm font-medium text-nude-200 group-hover:text-gold-600 transition-colors">{card.content}</div>
            <div className="text-xs text-white/60 mt-1">{card.sub}</div>
          </motion.a>
        ))}
      </div>

      {/* Address & Hours - Premium Dark Card */}
      <motion.div
        variants={staggerItem}
        className="p-8 bg-spa-dark rounded-3xl shadow-luxury-lg relative overflow-hidden"
      >
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-spa-dark/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none" />

        <div className="flex items-start gap-4 mb-8 relative z-10">
          <div className="w-12 h-12 rounded-full bg-spa-dark/10 text-gold-400 flex items-center justify-center flex-shrink-0">
            <FiMapPin size={20} />
          </div>
          <div>
            <div className="font-serif font-bold text-white text-xl mb-2">Our Location</div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">{SPA_INFO.address}</p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex items-start gap-4 relative z-10">
          <div className="w-12 h-12 rounded-full bg-spa-dark/10 text-gold-400 flex items-center justify-center flex-shrink-0">
            <FiClock size={20} />
          </div>
          <div>
            <div className="font-serif font-bold text-white text-xl mb-2">Opening Hours</div>
            <div className="text-gold-400 font-medium text-sm">Open 24 Hours</div>
            <div className="text-white/50 text-xs mt-1">Monday — Sunday, All Days</div>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div variants={staggerItem} className="flex items-center gap-4">
        <span className="text-sm text-nude-300 font-medium tracking-wide">Connect with us:</span>
        <div className="flex gap-2">
          {[
            { Icon: FiInstagram, href: SPA_INFO.social.instagram, label: "Instagram" },
            { Icon: FiFacebook, href: SPA_INFO.social.facebook, label: "Facebook" },
            { Icon: FaWhatsapp, href: SPA_INFO.social.whatsapp, label: "WhatsApp" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-spa-dark border border-white/10 hover:bg-gold-500 hover:border-gold-500 hover:text-white text-white flex items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
