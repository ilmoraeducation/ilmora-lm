"use client";

import { useSmoothScroll } from "@/hooks/use-interactions";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export function ClientWrapper() {
  useSmoothScroll();

  return (
    <>
      <ScrollProgress />
    </>
  );
}
