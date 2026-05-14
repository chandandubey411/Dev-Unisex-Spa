import { motion } from 'framer-motion';
import { PRODUCTS } from '../../utils/constants';
import SectionTitle from '../common/SectionTitle';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { FiStar, FiShoppingBag } from 'react-icons/fi';

const Products = () => {
  return (
    <section className="section-padding bg-spa-darker">
      <div className="container-custom">
        <SectionTitle
          tag="Beauty Collection"
          title="Premium Spa"
          titleHighlight="Products"
          subtitle="Take the spa experience home with our carefully curated range of luxury beauty and wellness products."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={staggerItem}
              className="group luxury-card rounded-3xl overflow-hidden"
              whileHover={{ y: -6 }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-gold-500 text-white text-xs font-bold rounded-full">
                    {product.badge}
                  </div>
                )}

                {/* Quick add */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 rounded-full bg-spa-dark shadow-lg flex items-center justify-center text-white hover:bg-gold-500 hover:text-white transition-colors duration-300">
                    <FiShoppingBag size={14} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="text-xs text-gold-600 font-medium mb-1">{product.category}</div>
                <h3 className="text-sm font-semibold text-white leading-tight mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <FiStar
                        key={i}
                        size={10}
                        className={i <= Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-nude-200'}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-white/60">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-white font-serif">{product.price}</span>
                  <button className="text-xs text-gold-600 hover:text-gold-700 font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
