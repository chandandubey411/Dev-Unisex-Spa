import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiInstagram, FiFacebook, FiYoutube, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SPA_INFO, NAV_LINKS, INSTAGRAM_POSTS } from '../../utils/constants';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spa-dark text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blush-500/5 blur-3xl" />
      </div>

      {/* Newsletter Strip */}
      <div className="relative border-b border-white/10">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-1">
                Join Our Wellness Community
              </h3>
              <p className="text-white/60 text-sm">Get exclusive offers, wellness tips & spa updates</p>
            </div>
            <form
              className="flex gap-3 w-full md:w-auto"
              onSubmit={(e) => { e.preventDefault(); }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 md:w-72 px-5 py-3.5 bg-spa-dark/10 border border-white/20 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-gold-400 transition-colors text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-white rounded-full font-medium text-sm transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-0 mb-6 group">
              <div className="w-16 h-16 flex items-center justify-center -ml-2 mr-1">
                <img src="/logo.png" alt="Dev Unisex Spa Logo" className="w-full h-full object-contain scale-[1.4] drop-shadow-md" />
              </div>
              <div>
                <div className="text-lg font-serif font-bold text-white">Dev Unisex Spa</div>
                <div className="text-xs text-gold-400 tracking-widest uppercase">Luxury Wellness</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Experience the pinnacle of luxury wellness at Dev Unisex Spa. Premium massage, facial, and beauty services available 24/7 in Sector-119, Noida.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FiInstagram, href: SPA_INFO.social.instagram, label: "Instagram" },
                { Icon: FiFacebook, href: SPA_INFO.social.facebook, label: "Facebook" },
                { Icon: FaWhatsapp, href: SPA_INFO.social.whatsapp, label: "WhatsApp" },
                { Icon: FiYoutube, href: SPA_INFO.social.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-spa-dark/10 hover:bg-gold-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/booking"
                  className="text-white/60 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                >
                  <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6 pb-3 border-b border-white/10">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <FiMapPin size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{SPA_INFO.address}</span>
              </li>
              <li>
                <a href={SPA_INFO.phoneLink} className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors">
                  <FiPhone size={16} className="text-gold-400 flex-shrink-0" />
                  {SPA_INFO.phone}
                </a>
              </li>
              <li>
                <a href={SPA_INFO.emailLink} className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors">
                  <FiMail size={16} className="text-gold-400 flex-shrink-0" />
                  {SPA_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <FiClock size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-green-400 font-medium">Open 24 Hours</div>
                  <div>7 Days a Week</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Instagram Grid */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6 pb-3 border-b border-white/10">
              Instagram
            </h4>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {INSTAGRAM_POSTS.map((src, idx) => (
                <a
                  key={idx}
                  href={SPA_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-xl overflow-hidden group relative"
                >
                  <img
                    src={src}
                    alt={`Instagram post ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/30 flex items-center justify-center transition-all duration-300">
                    <FiInstagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
                  </div>
                </a>
              ))}
            </div>
            <a
              href={SPA_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 text-sm flex items-center gap-1.5 transition-colors"
            >
              <FiInstagram size={14} />
              @devunisexspa
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs text-center sm:text-left">
              © {currentYear} Dev Unisex Spa. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-white/40 text-xs">
              <span>Designed with</span>
              <span className="text-blush-400">♥</span>
              <span>for luxury wellness</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
