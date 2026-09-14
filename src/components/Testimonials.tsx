"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ramesh Kumar",
    company: "TechFlow Solutions",
    text: "Pinaka Advisory made our Startup India registration seamless. We got our DIPP recognition within weeks!"
  },
  {
    name: "Sunita Sharma",
    company: "Organic Bakes",
    text: "Securing the MUDRA loan was a breeze thanks to their incredible team. They handled all the bank paperwork."
  },
  {
    name: "Vikram Singh",
    company: "VKS Manufacturing",
    text: "Their compliance services are top-notch. I never have to worry about GST or ROC filings anymore."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-24 bg-[#0B1120] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-400">Trusted by over 2000+ MSMEs and Startups across India.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111827] p-8 rounded-3xl border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              <p className="text-gray-300 italic mb-8 relative z-10">"{testimonial.text}"</p>
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-blue-400 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
