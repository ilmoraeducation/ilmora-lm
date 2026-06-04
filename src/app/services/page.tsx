import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServicesPageContent } from "./services-content";
import { ClientWrapper } from "@/components/layout/client-wrapper";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ILMORA's comprehensive service ecosystem — from university admissions and visa processing to UAE equivalency and career guidance.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPageContent />
      </main>
      <Footer />
      <ClientWrapper />
    </>
  );
}
