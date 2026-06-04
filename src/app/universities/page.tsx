import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { UniversitiesPageContent } from "./universities-content";
import { ClientWrapper } from "@/components/layout/client-wrapper";

export const metadata: Metadata = {
  title: "Universities",
  description:
    "Explore ILMORA's network of 200+ partner universities across 30+ countries. Find the perfect program for your academic and career goals.",
};

export default function UniversitiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <UniversitiesPageContent />
      </main>
      <Footer />
      <ClientWrapper />
    </>
  );
}
