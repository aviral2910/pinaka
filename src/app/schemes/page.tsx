"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { schemesData } from '@/data/schemes';
import { Search, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EligibilityPopup from '@/components/EligibilityPopup';

const categories = ["All", "Loan", "Grant", "Subsidy", "Equity", "Debt", "Certificate"];

export default function SchemesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSchemes = schemesData.filter((scheme) => {
    const matchesCategory = activeCategory === "All" || scheme.category === activeCategory;
    const matchesSearch = scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          scheme.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          scheme.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Loan': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Grant': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Subsidy': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'Equity': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'Debt': return 'text-teal-400 bg-teal-400/10 border-teal-400/20';
      case 'Certificate': return 'text-pink-400 bg-pink-400/10 border-pink-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-[#2D7B93] selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                    activeCategory === category 
                      ? 'bg-gradient-to-r from-[#2D7B93] to-[#1E527D] text-white border-transparent shadow-lg shadow-blue-900/20' 
                      : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search schemes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#111827] border border-white/10 rounded-full text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSchemes.map((scheme, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={scheme.id}
                >
                  <Link href={`/schemes/${scheme.slug}`} className="block h-full">
                    <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:border-[#2D7B93]/50 hover:bg-white/[0.03] transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                      
                      {/* Avatar */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-5 bg-gradient-to-br ${scheme.color} bg-opacity-20 text-white shadow-inner border border-white/10`}>
                        {scheme.avatar}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#2D7B93] transition-colors">
                        {scheme.shortName}
                      </h3>
                      <p className="text-xs text-gray-500 mb-4 font-medium tracking-wide uppercase">
                        {scheme.authority}
                      </p>
                      <p className="text-sm text-gray-300 mb-8 flex-grow leading-relaxed">
                        {scheme.tagline}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <span className={`px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${getCategoryColor(scheme.category)}`}>
                          {scheme.category}
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 group-hover:text-[#2D7B93] transition-colors">
                          Know More
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredSchemes.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-gray-400 text-lg">No schemes found matching your search.</p>
                <button 
                  onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                  className="mt-4 text-[#2D7B93] hover:text-white transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
      <EligibilityPopup />
    </div>
  );
}
