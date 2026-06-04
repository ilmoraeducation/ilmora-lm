import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ClientWrapper } from "@/components/layout/client-wrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/50 leading-relaxed">
            <p>
              <strong className="text-white">Last updated:</strong> June 2025
            </p>
            <p>
              ILMORA Education Group (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
              privacy and is committed to protecting your personal data. This
              privacy policy explains how we collect, use, and safeguard your
              information when you visit our website or use our services.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identification information (name, email, phone number)</li>
              <li>Educational background and academic records</li>
              <li>Documents submitted for admissions and visa processing</li>
              <li>Website usage data through cookies and analytics</li>
              <li>Communication records between you and our team</li>
            </ul>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our educational consulting services</li>
              <li>To process university applications and visa requests</li>
              <li>To communicate with you about your application status</li>
              <li>To send relevant updates about our services (with consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Data Protection
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              disclosure, or destruction. Your data is stored securely and
              accessible only to authorized personnel.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this privacy policy or our data
              practices, please contact us at{" "}
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
