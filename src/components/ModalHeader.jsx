import React from 'react';

const ModalHeader = () => {
  return (
    <div className="space-y-3 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
        Updated Terms & Conditions
      </h2>
      <p className="text-sm md:text-base leading-relaxed text-white/80">
        We’ve made important updates to our Terms and Privacy Policy. Please review and accept to continue using Glitchover.
      </p>
    </div>
  );
};

export default ModalHeader;
