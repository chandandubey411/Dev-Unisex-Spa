// Helper utility functions

/**
 * Format number with Indian comma notation
 */
export const formatIndianNumber = (num) => {
  if (num >= 10000000) return (num / 10000000).toFixed(1) + 'Cr';
  if (num >= 100000) return (num / 100000).toFixed(1) + 'L';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Generate star rating JSX array
 */
export const generateStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => ({
    key: i,
    filled: i < Math.floor(rating),
    half: i === Math.floor(rating) && rating % 1 !== 0,
  }));
};

/**
 * Debounce function for scroll/resize events
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Smooth scroll to element by ID
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

/**
 * Get current date in YYYY-MM-DD format
 */
export const getTodayDate = () => {
  return new Date().toISOString().split('T')[0];
};

/**
 * Add days to a date
 */
export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString().split('T')[0];
};

/**
 * Format date to readable string
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Validate email format
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Validate Indian phone number
 */
export const validatePhone = (phone) => {
  const re = /^[6-9]\d{9}$/;
  return re.test(phone.replace(/\s+/g, ''));
};

/**
 * Convert price string to number
 */
export const priceToNum = (priceStr) => {
  return parseInt(priceStr.replace(/[^\d]/g, ''), 10);
};

/**
 * Class names utility (simple version without clsx)
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Lazy load image with fallback
 */
export const getImageUrl = (url, width = 800, quality = 80) => {
  if (!url) return 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80';
  if (url.includes('unsplash.com')) {
    return `${url.split('?')[0]}?w=${width}&q=${quality}&auto=format&fit=crop`;
  }
  return url;
};
