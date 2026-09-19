"use client";

import { motion } from 'framer-motion';
import { SchemeData } from '@/data/schemes';
import { IndianRupee, Percent, Clock, FileCheck, CheckCircle2, FileText, Activity } from 'lucide-react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SchemeDetailClient({ scheme }: { scheme: SchemeData }) {
  const handleOpenPopup = () => {
    window.dispatchEvent(new Event('openEligibilityPopup'));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      
      <Link href="/schemes" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Schemes
      </Link>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#111827] border border-white/10 rounded-3xl p-8 lg:p-12 mb-12 relative overflow-hidden"
      >
        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${scheme.color}`}></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start lg:items-center justify-between">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-gray-300 mb-6">
              {scheme.badge}
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {scheme.name}
            </h1>
            <p className="text-xl text-gray-400 font-medium mb-6">
              {scheme.subtitle}
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              {scheme.overview}
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={handleOpenPopup} className="bg-gradient-to-r from-[#2D7B93] to-[#1E527D] hover:from-[#3a9cb7] hover:to-[#256499] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2">
                Check Eligibility Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-auto bg-[#0B1120] border border-white/10 rounded-2xl p-6 min-w-[300px] shadow-xl">
            <h3 className="text-white font-bold text-lg mb-6 border-b border-white/10 pb-4">Key Highlights</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${scheme.color} bg-opacity-10 backdrop-blur-sm`}>
                  <IndianRupee className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Funding Range</p>
                  <p className="font-semibold text-white">{scheme.range}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${scheme.color} bg-opacity-10 backdrop-blur-sm`}>
                  <Percent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Subsidy/Grant</p>
                  <p className="font-semibold text-white">{scheme.subsidy}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${scheme.color} bg-opacity-10 backdrop-blur-sm`}>
                  <FileCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Collateral</p>
                  <p className="font-semibold text-white">{scheme.collateral}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${scheme.color} bg-opacity-10 backdrop-blur-sm`}>
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Success Rate</p>
                  <p className="font-semibold text-emerald-400">{scheme.success}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Details Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#111827] border border-white/10 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-[#2D7B93]" />
              Who is Eligible?
            </h2>
            <ul className="space-y-4">
              {scheme.eligibility.map((item, i) => (
                <li key={i} className="flex gap-4 text-gray-300">
                  <span className="w-6 h-6 rounded-full bg-[#2D7B93]/20 text-[#2D7B93] flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#111827] border border-white/10 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="text-orange-400" />
              Key Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {scheme.benefits.map((item, i) => (
                <div key={i} className="bg-[#0B1120] border border-white/5 rounded-2xl p-5 flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#111827] border border-white/10 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileCheck className="text-purple-400" />
              Required Documents
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {scheme.documents.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5">
                  <FileCheck className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[#2D7B93]/20 to-[#1E527D]/20 border border-[#2D7B93]/30 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-6">Application Process</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                {scheme.process.map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0B1120] text-[#2D7B93] font-bold text-sm shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-[#0B1120]/50 border border-white/10">
                      <div className="font-bold text-white text-sm mb-1">{step.step}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}

// Need to import ArrowRight for the button
import { ArrowRight } from 'lucide-react';
