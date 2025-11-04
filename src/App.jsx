import React, { useState } from 'react';
import TermsModal from './components/TermsModal';

const App = () => {
  const [open, setOpen] = useState(true);

  const handleAccept = () => {
    setOpen(false);
    // You can plug in your own logic here, e.g., API call or local storage flag
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundColor: '#0f1419',
        backgroundImage: 'radial-gradient(1200px 400px at 50% -10%, rgba(61,245,245,0.08), transparent 60%), linear-gradient(180deg, #232C36 0%, #11131C 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
          Glitchover
        </h1>
        <p className="text-white/70 max-w-prose mx-auto">
          Welcome back! We’ve refreshed our policies to keep things clear and secure. Please review and accept the updates to continue.
        </p>
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="mt-4 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium border"
            style={{ borderColor: '#3DF5F5', color: '#3DF5F5' }}
          >
            Reopen Modal
          </button>
        )}
      </div>

      <TermsModal open={open} onAccept={handleAccept} />
    </div>
  );
};

export default App;
