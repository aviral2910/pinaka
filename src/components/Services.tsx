"use client";

import { motion } from 'framer-motion';
import { 
  Building2, 
  Landmark, 
  FileCheck2, 
  TrendingUp, 
  Laptop,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Landmark className="h-10 w-10" />,
    title: "Government Funding",
    description: "Assistance with MUDRA, CGTMSE, and startup-specific grants. We check eligibility, handle documentation, and process applications.",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:bg-blue-500/20"
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Business Registration",
    description: "End-to-end support for incorporating Private Limited companies, LLPs, Partnerships, and OPCs efficiently.",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-500/20"
  },
  {
    icon: <FileCheck2 className="h-10 w-10" />,
    title: "Compliance & Filings",
    description: "Post-registration compliance work, GST filing, and mandatory government filings to ensure businesses remain in good standing.",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20 group-hover:bg-purple-500/20"
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Strategic Consultancy",
    description: "Beyond registrations, we offer guidance on business strategy to help startups and MSMEs scale their operations.",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20 group-hover:bg-orange-500/20"
  },
  {
    icon: <Laptop className="h-10 w-10" />,
    title: "Digital Marketing",
    description: "Digital marketing services, including social media management and development of professional websites or portfolios.",
    color: "bg-pink-500/10 text-pink-400 border-pink-500/20 group-hover:bg-pink-500/20"
  }
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 bg-[#080D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Our Key Services
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            We simplify business complexities and help entrepreneurs navigate government-related processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#0B1120] rounded-3xl p-8 shadow-sm hover:shadow-[0_0_30px_rgba(45,123,147,0.15)] border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`inline-flex p-4 rounded-2xl mb-6 border transition-all duration-300 group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">{service.description}</p>
              
              <Link href="#contact" className="inline-flex items-center gap-2 text-base font-bold text-blue-400 hover:text-blue-300 mt-auto transition-colors">
                Know More
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
