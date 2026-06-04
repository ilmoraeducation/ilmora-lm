import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutPageContent } from "./about-content";
import { ClientWrapper } from "@/components/layout/client-wrapper";

export const metadata: Metadata = {
  title: "About ILMORA Education Group",
  description:
    "Learn about ILMORA Education Group — our mission, vision, values, and the team dedicated to transforming global higher education access.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
      <ClientWrapper />
    </>
  );
}
