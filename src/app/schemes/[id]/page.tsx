import { notFound } from 'next/navigation';
import { schemesData, getSchemeBySlug } from '@/data/schemes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EligibilityPopup from '@/components/EligibilityPopup';
import SchemeDetailClient from './SchemeDetailClient';

export function generateStaticParams() {
  return schemesData.map((scheme) => ({
    id: scheme.slug,
  }));
}

export default async function SchemePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const scheme = getSchemeBySlug(resolvedParams.id);

  if (!scheme) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-[#2D7B93] selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <SchemeDetailClient scheme={scheme} />
      </main>

      <Footer />
      <EligibilityPopup />
    </div>
  );
}
