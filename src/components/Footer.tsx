import Link from 'next/link';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#05080f] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <Logo className="w-56 h-auto" />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for business registration, government funding, and strategic MSME growth across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#2D7B93] hover:border-[#2D7B93] transition-all text-gray-400 hover:text-white"><Globe className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-100 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link href="#schemes" className="text-gray-400 hover:text-blue-400 transition-colors">Govt Schemes</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-100 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Business Registration</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">MSME Loans & Funding</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">GST & Compliance</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Startup Advisory</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-100 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-1" />
                <span>PLOT NO 3 khasra 1896 kanha nagar<br />KALLI PASCHIM LUCKNOW UP 226014, INDIA</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                <span>+91 8796670959</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <span>consult@pinakaadvisory.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Pinaka Advisory LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
