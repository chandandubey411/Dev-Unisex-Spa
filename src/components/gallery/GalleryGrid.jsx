import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData, galleryCategories } from '../../data/galleryData';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Lightbox = ({ image, onClose, onPrev, onNext }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-spa-dark/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-spa-dark/10 hover:bg-spa-dark/20 text-white flex items-center justify-center transition-colors z-10"
      >
        <FiX size={20} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-6 w-12 h-12 rounded-full bg-spa-dark/10 hover:bg-spa-dark/20 text-white flex items-center justify-center transition-colors z-10"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative max-w-4xl w-full mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          className="w-full max-h-[80vh] object-contain rounded-2xl"
        />
        <div className="mt-4 text-center">
          <div className="text-white font-medium">{image.title}</div>
          <div className="text-white/50 text-sm mt-0.5">{image.category}</div>
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 w-12 h-12 rounded-full bg-spa-dark/10 hover:bg-spa-dark/20 text-white flex items-center justify-center transition-colors z-10"
      >
        <FiChevronRight size={24} />
      </button>
    </motion.div>
  </AnimatePresence>
);

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(img => img.category === selectedCategory);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
  const nextImage = () => setLightboxIndex(i => (i + 1) % filtered.length);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-gold-500 text-white shadow-luxury'
                : 'bg-white/5 text-nude-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
      >
        {filtered.map((image, idx) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer break-inside-avoid mb-4"
            onClick={() => openLightbox(idx)}
          >
            <img
              src={image.thumb}
              alt={image.title}
              className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-spa-dark/0 group-hover:bg-spa-dark/50 flex items-center justify-center transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-spa-dark/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <FiZoomIn size={20} className="text-white" />
              </div>
            </div>

            {/* Title on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-spa-dark/90 to-transparent">
              <div className="text-white text-sm font-medium">{image.title}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          image={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
};

export default GalleryGrid;
