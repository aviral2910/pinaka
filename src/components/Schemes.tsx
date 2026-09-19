"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Schemes() {
  const schemes = [
    "Pradhan Mantri MUDRA Yojana (PMMY)",
    "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
    "Startup India Seed Fund Scheme",
    "PMEGP (Prime Minister's Employment Generation Programme)",
    "Stand-Up India Scheme",
    "MSME Business Loans in 59 Minutes"
  ];

  return (
    <section id="schemes" className="scroll-mt-24 py-24 bg-gradient-to-b from-[#0B1120] to-[#080D18] relative overflow-hidden border-t border-white/5">
      
      {/* Decorative blobs */}
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
              Unlock Government Schemes & Funding
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
              Many MSMEs and Startups miss out on government benefits due to lack of awareness or complex paperwork. We bridge that gap with 100% transparency.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {schemes.map((scheme, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-gray-200">{scheme}</span>
                </div>
              ))}
            </div>

            <a href="/schemes" className="inline-flex items-center gap-2 text-[#2D7B93] font-bold text-lg hover:text-white transition-colors group">
              Explore All Schemes Detail
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0B1120] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D7B93] to-[#1E527D]"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Check Your Eligibility Today</h3>
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
              <button type="button" className="w-full bg-gradient-to-r from-[#2D7B93] to-[#1E527D] hover:from-[#3a9cb7] hover:to-[#256499] text-white py-4 rounded-xl font-bold text-lg mt-4 transition-all shadow-lg shadow-blue-900/20">
                Get Callback
              </button>
            </form>
            <p className="text-xs text-center text-gray-500 mt-5">
              By submitting, you agree to our terms. 100% Privacy Guaranteed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
