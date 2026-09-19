"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { schemesData } from '@/data/schemes';
import { Search, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EligibilityPopup from '@/components/EligibilityPopup';
import EligibilityWizard from '@/components/EligibilityWizard';

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
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative">
          
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-6 mt-4">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ff5722]/30 bg-[#ff5722]/10 text-[#ff5722] text-xs font-bold uppercase tracking-wider mb-6">
                Government Schemes
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                All Government <span className="text-[#ff5722]">Schemes & Programs</span>
              </h1>
              
              <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
                A complete guide to government funding schemes, subsidies, tax benefits and support programs for startups, MSMEs and entrepreneurs across India — explained in simple language, with end-to-end documentation support from Pinaka Advisory.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-eligibility'))}
                  className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors"
                >
                  Check Your Eligibility <ArrowRight className="w-5 h-5" />
                </button>
                <a 
                  href="https://wa.me/918796670959" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#8bc34a] hover:bg-[#7cb342] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" /> Talk to an Expert
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#111827] border border-white/10 p-4 rounded-2xl">
                  <div className="text-2xl font-black text-[#ff5722] mb-1">50+</div>
                  <div className="text-xs text-gray-400 font-medium">Schemes Covered</div>
                </div>
                <div className="bg-[#111827] border border-white/10 p-4 rounded-2xl">
                  <div className="text-2xl font-black text-[#ff5722] mb-1">95%</div>
                  <div className="text-xs text-gray-400 font-medium">Documentation Accuracy</div>
                </div>
                <div className="bg-[#111827] border border-white/10 p-4 rounded-2xl">
                  <div className="text-2xl font-black text-[#ff5722] mb-1">20K+</div>
                  <div className="text-xs text-gray-400 font-medium">Businesses Guided</div>
                </div>
              </div>
            </div>

            {/* Right Content - Wizard */}
            <div>
              <EligibilityWizard />
            </div>

          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

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
