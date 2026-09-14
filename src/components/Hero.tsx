"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Users, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32 bg-[#0B1120] text-white">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-[#2D7B93]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              आपके SUCCESS का सारथी!
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Your Business Deserves the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Right Growth Partner.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed font-medium">
              Empowering Indian Startups & MSMEs to Grow and Build an Atmanirbhar Bharat. Expert consulting for government funding, compliance, and strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="#contact" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#2D7B93] to-[#1E527D] hover:from-[#3a9cb7] hover:to-[#256499] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_40px_rgba(45,123,147,0.3)]">
                Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#services" className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold transition-all backdrop-blur-sm">
                Explore Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-300">
                <Shield className="h-5 w-5 text-blue-400" /> Govt. Recognized
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-300">
                <Users className="h-5 w-5 text-blue-400" /> 2000+ MSMEs
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-300">
                <TrendingUp className="h-5 w-5 text-blue-400" /> Pan India Reach
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1120] to-transparent opacity-80 z-10 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Consulting Meeting" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
              
              <div className="absolute bottom-8 left-8 right-8 bg-[#0B1120]/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 z-20">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-[#2D7B93] to-[#1E527D] p-4 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">₹10L - ₹1Cr+</div>
                    <div className="text-sm text-blue-300 font-bold uppercase tracking-wider">Funding Unlocked</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
