"use client";

import { motion } from 'framer-motion';
import { Target, Users2, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 bg-[#0B1120] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Pinaka Advisory?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
              We act as the 'Sarathi' (Charioteer) for your business success. We navigate the complex landscape of government regulations, schemes, and business strategy so you can focus on growing your business.
            </p>

            <div className="space-y-6">
              {[
                { icon: <ShieldCheck />, title: "100% Transparent Process", desc: "No hidden costs. Full clarity on fees and timelines." },
                { icon: <Zap />, title: "Fast & Hassle-Free", desc: "We cut through the red tape for quick approvals and registrations." },
                { icon: <Users2 />, title: "Expert Advisory Team", desc: "Professionals with years of experience in MSME growth." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-white/10">
                  <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-100">{item.title}</h4>
                    <p className="text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6 pt-12">
              <div className="bg-[#111827] p-8 rounded-3xl border border-white/5 text-center hover:border-white/10 transition-all shadow-lg">
                <div className="text-4xl font-black text-blue-400 mb-2">500+</div>
                <p className="text-gray-400 font-bold">Startups Registered</p>
              </div>
              <div className="bg-gradient-to-br from-[#2D7B93] to-[#1E527D] p-8 rounded-3xl text-white text-center shadow-xl shadow-blue-900/20 border border-blue-400/20">
                <div className="text-4xl font-black mb-2 text-[#E3CFA1]">₹50Cr+</div>
                <p className="font-bold opacity-90 text-blue-100">Funding Facilitated</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-[#111827] p-8 rounded-3xl border border-white/5 text-center hover:border-white/10 transition-all shadow-lg">
                <div className="text-4xl font-black text-emerald-400 mb-2">99%</div>
                <p className="text-gray-400 font-bold">Success Rate</p>
              </div>
              <div className="bg-[#111827] p-8 rounded-3xl border border-white/5 text-center hover:border-white/10 transition-all shadow-lg">
                <div className="text-4xl font-black text-blue-400 mb-2">24/7</div>
                <p className="text-gray-400 font-bold">Dedicated Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
