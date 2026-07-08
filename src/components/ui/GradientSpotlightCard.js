'use client';
import { motion } from 'motion/react';

const gradients = {
  violet: 'linear-gradient(135deg, #6C3BDC 0%, #4A1F8C 100%)',
  magenta: 'linear-gradient(135deg, #D946EF 0%, #9B1DAD 100%)',
  orange: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  coral: 'linear-gradient(135deg, #F43F5E 0%, #BE123C 100%)',
};

const GradientSpotlightCard = ({
  children,
  variant = 'violet',
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl p-6 sm:p-8 ${className}`}
      style={{ background: gradients[variant] || gradients.violet }}
      whileHover={{ scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-1 opacity-30 blur-xl"
        style={{ background: gradients[variant] || gradients.violet }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GradientSpotlightCard;