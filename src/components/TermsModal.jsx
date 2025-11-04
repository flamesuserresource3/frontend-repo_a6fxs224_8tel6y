import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Overlay from './Overlay';
import ModalHeader from './ModalHeader';
import ModalActions from './ModalActions';

const ACCENT = '#3DF5F5';

const TermsModal = ({ open, onAccept }) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Overlay show={open} />

          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-md rounded-2xl border overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #232C36 0%, #11131C 100%)',
              borderColor: 'rgba(61, 245, 245, 0.20)',
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-title"
          >
            <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{ boxShadow: `0 0 0 1px rgba(61,245,245,0.08), 0 20px 60px -20px ${ACCENT}22` }} />

            <div className="p-6 md:p-8">
              <ModalHeader />
              <ModalActions onAccept={onAccept} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TermsModal;
