import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
};

export default Overlay;
