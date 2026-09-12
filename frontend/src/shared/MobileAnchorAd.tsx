"use client";

import { useEffect } from "react";

const adsenseClientId =
  process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID?.trim() ?? "";

export function MobileAnchorAd() {
  const isConfigured = /^ca-pub-\d+$/.test(adsenseClientId);

  useEffect(() => {
    if (!isConfigured) return;

    const script = document.createElement("script");
    script.id = "google-adsense-mobile-anchor";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.dataset.overlays = "bottom";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adsenseClientId)}`;
    document.head.append(script);

    return () => script.remove();
  }, [isConfigured]);

  if (!isConfigured) {
    if (process.env.NODE_ENV !== "development") return null;

    return (
      <aside className="mobile-anchor-ad mobile-anchor-ad-preview" aria-label="모바일 광고 미리보기">
        <span>광고</span>
        <strong>모바일 하단 광고 영역</strong>
      </aside>
    );
  }

  return <div className="mobile-anchor-ad" aria-hidden="true" />;
}
