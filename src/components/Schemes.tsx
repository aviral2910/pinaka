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
            
            <div className="grid sm:grid-cols-2 gap-4">
              {schemes.map((scheme, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-gray-200">{scheme}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[500px] flex items-center justify-center rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1120] to-transparent opacity-60 z-10 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2070&auto=format&fit=crop" 
              alt="Business Growth" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <div className="bg-[#0B1120]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="text-2xl font-black text-white mb-1">Scale with Confidence</div>
                <p className="text-gray-300">Access up to ₹1 Crore in collateral-free funding.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
