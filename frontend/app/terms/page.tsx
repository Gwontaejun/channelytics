import Link from "next/link";

import { legalConfig } from "../../src/shared/legal";
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
        <h2>서비스 이용 범위</h2>
        <p>
          Channelytics는 공개된 YouTube 채널·영상·댓글 데이터를 바탕으로 분석
          결과를 제공하는 무료 서비스입니다. 결과는 채널 운영과 콘텐츠 검토를 위한
          참고 정보로 제공됩니다.
        </p>
      </section>

      <section>
        <h2>금지 행위</h2>
        <p>
          과도한 반복 요청, 자동화된 무단 접근, 보안 기능이나 사용량 제한의 우회,
          서비스 운영 방해 및 타인의 권리를 침해하는 이용은 금지됩니다. 이러한
          행위가 확인되면 요청을 제한하거나 차단할 수 있습니다.
        </p>
      </section>

      <section>
        <h2>분석 결과 안내</h2>
        <p>
          분석 결과는 수집된 공개 데이터와 AI 모델을 기반으로 생성되며 정확성이나
          완전성을 보장하지 않습니다. 댓글의 문맥, 풍자, 유행어와 수집 시점에 따라
          실제 반응과 차이가 날 수 있으므로 참고용으로 이용해야 합니다.
        </p>
      </section>

      <section>
        <h2>서비스 변경</h2>
        <p>
          외부 API의 정책·할당량·장애, 유지보수 또는 보안상 필요에 따라 기능이나
          제공 범위가 변경·제한·중단될 수 있습니다. 중요한 변경 사항은 서비스
          화면을 통해 안내합니다.
        </p>
      </section>

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

      <section>
        <h2>약관 시행일 및 문의</h2>
        <p>
          본 약관은 {legalConfig.effectiveDate}부터 적용됩니다. 서비스 이용과 관련한
          문의는 <a href={legalConfig.contactHref}>{legalConfig.contactLabel}</a>로
          접수할 수 있습니다.
        </p>
      </section>
    </main>
  );
}
