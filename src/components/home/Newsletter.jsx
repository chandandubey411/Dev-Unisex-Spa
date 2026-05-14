import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gold-500 via-gold-400 to-nude-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-60 h-60 rounded-full bg-spa-dark/10 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-60 h-60 rounded-full bg-spa-dark/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-3"
          >
            Get Exclusive Wellness Offers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 mb-8"
          >
            Subscribe to receive special deals, seasonal offers, and expert wellness tips.
          </motion.p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-4 px-8 bg-spa-dark/20 backdrop-blur-sm rounded-2xl text-white"
            >
              <span className="text-2xl mr-3">🎉</span>
              Thank you! You're now subscribed to exclusive spa offers.
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-full bg-spa-dark/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white/60 transition-colors text-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-spa-dark text-gold-600 font-semibold rounded-full hover:bg-spa-dark/5 transition-colors duration-300 text-sm whitespace-nowrap disabled:opacity-70"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </motion.form>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-xs mt-4"
          >
            No spam, ever. Unsubscribe anytime. By subscribing, you agree to our Privacy Policy.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
