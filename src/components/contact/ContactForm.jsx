import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import { SPA_INFO } from '../../utils/constants';
import { validateEmail, validatePhone } from '../../utils/helpers';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Enter a valid email';
    if (formData.phone && !validatePhone(formData.phone)) newErrors.phone = 'Enter a valid 10-digit number';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';
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
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-6">
          <span className="text-3xl">✅</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-nude-300 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            <FiUser size={13} className="inline mr-1.5 text-gold-500" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`input-luxury ${errors.name ? 'border-red-300' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            <FiPhone size={13} className="inline mr-1.5 text-gold-500" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Optional"
            className={`input-luxury ${errors.phone ? 'border-red-300' : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          <FiMail size={13} className="inline mr-1.5 text-gold-500" />
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={`input-luxury ${errors.email ? 'border-red-300' : ''}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">Subject</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="input-luxury"
        >
          <option value="">-- Select subject --</option>
          <option>Appointment Inquiry</option>
          <option>Service Information</option>
          <option>Pricing & Packages</option>
          <option>Feedback</option>
          <option>Partnership</option>
          <option>Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          <FiMessageSquare size={13} className="inline mr-1.5 text-gold-500" />
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="How can we help you?"
          className={`input-luxury resize-none ${errors.message ? 'border-red-300' : ''}`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-2xl transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending Message...
          </>
        ) : (
          <>
            <FiSend size={16} />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
};

export default ContactForm;
