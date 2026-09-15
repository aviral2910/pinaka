"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Building2, MessageSquare, ShieldCheck, Clock, CheckCircle, IndianRupee, FileCheck, Scale, Award } from 'lucide-react';

export default function EligibilityPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Show the popup after a short delay (e.g., 2 seconds) when the page loads.
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('eligibilityPopupClosed')) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 2000);

    const handleOpenPopup = () => setIsOpen(true);
    window.addEventListener('openEligibilityPopup', handleOpenPopup);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('openEligibilityPopup', handleOpenPopup);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('eligibilityPopupClosed', 'true');
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    funding: '',
    industry: '',
    state: '',
    info: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email directly in the background using FormSubmit
      await fetch("https://formsubmit.co/ajax/618d233653e5c3d8575cc2816e0896f6", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `🚀 New Lead: ${formData.fullName} - Pinaka Advisory`,
            _template: "box",
            _captcha: "false",
            "👤 Full Name": formData.fullName,
            "✉️ Email": formData.email,
            "📱 Phone Number": formData.phone,
            "🏢 Company": formData.company || "Not Provided",
            "🛠️ Service Required": formData.service,
            "💰 Funding Range": formData.funding || "Not Provided",
            "🏭 Industry": formData.industry,
            "📍 State": formData.state,
            "📝 Additional Information": formData.info || "None"
        })
      });
      
      setIsSuccess(true);
      setTimeout(() => {
        closePopup();
        setIsSuccess(false);
        setFormData({
          fullName: '', email: '', phone: '', company: '', 
          service: '', funding: '', industry: '', state: '', info: ''
        });
      }, 3000);
      
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#0B1120] border border-white/10 rounded-3xl shadow-2xl relative w-full max-w-6xl overflow-hidden z-10 flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D7B93] to-[#1E527D] z-20"></div>
            
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10 z-20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Column - Information */}
            <div className="lg:w-2/5 p-8 lg:p-12 bg-[#080D18] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-blue-500/10 text-blue-400 font-medium px-4 py-1.5 rounded-full text-sm mb-6 border border-blue-500/20">
                  Pinaka - Your Success Partner!
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                  Everything Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D7B93] to-blue-400">Business Needs</span>
                </h2>
                
                <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
                  Share your details and our experts will map the right services, government-backed schemes and growth strategy for your business.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col">
                    <IndianRupee className="h-6 w-6 text-emerald-400 mb-3" />
                    <h4 className="text-white font-bold text-sm mb-1">Funding & Loans</h4>
                    <p className="text-gray-500 text-xs">CGTMSE, MUDRA, PMEGP & more</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col">
                    <Award className="h-6 w-6 text-orange-400 mb-3" />
                    <h4 className="text-white font-bold text-sm mb-1">Certifications</h4>
                    <p className="text-gray-500 text-xs">DPIIT, Udyam, ZED, ISO</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col">
                    <FileCheck className="h-6 w-6 text-blue-400 mb-3" />
                    <h4 className="text-white font-bold text-sm mb-1">Registration</h4>
                    <p className="text-gray-500 text-xs">Pvt Ltd, LLP, OPC & more</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col">
                    <Scale className="h-6 w-6 text-purple-400 mb-3" />
                    <h4 className="text-white font-bold text-sm mb-1">Legal & Compliance</h4>
                    <p className="text-gray-500 text-xs">GST, ROC, trademark & tax</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">2,000+</div>
                  <div className="text-xs text-gray-500 mt-1">Businesses Helped</div>
                </div>
                <div className="border-x border-white/10">
                  <div className="text-xl sm:text-2xl font-black text-white">100%</div>
                  <div className="text-xs text-gray-500 mt-1">Online Process</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">24 hrs</div>
                  <div className="text-xs text-gray-500 mt-1">Response Time</div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:w-3/5 p-8 lg:p-12 bg-[#0B1120] relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Start Your Application</h3>
              <p className="text-gray-400 text-sm mb-8">Fill in your details and we'll get back within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Details */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Personal Details</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Full Name <span className="text-red-400">*</span></label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full pl-10 pr-4 py-2.5 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-white text-sm transition-all placeholder:text-gray-600" placeholder="Enter your name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-400">*</span></label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-4 py-2.5 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-white text-sm transition-all placeholder:text-gray-600" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Phone <span className="text-red-400">*</span></label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full pl-10 pr-4 py-2.5 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-white text-sm transition-all placeholder:text-gray-600" placeholder="Enter your number" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-white text-sm transition-all placeholder:text-gray-600" placeholder="Enter company name" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Details */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Business Details</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Service Required <span className="text-red-400">*</span></label>
                      <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-2.5 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-gray-300 text-sm transition-all">
                        <option className="bg-[#111827]" value="">Select a service</option>
                        <option className="bg-[#111827]" value="Government Grants & Subsidy">Government Grants & Subsidy</option>
                        <option className="bg-[#111827]" value="MSME Loan / CGTMSE">MSME Loan / CGTMSE</option>
                        <option className="bg-[#111827]" value="Startup Funding">Startup Funding (SISFS / CGSS)</option>
                        <option className="bg-[#111827]" value="Registration & Compliance">Registration & Compliance</option>
                        <option className="bg-[#111827]" value="Digital Marketing & Website">Digital Marketing & Website</option>
                        <option className="bg-[#111827]" value="Certifications">Certifications (DPIIT, ZED, ISO)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Funding Range</label>
                      <select name="funding" value={formData.funding} onChange={handleChange} className="w-full px-4 py-2.5 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-gray-300 text-sm transition-all">
                        <option className="bg-[#111827]" value="">Select amount</option>
                        <option className="bg-[#111827]" value="Up to ₹10 Lakh">Up to ₹10 Lakh</option>
                        <option className="bg-[#111827]" value="₹10 – 50 Lakh">₹10 – 50 Lakh</option>
                        <option className="bg-[#111827]" value="₹50 Lakh – 2 Cr">₹50 Lakh – 2 Cr</option>
                        <option className="bg-[#111827]" value="₹2 Cr – 10 Cr">₹2 Cr – 10 Cr</option>
                        <option className="bg-[#111827]" value="Above ₹10 Cr">Above ₹10 Cr</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Industry <span className="text-red-400">*</span></label>
                      <select name="industry" value={formData.industry} onChange={handleChange} required className="w-full px-4 py-2.5 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-gray-300 text-sm transition-all">
                        <option className="bg-[#111827]" value="">Select industry</option>
                        <option className="bg-[#111827]" value="Manufacturing">Manufacturing</option>
                        <option className="bg-[#111827]" value="Services">Services</option>
                        <option className="bg-[#111827]" value="Trading">Trading</option>
                        <option className="bg-[#111827]" value="Technology / IT">Technology / IT</option>
                        <option className="bg-[#111827]" value="Agriculture & Food">Agriculture & Food</option>
                        <option className="bg-[#111827]" value="Textile">Textile</option>
                        <option className="bg-[#111827]" value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">State <span className="text-red-400">*</span></label>
                      <select name="state" value={formData.state} onChange={handleChange} required className="w-full px-4 py-2.5 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-gray-300 text-sm transition-all">
                        <option className="bg-[#111827]" value="">Select state</option>
                        <option className="bg-[#111827]" value="Uttar Pradesh">Uttar Pradesh</option>
                        <option className="bg-[#111827]" value="Delhi NCR">Delhi NCR</option>
                        <option className="bg-[#111827]" value="Maharashtra">Maharashtra</option>
                        <option className="bg-[#111827]" value="Gujarat">Gujarat</option>
                        <option className="bg-[#111827]" value="Karnataka">Karnataka</option>
                        <option className="bg-[#111827]" value="Rajasthan">Rajasthan</option>
                        <option className="bg-[#111827]" value="Madhya Pradesh">Madhya Pradesh</option>
                        <option className="bg-[#111827]" value="Tamil Nadu">Tamil Nadu</option>
                        <option className="bg-[#111827]" value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Additional Information</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <textarea 
                      name="info" value={formData.info} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#111827] rounded-xl border border-white/10 focus:ring-2 focus:ring-[#2D7B93] focus:border-transparent outline-none text-white text-sm transition-all placeholder:text-gray-600 min-h-[100px] resize-none" 
                      placeholder="Tell us about your business and what you need help with..."
                    ></textarea>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting || isSuccess} className="w-full bg-gradient-to-r from-[#2D7B93] to-[#1E527D] hover:from-[#3a9cb7] hover:to-[#256499] text-white py-4 rounded-xl font-bold text-lg mt-4 transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    'Submitting...'
                  ) : isSuccess ? (
                    'Application Sent! ✓'
                  ) : (
                    <>
                      Submit Application
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                  )}
                </button>
              </form>
              
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Secure & confidential</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Response in 24 hrs</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>No spam</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
