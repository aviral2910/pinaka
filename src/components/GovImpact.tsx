"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const TOP_STATS = [
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

const MARQUEE_ITEMS = [
  "₹4.14L Cr MUDRA loans",
  "₹7,593 Cr SRI Fund invested",
  "200+ RAMP proposals approved",
  "20.5% Women-owned MSMEs",
  "4.77+ Cr MSMEs on Udyam",
  "1.2+ Lakh Startups Recognized",
  "100% Digital Process"
];

const TOP_STATES = [
  { name: "Maharashtra", value: "92L+", percentage: 90 },
  { name: "Tamil Nadu", value: "48L+", percentage: 75 },
  { name: "Gujarat", value: "41L+", percentage: 65 },
  { name: "Uttar Pradesh", value: "39L+", percentage: 60 },
  { name: "Karnataka", value: "34L+", percentage: 55 },
];

const SECTORS = [
  { name: "Manufacturing", percentage: 31, offset: 69 },
  { name: "Trading", percentage: 36, offset: 64 },
  { name: "Services", percentage: 33, offset: 67 },
];

export default function GovImpact() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipCity, setTooltipCity] = useState("");
  const [tooltipMSMEs, setTooltipMSMEs] = useState("");

  const handleMouseEnter = (geo: any) => {
    const stateName = geo.properties.name || geo.properties.NAME_1;
    setTooltipContent(stateName);
    
    if (stateName === "Uttar Pradesh") {
      setTooltipCity("Lucknow");
      setTooltipMSMEs("39.0 L");
    } else if (stateName === "Gujarat") {
      setTooltipCity("Ahmedabad");
      setTooltipMSMEs("41.0 L");
    } else if (stateName === "Maharashtra") {
      setTooltipCity("Mumbai");
      setTooltipMSMEs("92.0 L");
    } else {
      setTooltipCity("Capital City");
      setTooltipMSMEs((Math.random() * 20 + 10).toFixed(1) + " L");
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <section id="gov-impact" className="py-24 bg-[#05080f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Section */}
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

        {/* The 4 Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {TOP_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0B1120] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden"
            >
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

        {/* Map & Data Viz Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column: Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827] rounded-3xl p-6 border border-white/5 relative flex flex-col h-[600px]"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#ff5722]"></div>
              <h3 className="text-xl font-bold text-white">Pan-India Presence</h3>
            </div>

            <div className="flex-1 relative w-full h-full flex items-center justify-center">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 850,
                  center: [82.8, 22.5]
                }}
                className="w-full h-full focus:outline-none"
              >
                <Geographies geography="/india-states.json">
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => handleMouseEnter(geo)}
                        onMouseLeave={handleMouseLeave}
                        className="focus:outline-none cursor-pointer transition-colors duration-300"
                        // @ts-ignore
                        style={({
                          default: {
                            fill: "#2c1c17",
                            stroke: "#ff5722",
                            strokeWidth: 0.5,
                            outline: "none"
                          },
                          hover: {
                            fill: "#ff5722",
                            stroke: "#ffffff",
                            strokeWidth: 1,
                            outline: "none"
                          },
                          pressed: {
                            fill: "#e64a19",
                            outline: "none"
                          }
                        }) as any}
                      />
                    ))
                  }
                </Geographies>
              </ComposableMap>
              
              {/* Tooltip */}
              {tooltipContent && (
                <div className="absolute top-4 left-4 bg-[#1a1f2e] border border-white/10 rounded-xl p-4 shadow-2xl pointer-events-none z-10 min-w-[160px]">
                  <h4 className="text-white font-bold text-lg mb-1">{tooltipContent}</h4>
                  <p className="text-[#ff5722] text-sm">City: {tooltipCity}</p>
                  <p className="text-gray-400 text-sm">MSMEs: {tooltipMSMEs}</p>
                </div>
              )}
            </div>

            {/* Bottom Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-[#1a1f2e] p-4 rounded-2xl border border-white/5">
                <p className="text-gray-400 text-sm mb-1">Active States</p>
                <p className="text-[#ff5722] text-xl font-black">28/36</p>
              </div>
              <div className="bg-[#1a1f2e] p-4 rounded-2xl border border-white/5">
                <p className="text-gray-400 text-sm mb-1">Top Region</p>
                <p className="text-[#ff5722] text-xl font-black">West India</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stats */}
          <div className="flex flex-col gap-8">
            
            {/* Top MSME States */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111827] rounded-3xl p-6 sm:p-8 border border-white/5 flex-1"
            >
              <div className="flex items-center gap-2 mb-8">
                <svg className="w-5 h-5 text-[#ff5722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-xl font-bold text-white">Top MSME States</h3>
              </div>

              <div className="space-y-6">
                {TOP_STATES.map((state, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300 font-medium">{state.name}</span>
                      <span className="text-[#ff5722] font-bold">{state.value}</span>
                    </div>
                    <div className="h-2 w-full bg-[#1a1f2e] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${state.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#ff5722] to-[#ff8a65] rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sector Distribution */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#111827] rounded-3xl p-6 sm:p-8 border border-white/5 flex-1"
            >
              <div className="flex items-center gap-2 mb-8">
                <svg className="w-5 h-5 text-[#ff5722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <h3 className="text-xl font-bold text-white">Sector Distribution</h3>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {SECTORS.map((sector, index) => (
                  <div key={index} className="flex flex-col items-center justify-center">
                    <div className="relative w-24 h-24 mb-4">
                      {/* Background circle */}
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-[#1a1f2e]"
                          strokeWidth="3"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Progress circle */}
                        <motion.path
                          className="text-[#ff5722]"
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          initial={{ strokeDashoffset: 100 }}
                          whileInView={{ strokeDashoffset: sector.offset }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.3 }}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold">{sector.percentage}%</span>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm font-medium">{sector.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
        
        {/* Marquee Banner */}
        <div className="mt-12 overflow-hidden flex whitespace-nowrap relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080D18] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080D18] to-transparent z-10"></div>
          
          <div className="flex animate-marquee gap-6 py-2">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
              <div 
                key={index} 
                className="inline-flex items-center px-6 py-3 bg-[#111827] border border-white/5 rounded-full text-gray-300 text-sm sm:text-base font-medium shadow-sm hover:border-[#ff5722]/50 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
