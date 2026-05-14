import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiCheck, FiX } from 'react-icons/fi';
import { servicesData } from '../../data/servicesData';
import { TIME_SLOTS, SPA_INFO } from '../../utils/constants';
import { getTodayDate, validateEmail, validatePhone } from '../../utils/helpers';
import { modalVariants } from '../../utils/animations';

const SuccessModal = ({ onClose, bookingData }) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-spa-dark/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative z-10 bg-spa-dark rounded-4xl p-10 max-w-md w-full text-center shadow-2xl"
      >
        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          >
            <FiCheck size={36} className="text-green-500" />
          </motion.div>
        </div>

        <h3 className="text-2xl font-serif font-bold text-white mb-3">
          Booking Confirmed! 🎉
        </h3>
        <p className="text-nude-300 mb-6 leading-relaxed">
          Your appointment has been successfully booked at <strong>Dev Unisex Spa</strong>. 
          We'll send a confirmation to <strong>{bookingData.email}</strong>.
        </p>

        {/* Booking summary */}
        <div className="bg-spa-darker rounded-2xl p-5 mb-6 text-left space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-nude-300">Service</span>
            <span className="text-white font-medium">{bookingData.service}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-nude-300">Date</span>
            <span className="text-white font-medium">{bookingData.date}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-nude-300">Time</span>
            <span className="text-white font-medium">{bookingData.time}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-nude-300">Name</span>
            <span className="text-white font-medium">{bookingData.name}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={SPA_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 bg-green-500 text-white rounded-2xl text-sm font-medium hover:bg-green-600 transition-colors"
          >
            Confirm via WhatsApp
          </a>
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-gold-500 text-white rounded-2xl text-sm font-medium hover:bg-gold-600 transition-colors"
          >
            Done
          </button>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const BookingForm = () => {
  const today = getTodayDate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: today,
    time: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Enter a valid 10-digit mobile number';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time slot';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate booking API call
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', phone: '', email: '', service: '', date: today, time: '', message: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name + Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              <FiUser size={14} className="inline mr-1.5 text-gold-500" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`input-luxury ${errors.name ? 'border-red-300 bg-red-50/30' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              <FiPhone size={14} className="inline mr-1.5 text-gold-500" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className={`input-luxury ${errors.phone ? 'border-red-300 bg-red-50/30' : ''}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            <FiMail size={14} className="inline mr-1.5 text-gold-500" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={`input-luxury ${errors.email ? 'border-red-300 bg-red-50/30' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Select Service *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`input-luxury ${errors.service ? 'border-red-300 bg-red-50/30' : ''}`}
          >
            <option value="">-- Choose a service --</option>
            {servicesData.map(service => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>

        {/* Date + Time Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              <FiCalendar size={14} className="inline mr-1.5 text-gold-500" />
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              className={`input-luxury ${errors.date ? 'border-red-300 bg-red-50/30' : ''}`}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              <FiClock size={14} className="inline mr-1.5 text-gold-500" />
              Preferred Time *
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`input-luxury ${errors.time ? 'border-red-300 bg-red-50/30' : ''}`}
            >
              <option value="">-- Select time --</option>
              {TIME_SLOTS.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Special Requests (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Any specific requirements, allergies, or preferences..."
            className="input-luxury resize-none"
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-2xl transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Processing Booking...
            </>
          ) : (
            'Confirm Appointment'
          )}
        </motion.button>

        <p className="text-center text-white/60 text-xs">
          By booking, you agree to our terms. We'll confirm via call/WhatsApp within 30 minutes.
        </p>
      </form>

      {/* Success Modal */}
      {showSuccess && (
        <SuccessModal
          onClose={() => setShowSuccess(false)}
          bookingData={formData}
        />
      )}
    </>
  );
};

export default BookingForm;
