const fs = require('fs');

const data = `"use client";

import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { schemesData } from '@/data/schemes';
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingDown, Clock, Star, IndianRupee } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EligibilityPopup from '@/components/EligibilityPopup';

function ResultsContent() {
  const searchParams = useSearchParams();
  const stage = searchParams.get('stage') || '';
  const sector = searchParams.get('sector') || '';
  const amount = searchParams.get('amount') || '';

  // Human readable mappings
  const sectorDisplay = sector === 'manufacturing' ? 'Manufacturing' : sector === 'service' ? 'Service Sector' : sector === 'trading' ? 'Trading & Retail' : '';
  const amountDisplay = amount === 'up-to-10l' ? 'Up to ₹10 Lakh' : amount === '10l-1cr' ? '₹10L – ₹1 Crore' : amount === '1cr-plus' ? '₹1 Cr+' : '';

  // Filtering Logic
  const eligibleSchemes = useMemo(() => {
    const recommendedIds = new Set<string>();
    
    // Base recommendation for everyone
    recommendedIds.add("udyam-registration");

    if (amount === "up-to-10l") {
      recommendedIds.add("mudra-loan");
      recommendedIds.add("pmegp");
    }

    if (amount === "10l-1cr") {
      if (stage === "startup" || stage === "planning") {
        recommendedIds.add("stand-up-india");
      }
      recommendedIds.add("cgtmse");
      if (stage === "startup") {
        recommendedIds.add("startup-india-seed-fund");
      }
    }

    if (amount === "1cr-plus") {
      recommendedIds.add("cgtmse");
      if (sector === "manufacturing") {
        recommendedIds.add("msme-cdp");
      }
    }

    if (sector === "manufacturing") {
      recommendedIds.add("zed-certification");
      recommendedIds.add("msme-cdp");
    }

    if (stage === "startup") {
      recommendedIds.add("dpiit-recognition");
      recommendedIds.add("cgss");
    }

    // Always ensure some variety if the algorithm yields too few
    if (recommendedIds.size < 3) {
      recommendedIds.add("pmegp");
      recommendedIds.add("cgtmse");
    }

    return schemesData.filter(s => recommendedIds.has(s.slug));
  }, [stage, sector, amount]);

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

  const handleScrollToGrid = () => {
    document.getElementById('funding-options')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex-grow pt-24 pb-20">
      
      {/* Hero Section */}
      <div className="bg-[#0B1120] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/schemes" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-8 mt-4">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8bc34a]/30 bg-[#8bc34a]/10 text-[#8bc34a] text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 className="w-4 h-4" /> ELIGIBILITY CONFIRMED
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                Congratulations!<br />
                <span className="text-[#ff5722]">You're Eligible for Funding</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
                Your {sectorDisplay && <span className="text-[#ff5722] font-bold">{sectorDisplay}</span>} business qualifies for <span className="text-white font-bold">{eligibleSchemes.length} schemes</span> {amountDisplay && <>with funding <span className="text-white font-bold">{amountDisplay}</span></>}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  <Zap className="w-4 h-4 text-[#ff5722]" /> Fast Approval
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  <Shield className="w-4 h-4 text-[#ff5722]" /> Zero Collateral
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  <TrendingDown className="w-4 h-4 text-[#ff5722]" /> Low Interest
                </div>
              </div>

              <button 
                onClick={handleScrollToGrid}
                className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-colors shadow-[0_0_20px_rgba(255,87,34,0.3)]"
              >
                View Your Funding Options <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Right Stats Grid */}
            <div className="grid grid-cols-2 gap-4 relative">
              
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ff5722]/10 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="bg-[#111827] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg relative z-10">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-red-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{eligibleSchemes.length}</div>
                <div className="text-sm text-gray-500">Eligible Schemes</div>
              </div>

              <div className="bg-[#111827] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg relative z-10">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                  <IndianRupee className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">₹5Cr+</div>
                <div className="text-sm text-gray-500">Max Funding</div>
              </div>

              <div className="bg-[#111827] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg relative z-10">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">48hrs</div>
                <div className="text-sm text-gray-500">Quick Approval</div>
              </div>

              <div className="bg-[#111827] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg relative z-10">
                <div className="w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-lime-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">85%</div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Limited Offer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3">
          <Clock className="w-5 h-5 text-[#ff5722]" />
          <p className="text-sm text-gray-300">
            <span className="font-bold text-white">Limited Offer:</span> FREE consultation worth ₹5,000 — Ends in 24 hours
          </p>
        </div>
      </div>

      {/* Results Grid Section */}
      <div id="funding-options" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        
        <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-10">
          <IndianRupee className="w-8 h-8 text-[#ff5722]" />
          Your Personalized Funding Options
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eligibleSchemes.map((scheme) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={scheme.id}
            >
              <Link href={`/schemes/${scheme.slug}`} className="block h-full">
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:border-[#ff5722]/50 hover:bg-white/[0.03] transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/10">
                  
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-5 bg-gradient-to-br ${scheme.color} bg-opacity-20 text-white shadow-inner border border-white/10`}>
                    {scheme.avatar}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#ff5722] transition-colors">
                    {scheme.shortName}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 font-medium tracking-wide uppercase">
                    {scheme.authority}
                  </p>
                  <p className="text-sm text-gray-300 mb-8 flex-grow leading-relaxed">
                    {scheme.tagline}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className={`px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${getCategoryColor(scheme.category)}`}>
                      {scheme.category}
                    </span>
                    
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 group-hover:text-[#ff5722] transition-colors">
                      Know More
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
  );
}

export default function EligibilityResultsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-[#2D7B93] selection:text-white flex flex-col">
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-[#ff5722] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400 font-semibold">Analyzing your profile...</p>
          </div>
        </div>
      }>
        <ResultsContent />
      </Suspense>
      <Footer />
      <EligibilityPopup />
    </div>
  );
}
`;

fs.writeFileSync('src/app/eligibility-results/page.tsx', data);
