"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

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
  { name: "Manufacturing", percentage: 31, offset: 69 }, // 100 - 31
  { name: "Trading", percentage: 36, offset: 64 },
  { name: "Services", percentage: 33, offset: 67 },
];

export default function GovImpact() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipCity, setTooltipCity] = useState("");
  const [tooltipMSMEs, setTooltipMSMEs] = useState("");

  const handleMouseEnter = (geo: any) => {
    const stateName = geo.properties.NAME_1;
    setTooltipContent(stateName);
    
    // Mock data for tooltip
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
    <section id="gov-impact" className="py-24 bg-[#080D18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

            <div className="flex-1 relative w-full h-full">
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
