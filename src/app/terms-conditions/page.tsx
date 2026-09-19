"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-[#2D7B93] selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111827] border border-white/10 p-8 sm:p-12 rounded-3xl shadow-xl">
            <h1 className="text-3xl sm:text-4xl font-black mb-8 text-[#ff5722]">Terms & Conditions</h1>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
                <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Pinaka Advisory LLP ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Services Provided</h2>
                <p>Pinaka Advisory provides consultancy services related to business registration, government schemes, funding assistance, and regulatory compliance. We act as an advisory body and do not guarantee the approval of any loans, grants, or subsidies, as these are subject to the discretion of the respective government bodies and financial institutions.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. User Representations</h2>
                <p className="mb-2">By using our services, you represent and warrant that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>All registration and business information you submit will be true, accurate, current, and complete.</li>
                  <li>You will maintain the accuracy of such information and promptly update such information as necessary.</li>
                  <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                  <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Fees and Payment</h2>
                <p>We charge consultancy fees for the services we provide. All fees are clearly communicated before the commencement of any service. You agree to provide current, complete, and accurate purchase and account information for all purchases made via our website or directly with our team.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property Rights</h2>
                <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
                <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services.</p>
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
