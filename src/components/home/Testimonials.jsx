import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonialsData } from '../../data/testimonialsData';
import SectionTitle from '../common/SectionTitle';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-spa-dark rounded-3xl p-8 shadow-card border border-white/5 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            size={16}
            className={star <= testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-nude-200'}
          />
        ))}
      </div>

      {/* Quote */}
      <div className="text-4xl text-gold-200 font-serif leading-none mb-3">"</div>

      <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6 italic">
        {testimonial.review}
      </p>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-200 to-transparent mb-6" />

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-gold-200"
            loading="lazy"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center">
            <span className="text-white text-[8px]">✓</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="font-semibold text-white text-sm">{testimonial.name}</div>
          <div className="text-xs text-white/60">{testimonial.role} • {testimonial.location}</div>
        </div>
        <div className="text-right">
          <div className="text-xs font-medium text-gold-600">{testimonial.service}</div>
          <div className="text-xs text-white/60">{testimonial.date}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-spa-dark overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          tag="Client Stories"
          title="What Our Guests"
          titleHighlight="Say About Us"
          subtitle="Real experiences from our valued clients who've discovered the transformative power of our luxury spa treatments."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 relative"
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '#testimonial-prev',
              nextEl: '#testimonial-next',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              id="testimonial-prev"
              className="w-12 h-12 rounded-full bg-spa-dark border border-white/10 shadow-card hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300 flex items-center justify-center text-white"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              id="testimonial-next"
              className="w-12 h-12 rounded-full bg-spa-dark border border-white/10 shadow-card hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300 flex items-center justify-center text-white"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Google Rating Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 bg-spa-dark rounded-3xl border border-white/10 shadow-card"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <span className="text-xl">G</span>
            </div>
            <div>
              <div className="text-sm font-medium text-white">Google Rating</div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <FiStar key={i} size={14} className="text-gold-500 fill-gold-500" />
                ))}
                <span className="text-sm font-bold text-white ml-1">4.9</span>
              </div>
            </div>
          </div>
          <div className="h-px sm:h-10 w-20 sm:w-px bg-cream-200" />
          <div className="text-center sm:text-left">
            <div className="text-2xl font-bold font-serif gradient-text">500+</div>
            <div className="text-sm text-nude-300">Verified Reviews</div>
          </div>
          <div className="h-px sm:h-10 w-20 sm:w-px bg-cream-200" />
          <div className="text-center sm:text-left">
            <div className="text-2xl font-bold font-serif gradient-text">10K+</div>
            <div className="text-sm text-nude-300">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
