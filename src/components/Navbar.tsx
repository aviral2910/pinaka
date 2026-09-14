"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 min-h-[5.5rem]">
          <Link href="/" className="flex items-center">
            <Logo className="w-56 md:w-64 h-auto" />
          </Link>
          
          <nav className="hidden xl:flex gap-6">
            <Link href="#" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wide">Home</Link>
            <Link href="#about" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wide">About</Link>
            <Link href="#services" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wide">Services</Link>
            <Link href="#schemes" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wide">Schemes</Link>
            <Link href="#process" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wide">Process</Link>
            <Link href="#testimonials" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wide">Testimonials</Link>
            <Link href="#contact" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wide">Contact</Link>
          </nav>

          <div className="hidden xl:flex">
            <Link href="#schemes" className="bg-gradient-to-r from-[#2D7B93] to-[#1E527D] hover:from-[#3a9cb7] hover:to-[#256499] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-500/20 border border-blue-400/20 whitespace-nowrap">
              Check Eligibility
            </Link>
          </div>

          <button 
            className="xl:hidden text-gray-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden border-t border-white/10 bg-[#0B1120] overflow-hidden shadow-xl"
          >
            <div className="px-6 pt-4 pb-8 flex flex-col gap-6">
              <Link href="#" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-200 hover:text-white">Home</Link>
              <Link href="#about" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-200 hover:text-white">About Us</Link>
              <Link href="#services" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-200 hover:text-white">Services</Link>
              <Link href="#schemes" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-200 hover:text-white">Schemes</Link>
              <Link href="#process" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-200 hover:text-white">Process</Link>
              <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-200 hover:text-white">Testimonials</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-200 hover:text-white">Contact</Link>
              <Link href="#schemes" onClick={() => setIsOpen(false)} className="bg-gradient-to-r from-[#2D7B93] to-[#1E527D] text-white text-center px-6 py-4 rounded-xl font-bold mt-4 shadow-md">
                Check Eligibility
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
