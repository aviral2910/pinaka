"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { schemesData } from '@/data/schemes';
import { IndianRupee, Percent, Clock, FileCheck, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EligibilityPopup from '@/components/EligibilityPopup';

export default function SchemesPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-[#2D7B93] selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-[#2D7B93]/20 text-[#2D7B93] font-semibold px-4 py-1.5 rounded-full text-sm mb-4 border border-[#2D7B93]/30"
            >
              Compare & Choose
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D7B93] to-[#1E527D]">Funding Match</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Compare government schemes side-by-side and choose the best option for your business growth.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {schemesData.map((scheme, index) => (
              <motion.div
                key={scheme.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={`/schemes/${scheme.slug}`} className="block h-full">
                  <div className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden hover:border-[#2D7B93]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,123,147,0.15)] hover:-translate-y-1 h-full flex flex-col group relative">
                    
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} >
                      <div className={`w-full h-full bg-gradient-to-r ${scheme.color}`}></div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${scheme.color} bg-opacity-10 backdrop-blur-sm`}>
                          <IndianRupee className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                          {scheme.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#2D7B93] transition-colors">{scheme.name}</h3>
                      <p className="text-sm text-gray-400 mb-6">{scheme.subtitle}</p>

                      <div className="space-y-4 mb-6 flex-grow">
                        <div className="flex items-center gap-3">
                          <IndianRupee className="w-4 h-4 text-[#2D7B93]" />
                          <div>
                            <p className="text-xs text-gray-500">Funding Range</p>
                            <p className="text-sm font-semibold text-gray-200">{scheme.range}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Percent className="w-4 h-4 text-[#2D7B93]" />
                          <div>
                            <p className="text-xs text-gray-500">Subsidy</p>
                            <p className="text-sm font-semibold text-gray-200">{scheme.subsidy}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-[#2D7B93]" />
                          <div>
                            <p className="text-xs text-gray-500">Processing</p>
                            <p className="text-sm font-semibold text-gray-200">{scheme.processing}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <FileCheck className="w-4 h-4 text-[#2D7B93]" />
                          <div>
                            <p className="text-xs text-gray-500">Collateral</p>
                            <p className="text-sm font-semibold text-gray-200">{scheme.collateral}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-white/10 mt-auto flex items-center justify-between text-[#2D7B93] font-semibold text-sm group-hover:text-white transition-colors">
                        View Details
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
      <EligibilityPopup />
    </div>
  );
}
