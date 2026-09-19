"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-[#2D7B93] selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111827] border border-white/10 p-8 sm:p-12 rounded-3xl shadow-xl">
            <h1 className="text-3xl sm:text-4xl font-black mb-8 text-[#ff5722]">Refund & Cancellation Policy</h1>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. General Policy</h2>
                <p>At Pinaka Advisory LLP, we strive to provide the highest quality of consultancy and documentation services. Because our services involve dedicating time, resources, and expert advisory from the moment you onboard, our refund policy is strictly governed by the conditions outlined below.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Non-Refundable Services</h2>
                <p className="mb-2">The following services are generally non-refundable once the work has commenced:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Consultancy and advisory fees where the initial consultation has already been provided.</li>
                  <li>Drafting of documents, detailed project reports (DPR), and business plans once the drafting process has begun.</li>
                  <li>Government fees or challans paid on your behalf to any regulatory authority.</li>
                  <li>Application processing fees for schemes, loans, or subsidies, as the outcome depends entirely on the respective authority.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. Eligibility for Refund</h2>
                <p className="mb-2">You may be eligible for a partial or full refund under the following circumstances:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cancellation Before Commencement:</strong> If you cancel your service request before our team has initiated any work or documentation, you may be eligible for a full refund (minus any payment gateway charges).</li>
                  <li><strong>Service Non-Delivery:</strong> If we fail to deliver the agreed-upon services within the mutually extended timeline due to reasons solely attributable to Pinaka Advisory.</li>
                  <li><strong>Duplicate Payment:</strong> If you have accidentally made a duplicate payment for the same service.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Requesting a Refund</h2>
                <p>To request a refund or cancellation, please email us at <strong>consult@pinakaadvisory.com</strong> with your invoice number, payment details, and the reason for cancellation. Our team will review your request within 3-5 business days and notify you of the approval or rejection of your refund.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. Processing Time</h2>
                <p>If your refund is approved, it will be processed, and a credit will automatically be applied to your original method of payment within 7-14 business days, depending on your bank or payment provider.</p>
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
