"use client";

import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { schemesData } from '@/data/schemes';
import { ArrowRight, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EligibilityPopup from '@/components/EligibilityPopup';

function ResultsContent() {
  const searchParams = useSearchParams();
  const stage = searchParams.get('stage');
  const sector = searchParams.get('sector');
  const amount = searchParams.get('amount');

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

  return (
    <main className="flex-grow pt-24 pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#111827] border-b border-white/10 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/schemes" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-6">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Wizard
          </Link>

          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-4 h-4" /> Assessment Complete
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Your Recommended Schemes
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                Based on your profile, we have identified {eligibleSchemes.length} schemes that perfectly match your business stage, sector, and funding requirements.
              </p>
            </div>
            
            <div className="bg-[#0B1120] border border-[#ff5722]/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,87,34,0.1)]">
              <h3 className="font-bold text-white mb-2">Ready to apply?</h3>
              <p className="text-sm text-gray-400 mb-4">Our experts handle the end-to-end documentation for you.</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-eligibility'))}
                  className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors"
                >
                  Start Application
                </button>
                <a 
                  href="https://wa.me/918796670959" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eligibleSchemes.map((scheme) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
