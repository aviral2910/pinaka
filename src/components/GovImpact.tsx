"use client";

import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, ShieldCheck } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: "4.77+",
    unit: "Crore",
    label: "MSMEs Registered",
    sublabel: "On Udyam Portal",
    icon: Building2,
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    value: "₹50",
    unit: "K+ Cr",
    label: "Credit Facilitated",
    sublabel: "Since 2020",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: 3,
    value: "100%",
    unit: "",
    label: "Digital Process",
    sublabel: "Paperless & Transparent",
    icon: ShieldCheck,
    color: "from-purple-500 to-pink-400"
  },
  {
    id: 4,
    value: "1.2+",
    unit: "Lakh",
    label: "Startups Recognized",
    sublabel: "By DPIIT",
    icon: Users,
    color: "from-orange-500 to-amber-400"
  }
];

export default function GovImpact() {
  return (
    <section className="py-24 bg-[#05080f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 uppercase tracking-wider"
          >
            Gov Impact
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6"
          >
            Driving MSME Success Across India
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            4.77 crore MSMEs registered on the Udyam portal, transforming India's economic landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-[#0B1120] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="bg-[#111827] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                  <stat.icon className="h-6 w-6 text-gray-300" />
                </div>
                
                <div className="mb-2">
                  <span className={`text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                    {stat.value}
                  </span>
                  <span className="text-xl font-bold text-gray-300 ml-1">
                    {stat.unit}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1">{stat.label}</h3>
                <p className="text-gray-500 text-sm">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
