import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BlogPageContent } from "./blog-content";
import { ClientWrapper } from "@/components/layout/client-wrapper";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and expert advice on university admissions, visa processing, scholarships, and global higher education from ILMORA.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogPageContent />
      </main>
      <Footer />
      <ClientWrapper />
    </>
  );
}
