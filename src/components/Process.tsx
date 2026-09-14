"use client";

import { motion } from 'framer-motion';
import { PhoneCall, FileText, Send, Landmark } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall className="w-8 h-8" />,
    title: "Get Consultation",
    desc: "Connect with our experts to discuss your business needs and eligibility."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Documentation",
    desc: "We help you gather and prepare all the necessary documents seamlessly."
  },
  {
    icon: <Send className="w-8 h-8" />,
    title: "Application",
    desc: "We file and follow up on your applications with the respective authorities."
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Approval",
    desc: "Receive your funding, registration, or compliance certificates successfully."
  }
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-24 bg-[#080D18] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">From Application to Approval</h2>
          <p className="text-xl text-gray-400">Our streamlined 4-step process ensures you get the results without the hassle.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-gradient-to-r from-[#2D7B93]/0 via-[#2D7B93] to-[#2D7B93]/0 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-[#0B1120] border-2 border-[#2D7B93] flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_30px_rgba(45,123,147,0.2)]">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
