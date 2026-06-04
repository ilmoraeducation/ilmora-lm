import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactPageContent } from "./contact-content";
import { ClientWrapper } from "@/components/layout/client-wrapper";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ILMORA Education Group. Start your journey to world-class education with a free consultation.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
      <ClientWrapper />
    </>
  );
}
