"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function AnalyticsTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      const query = searchParams?.toString();
      const url = pathname + (query ? `?${query}` : "");
      (window as any).gtag("config", gaId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, gaId]);

  return null;
}

export default function GoogleAnalytics({ gaId = "G-HT87NWEHNT" }: { gaId?: string }) {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker gaId={gaId} />
    </Suspense>
  );
}
