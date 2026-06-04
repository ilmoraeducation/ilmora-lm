import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SuccessStoriesPageContent } from "./success-content";
import { ClientWrapper } from "@/components/layout/client-wrapper";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Read inspiring stories from ILMORA students who transformed their educational dreams into reality at world-class universities.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <SuccessStoriesPageContent />
      </main>
      <Footer />
      <ClientWrapper />
    </>
  );
}
