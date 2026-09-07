const DEFAULT_CONTACT_URL =
  "https://github.com/Gwontaejun/youtube-analyzer/issues";

function getSafeContactUrl(value: string | undefined) {
  if (!value) return DEFAULT_CONTACT_URL;

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : DEFAULT_CONTACT_URL;
  } catch {
    return DEFAULT_CONTACT_URL;
  }
}

function getSafeEmail(value: string | undefined) {
  const email = value?.trim() ?? "";
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "";
}

const contactEmail = getSafeEmail(process.env.LEGAL_CONTACT_EMAIL);

export const legalConfig = {
  operatorName:
    process.env.LEGAL_OPERATOR_NAME?.trim() || "배포 전 운영자명을 입력하세요",
  privacyOfficerName:
    process.env.LEGAL_PRIVACY_OFFICER_NAME?.trim() ||
    process.env.LEGAL_OPERATOR_NAME?.trim() ||
    "배포 전 개인정보 보호업무 담당자를 입력하세요",
  effectiveDate:
    process.env.LEGAL_EFFECTIVE_DATE?.trim() || "2026년 9월 7일",
  hostingProvider:
    process.env.LEGAL_HOSTING_PROVIDER?.trim() ||
    "배포 전 호스팅 제공자를 입력하세요",
  hostingCountry:
    process.env.LEGAL_HOSTING_COUNTRY?.trim() ||
    "배포 전 호스팅 처리 국가를 입력하세요",
  hostingLogRetentionDays:
    process.env.LEGAL_HOSTING_LOG_RETENTION_DAYS?.trim() || "30",
  contactHref: contactEmail
    ? `mailto:${contactEmail}`
    : getSafeContactUrl(process.env.LEGAL_CONTACT_URL),
  contactLabel: contactEmail || "온라인 문의·피드백 페이지",
} as const;
