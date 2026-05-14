import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';
import { cn } from '../../utils/helpers';

const SectionTitle = ({
  tag,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(`flex flex-col gap-4 ${alignClasses[align]}`, className)}
    >
      {tag && (
        <motion.span
          variants={staggerItem}
          className={cn(
            'section-tag',
            dark && 'bg-spa-dark/10 border-white/20 text-gold-300'
          )}
        >
          {tag}
        </motion.span>
      )}

      <motion.h2
        variants={staggerItem}
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight',
          dark ? 'text-white' : 'text-white'
        )}
      >
        {titleHighlight ? (
          <>
            {title}{' '}
            <span className="gradient-text">{titleHighlight}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={staggerItem}
          className={cn(
            'text-base md:text-lg leading-relaxed max-w-2xl',
            dark ? 'text-white/70' : 'text-nude-200',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div
        variants={staggerItem}
        className={cn('flex items-center gap-3', alignClasses[align])}
      >
        <div className={cn('h-px flex-1 max-w-12', dark ? 'bg-spa-dark/20' : 'bg-gold-200')} />
        <div className={cn('w-2 h-2 rounded-full', dark ? 'bg-gold-400' : 'bg-gold-500')} />
        <div className={cn('w-8 h-0.5 rounded-full', dark ? 'bg-gold-400' : 'bg-gold-500')} />
        <div className={cn('w-2 h-2 rounded-full', dark ? 'bg-gold-400' : 'bg-gold-500')} />
        <div className={cn('h-px flex-1 max-w-12', dark ? 'bg-spa-dark/20' : 'bg-gold-200')} />
      </motion.div>
    </motion.div>
  );
};

export default SectionTitle;
