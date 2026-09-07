import Link from "next/link";

import { createPageMetadata } from "../../src/shared/seo";

export const metadata = createPageMetadata({
  title: "이용약관",
  description: "Channelytics 서비스의 기본 이용 조건입니다.",
  path: "/terms",
  noIndex: true,
});

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
} as const;

export default function TermsPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">
        ← 분석 화면으로 돌아가기
      </Link>
      <p className="eyebrow">TERMS</p>
      <h1>이용약관</h1>

      <section>
        <h2>YouTube 서비스 이용 조건</h2>
        <p>
          서비스는 YouTube API 서비스를 사용합니다. Channelytics를 이용하면{" "}
          <a href="https://www.youtube.com/t/terms" {...externalLinkProps}>
            YouTube 이용약관
          </a>
          의 적용을 받는 것에 동의하게 됩니다. YouTube API의 개인정보 처리에 관한
          내용은{" "}
          <a href="https://policies.google.com/privacy" {...externalLinkProps}>
            Google 개인정보처리방침
          </a>
          에서 확인할 수 있습니다.
        </p>
      </section>
    </main>
  );
}
