import { motion } from 'framer-motion';
import { FiExternalLink, FiMapPin } from 'react-icons/fi';
import { SPA_INFO } from '../../utils/constants';

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl overflow-hidden border border-white/10 shadow-luxury group relative bg-spa-dark"
    >
      {/* Floating Header Overlay */}
      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start pointer-events-none">
        <div className="bg-spa-dark/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white/20 pointer-events-auto">
          <div className="font-serif font-bold text-white text-sm flex items-center gap-2">
            <FiMapPin className="text-gold-500" />
            Dev Unisex Spa
          </div>
          <div className="text-xs text-nude-300 mt-1 pl-6">Sector 1, Greater Noida</div>
        </div>

        <a
          href={SPA_INFO.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all duration-300 pointer-events-auto hover:-translate-y-0.5"
        >
          Get Directions
          <FiExternalLink size={12} />
        </a>
      </div>

      {/* Embedded Map */}
      <div className="relative h-80 sm:h-96 w-full bg-spa-dark/5">
        <iframe
          title="Dev Unisex Spa Location"
          src={SPA_INFO.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale-[20%] contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        />
      </div>
    </motion.div>
  );
};

export default Map;
