import React from 'react';

const ACCENT = '#3DF5F5';

const ModalActions = ({ onAccept }) => {
  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            borderColor: ACCENT,
            color: ACCENT,
            boxShadow: '0 0 0 0 rgba(0,0,0,0)',
          }}
        >
          View Terms
        </a>

        <button
          type="button"
          onClick={onAccept}
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98]"
          style={{
            backgroundColor: ACCENT,
            color: '#0f1419',
          }}
        >
          Accept & Continue
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-white/60">
        Effective from November 2025 — Version 2.0
      </p>
    </div>
  );
};

export default ModalActions;
