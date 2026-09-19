"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-[#2D7B93] selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111827] border border-white/10 p-8 sm:p-12 rounded-3xl shadow-xl">
            <h1 className="text-3xl sm:text-4xl font-black mb-8 text-[#ff5722]">Privacy Policy</h1>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
                <p>Welcome to Pinaka Advisory LLP. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. The Data We Collect About You</h2>
                <p className="mb-2">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                  <li><strong>Business Data:</strong> includes your company name, industry, and funding requirements.</li>
                  <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Data</h2>
                <p className="mb-2">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To provide consultancy and advisory services to your business.</li>
                  <li>To process and manage your applications for government schemes, loans, and subsidies.</li>
                  <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
                  <li>To communicate with you regarding your application status.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Data Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. Third-Party Links</h2>
                <p>This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">6. Contact Details</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                <div className="mt-2 bg-white/5 p-4 rounded-xl border border-white/10">
                  <p><strong>Email:</strong> consult@pinakaadvisory.com</p>
                  <p><strong>Phone:</strong> +91 8796670959</p>
                  <p><strong>Address:</strong> PLOT NO 3 khasra 1896 kanha nagar, KALLI PASCHIM LUCKNOW UP 226014, INDIA</p>
                </div>
              </section>
            </div>
            
            <div className="mt-12 pt-6 border-t border-white/10 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
