"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const adsenseClientId =
  process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID?.trim() ?? "";

function isValidClientId(value: string) {
  return /^ca-pub-\d+$/.test(value);
}

function isValidSlotId(value: string) {
  return /^\d+$/.test(value);
}

export function AdSenseSlot({
  slotId,
  placement,
  variant = "inline",
}: {
  slotId: string;
  placement: string;
  variant?: "inline" | "rail";
}) {
  const initialized = useRef(false);
  const isConfigured =
    isValidClientId(adsenseClientId) && isValidSlotId(slotId);
  const showDevelopmentPreview =
    process.env.NODE_ENV === "development" && !isConfigured;

  useEffect(() => {
    if (!isConfigured || initialized.current) return;

    let isUnmounted = false;
    const scriptId = "google-adsense";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    const script = existingScript ?? document.createElement("script");

    const initializeSlot = () => {
      if (isUnmounted || initialized.current) return;

      initialized.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle ?? []).push({});
      } catch {
        initialized.current = false;
      }
    };

    if (existingScript) {
      initializeSlot();
    } else {
      script.id = scriptId;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adsenseClientId)}`;
      script.addEventListener("load", initializeSlot, { once: true });
      document.head.append(script);
    }

    return () => {
      isUnmounted = true;
      script.removeEventListener("load", initializeSlot);
      script.remove();
    };
  }, [isConfigured, slotId]);

  if (!isConfigured) {
    if (!showDevelopmentPreview) return null;

    return (
      <aside
        className={`ad-slot ad-slot-${variant} ad-slot-preview`}
        aria-label="광고 미리보기"
        data-placement={placement}
      >
        <span className="ad-slot-label">광고</span>
        <div className="ad-slot-preview-content">
          <strong>반응형 광고 영역</strong>
          <span>확인 후 이 위치에 Google 광고가 표시됩니다.</span>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className={`ad-slot ad-slot-${variant}`}
      aria-label="광고"
      data-placement={placement}
    >
      <span className="ad-slot-label">광고</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseClientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
