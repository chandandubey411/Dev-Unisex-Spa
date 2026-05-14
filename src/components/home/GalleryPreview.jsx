import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { galleryData } from '../../data/galleryData';
import SectionTitle from '../common/SectionTitle';
import { FiArrowRight, FiZoomIn } from 'react-icons/fi';
import { staggerContainer, staggerItem } from '../../utils/animations';

const GalleryPreview = () => {
  const previewImages = galleryData.slice(0, 6);

  return (
    <section className="section-padding bg-spa-dark">
      <div className="container-custom">
        <SectionTitle
          tag="Photo Gallery"
          title="A Glimpse of"
          titleHighlight="Our Sanctuary"
          subtitle="Step inside our world of luxury and tranquility. Every corner of Dev Unisex Spa is designed to inspire peace and rejuvenation."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14"
        >
          {previewImages.map((image, idx) => (
            <motion.div
              key={image.id}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                idx === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${idx === 0 ? 'h-full min-h-[350px]' : 'h-44 md:h-48'}`}>
                <img
                  src={image.thumb}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-spa-dark/0 group-hover:bg-spa-dark/50 transition-all duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="w-12 h-12 rounded-full bg-spa-dark/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <FiZoomIn size={18} className="text-white" />
                  </motion.div>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-spa-dark/90 to-transparent">
                  <div className="text-white text-sm font-medium">{image.title}</div>
                  <div className="text-white/60 text-xs">{image.category}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link to="/gallery" className="btn-primary">
            View Full Gallery
            <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
