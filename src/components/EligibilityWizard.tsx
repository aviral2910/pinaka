"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Building2, Briefcase, Rocket, Factory, Stethoscope, Store, Coins, Wallet, Landmark } from 'lucide-react';
import { useRouter } from 'next/navigation';

const steps = [
  {
    title: "What type of business do you have?",
    options: [
      { id: "startup", label: "Startup (0-3 years)", icon: Rocket },
      { id: "msme", label: "MSME / SME", icon: Briefcase },
      { id: "planning", label: "Planning to Start", icon: Building2 },
    ]
  },
  {
    title: "Which sector does your business belong to?",
    options: [
      { id: "manufacturing", label: "Manufacturing", icon: Factory },
      { id: "service", label: "Service Sector", icon: Stethoscope },
      { id: "trading", label: "Trading & Retail", icon: Store },
    ]
  },
  {
    title: "How much funding are you looking for?",
    options: [
      { id: "up-to-10l", label: "Up to ₹10 Lakh", icon: Wallet },
      { id: "10l-1cr", label: "₹10L – ₹1 Crore", icon: Coins },
      { id: "1cr-plus", label: "₹1 Cr+", icon: Landmark },
    ]
  }
];

export default function EligibilityWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    stage: "",
    sector: "",
    amount: ""
  });
  
  const handleOptionClick = (optionId: string) => {
    const newAnswers = { ...answers };
    if (currentStep === 0) newAnswers.stage = optionId;
    else if (currentStep === 1) newAnswers.sector = optionId;
    else if (currentStep === 2) newAnswers.amount = optionId;

    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentStep < 2) {
        setCurrentStep(prev => prev + 1);
      } else {
        // Navigate to results page with query params
        const query = new URLSearchParams({
          stage: newAnswers.stage,
          sector: newAnswers.sector,
          amount: newAnswers.amount
        }).toString();
        router.push(`/eligibility-results?${query}`);
      }
    }, 400); // slight delay for animation feel
  };

  return (
    <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
      
      {/* Wizard Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-gray-300">
          <CheckCircle2 className="w-4 h-4 text-[#ff5722]" />
          Free Eligibility Check
        </div>
      </div>

      {/* Progress Bars */}
      <div className="flex gap-2 mb-8">
        {[0, 1, 2].map((stepIndex) => (
          <div key={stepIndex} className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#ff5722] to-[#ff7b00]"
              initial={{ width: stepIndex < currentStep ? "100%" : "0%" }}
              animate={{ width: stepIndex <= currentStep ? "100%" : "0%" }}
              transition={{ duration: 0.4 }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Question {currentStep + 1} of 3</p>
          <h3 className="text-2xl font-bold text-white mb-6">
            {steps[currentStep].title}
          </h3>

          <div className="space-y-3">
            {steps[currentStep].options.map((option) => {
              const Icon = option.icon;
              const isSelected = 
                (currentStep === 0 && answers.stage === option.id) ||
                (currentStep === 1 && answers.sector === option.id) ||
                (currentStep === 2 && answers.amount === option.id);

              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                    isSelected 
                      ? 'border-[#ff5722]/50 bg-[#ff5722]/10 shadow-[0_0_15px_rgba(255,87,34,0.15)]' 
                      : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    isSelected ? 'bg-[#ff5722]/20 text-[#ff5722]' : 'bg-white/5 text-[#ff5722]/70'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`font-semibold ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
