"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-[#080D18] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400">
            Have questions about business registration or funding? Our experts are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B1120] p-8 rounded-2xl shadow-sm border border-white/5 flex items-start gap-4 hover:border-white/10 transition-colors"
            >
              <div className="bg-blue-500/10 p-4 rounded-xl text-blue-400">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-100 mb-1">Call Us</h4>
                <p className="text-gray-400">+91 98765 43210</p>
                <p className="text-gray-500 text-sm mt-1">Mon-Sat, 9AM-6PM</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0B1120] p-8 rounded-2xl shadow-sm border border-white/5 flex items-start gap-4 hover:border-white/10 transition-colors"
            >
              <div className="bg-blue-500/10 p-4 rounded-xl text-blue-400">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-100 mb-1">Email Us</h4>
                <p className="text-gray-400">consult@pinakaadvisory.com</p>
                <p className="text-gray-500 text-sm mt-1">Online support</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0B1120] p-8 rounded-2xl shadow-sm border border-white/5 flex items-start gap-4 hover:border-white/10 transition-colors"
            >
              <div className="bg-blue-500/10 p-4 rounded-xl text-blue-400">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-100 mb-1">Visit Us</h4>
                <p className="text-gray-400 leading-relaxed">123 Business Avenue, Sector 62, Noida, UP 201309</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[#0B1120] rounded-3xl p-8 sm:p-12 shadow-xl border border-white/5"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">First Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-[#111827] text-white rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none transition-all placeholder:text-gray-600" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Last Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-[#111827] text-white rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none transition-all placeholder:text-gray-600" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-[#111827] text-white rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none transition-all placeholder:text-gray-600" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-4 bg-[#111827] text-white rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none transition-all placeholder:text-gray-600" placeholder="+91" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Your Message</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-[#111827] text-white rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-600" placeholder="Tell us about your business needs..."></textarea>
              </div>

              <button type="button" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#2D7B93] to-[#1E527D] hover:from-[#3a9cb7] hover:to-[#256499] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_30px_rgba(45,123,147,0.3)] w-full sm:w-auto">
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
