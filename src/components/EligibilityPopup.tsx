"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function EligibilityPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Show the popup after a short delay (e.g., 2 seconds) when the page loads.
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('eligibilityPopupClosed')) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 2000);

    const handleOpenPopup = () => setIsOpen(true);
    window.addEventListener('openEligibilityPopup', handleOpenPopup);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('openEligibilityPopup', handleOpenPopup);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('eligibilityPopupClosed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#0B1120] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative w-full max-w-lg overflow-hidden z-10"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D7B93] to-[#1E527D]"></div>
            
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2 pr-8">Check Your Eligibility Today</h3>
            <p className="text-gray-400 text-sm mb-6">Find out which government schemes and funding your business qualifies for.</p>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Business Name</label>
                <input type="text" className="w-full px-4 py-3 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-white transition-all placeholder:text-gray-600" placeholder="Enter business name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Contact Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-white transition-all placeholder:text-gray-600" placeholder="Enter mobile number" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Business Type</label>
                <select className="w-full px-4 py-3 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-white transition-all appearance-none">
                  <option className="bg-[#111827]">Select Type</option>
                  <option className="bg-[#111827]">New Startup</option>
                  <option className="bg-[#111827]">Existing MSME</option>
                  <option className="bg-[#111827]">Individual/Freelancer</option>
                </select>
              </div>
              <button type="button" onClick={closePopup} className="w-full bg-gradient-to-r from-[#2D7B93] to-[#1E527D] hover:from-[#3a9cb7] hover:to-[#256499] text-white py-4 rounded-xl font-bold text-lg mt-4 transition-all shadow-lg shadow-blue-900/20">
                Get Callback
              </button>
            </form>
            <p className="text-xs text-center text-gray-500 mt-5">
              By submitting, you agree to our terms. 100% Privacy Guaranteed.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
