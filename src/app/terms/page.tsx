import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ClientWrapper } from "@/components/layout/client-wrapper";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/50 leading-relaxed">
            <p>
              <strong className="text-white">Last updated:</strong> June 2025
            </p>
            <p>
              Welcome to ILMORA Education Group. By accessing or using our
              website and services, you agree to be bound by these Terms of
              Service.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Services
            </h2>
            <p>
              ILMORA Education Group provides educational consulting services
              including university admissions guidance, visa processing
              assistance, UAE equivalency services, career counseling, and
              scholarship assistance. Our services are advisory in nature and we
              strive to provide the highest quality guidance to our students.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and truthful information in all applications</li>
              <li>Respond to communications in a timely manner</li>
              <li>Understand that university admissions decisions are made solely by the institutions</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Disclaimer
            </h2>
            <p>
              While we strive for excellence in all our services, ILMORA does
              not guarantee admission to any specific university or institution.
              Admissions decisions are made entirely by the respective
              universities. We provide expert guidance to maximize your chances
              of success.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Contact
            </h2>
            <p>
              For questions about these terms, please contact us at{" "}
              <a href="mailto:info@ilmora.com" className="text-violet-400 hover:underline">
                info@ilmora.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <ClientWrapper />
    </>
  );
}
