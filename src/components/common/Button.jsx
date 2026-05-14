import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  onClick,
  href,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gold-500 text-white hover:bg-gold-600 focus:ring-gold-500 shadow-luxury hover:shadow-luxury-lg hover:-translate-y-0.5',
    secondary: 'border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white focus:ring-gold-500 hover:-translate-y-0.5',
    outline: 'border-2 border-white text-white hover:bg-spa-dark hover:text-white focus:ring-white hover:-translate-y-0.5',
    ghost: 'text-gold-600 hover:bg-gold-50 focus:ring-gold-500',
    dark: 'bg-spa-dark text-white hover:bg-spa-darker focus:ring-spa-dark shadow-lg hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-base',
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  const content = (
    <>
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && !loading && <span>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
