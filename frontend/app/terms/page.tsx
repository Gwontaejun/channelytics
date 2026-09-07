import Link from "next/link";

import { legalConfig } from "../../src/shared/legal";
import { createPageMetadata } from "../../src/shared/seo";

export const metadata = createPageMetadata({
  title: "이용약관",
  description: "Channelytics 서비스의 이용 조건과 분석 결과의 성격을 안내합니다.",
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
      <p className="legal-lead">
        이 약관은 {legalConfig.operatorName}(이하 “운영자”)가 제공하는
        Channelytics의 이용 조건과 운영자·이용자의 권리 및 책임을 정합니다.
      </p>
      <p className="legal-effective-date">시행일 {legalConfig.effectiveDate}</p>

      <section>
        <h2>1. 약관의 적용과 동의</h2>
        <p>
          이용자는 분석 요청 전에 이 약관과 개인정보처리방침을 확인하고 동의해야
          합니다. 서비스를 이용하면 YouTube 이용약관의 적용을 받는 것에도
          동의합니다. 동의하지 않거나 만 18세 미만인 경우 서비스를 이용할 수
          없습니다.
        </p>
      </section>

      <section>
        <h2>2. 서비스 내용</h2>
        <p>
          서비스는 이용자가 입력한 YouTube 채널 또는 영상 URL을 바탕으로 공개
          채널 통계, 최근 영상 성과, 공개 댓글 반응과 AI 기반 인사이트를
          제공합니다. 회원가입, 유료 결제, 분석 결과의 영구 저장 또는 YouTube
          계정 연동 기능은 제공하지 않습니다.
        </p>
        <p>
          서비스는 무료로 제공되며 광고가 포함될 수 있습니다. 운영자는 서비스
          안정성과 외부 API 할당량 관리를 위해 댓글 수, 요청 횟수, 지원 대상 또는
          일부 기능을 제한할 수 있습니다.
        </p>
      </section>

      <section>
        <h2>3. 외부 서비스</h2>
        <p>
          서비스는 YouTube Data API와 무료 Google Gemini API를 사용합니다.
          이용자는{" "}
          <a href="https://www.youtube.com/t/terms" {...externalLinkProps}>
            YouTube 이용약관
          </a>
          ,{" "}
          <a
            href="https://developers.google.com/youtube/terms/api-services-terms-of-service"
            {...externalLinkProps}
          >
            YouTube API 서비스 이용약관
          </a>
          ,{" "}
          <a href="https://policies.google.com/privacy" {...externalLinkProps}>
            Google 개인정보처리방침
          </a>
          및{" "}
          <a href="https://ai.google.dev/gemini-api/terms" {...externalLinkProps}>
            Gemini API 추가 이용약관
          </a>
          을 확인해야 합니다.
        </p>
        <p>
          Channelytics는 YouTube 또는 Google이 제공·후원·승인하는 공식 서비스가
          아닙니다. 외부 서비스의 정책, 기능, 할당량 또는 장애에 따라 분석이
          지연되거나 제공되지 않을 수 있습니다.
        </p>
      </section>

      <section>
        <h2>4. 공개 댓글의 AI 처리</h2>
        <p>
          운영자는 댓글 원문의 개인정보 가능성을 줄이기 위해 일반 코드 기반
          사전 마스킹, 원본 식별자의 임시 식별자 교체, Gemini의 추가 개인정보
          감지와 결과 제외, 출력 후 마스킹을 적용합니다. 자동 처리는 모든 형태의
          개인정보나 문맥을 완벽히 식별할 수 없으며 일부 정보가 누락될 수
          있습니다.
        </p>
        <p>
          무료 Gemini API로 전송된 입력과 출력은 Google의 약관에 따라 제품 및
          머신러닝 기술의 개선·개발과 사람 검토에 사용될 수 있습니다. 자세한 처리
          항목, 국외 처리와 거부 방법은 개인정보처리방침에서 확인할 수 있습니다.
        </p>
      </section>

      <section>
        <h2>5. 이용자의 의무</h2>
        <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
        <ul className="legal-list">
          <li>법령, 이 약관 또는 외부 서비스의 이용 조건을 위반하는 행위</li>
          <li>타인의 개인정보를 식별·추적·프로파일링하거나 괴롭히는 행위</li>
          <li>개인정보나 민감정보가 포함된 콘텐츠를 의도적으로 분석시키는 행위</li>
          <li>정상적인 이용 범위를 벗어난 자동화 요청이나 과도한 호출</li>
          <li>보안 기능, 요청 제한 또는 API 할당량을 우회하거나 방해하는 행위</li>
          <li>분석 결과를 이용해 명예훼손, 차별, 불법 행위 또는 오인을 유발하는 행위</li>
        </ul>
      </section>

      <section>
        <h2>6. 분석 결과의 성격</h2>
        <p>
          결과는 공개 데이터와 AI 모델을 이용해 자동 생성한 참고 정보입니다.
          댓글 표본, 수집 시점, 언어, 풍자·밈·커뮤니티 표현과 모델의 한계로 인해
          일부 댓글이 누락되거나 잘못 분류될 수 있으며 정확성, 완전성, 최신성 또는
          특정한 성과를 보장하지 않습니다.
        </p>
        <p>
          결과는 법률·의료·세무·투자 등 전문적인 판단을 대신하지 않습니다. 채널
          운영이나 사업상 중요한 결정 전에는 원본 데이터와 다른 자료를 함께
          확인해야 합니다.
        </p>
      </section>

      <section>
        <h2>7. 공개 데이터와 권리</h2>
        <p>
          영상 제목, 썸네일, 댓글 등 YouTube 공개 콘텐츠의 권리는 원저작자 또는
          각 권리자에게 있습니다. 공개 콘텐츠라는 이유만으로 제한 없이 복제·배포할
          수 없으며, 결과를 사용할 때 저작권, 명예와 개인정보 등 제3자의 권리를
          존중해야 합니다.
        </p>
        <p>
          Channelytics의 자체 UI, 문구, 코드와 브랜드에 관한 권리는 운영자 또는
          정당한 권리자에게 있습니다. 별도 허락 없이 서비스를 복제하거나 운영자를
          사칭할 수 없습니다.
        </p>
      </section>

      <section>
        <h2>8. 서비스 변경·중단 및 이용 제한</h2>
        <p>
          외부 API 정책·할당량·장애, 유지보수, 보안 또는 운영상 필요에 따라
          서비스의 전부 또는 일부를 변경·제한·중단할 수 있습니다. 예측 가능한
          중대한 변경은 미리 알리고, 긴급한 사유는 사후에 안내할 수 있습니다.
          약관 위반이나 서비스에 피해를 주는 요청은 별도 통지 없이 차단할 수
          있습니다.
        </p>
      </section>

      <section>
        <h2>9. 책임의 범위</h2>
        <p>
          운영자는 합리적인 범위에서 서비스를 안정적으로 제공하기 위해
          노력합니다. 다만 외부 API 중단, 통신 장애, 공개 데이터 오류, AI의
          부정확한 결과 또는 이용자의 결과 활용처럼 운영자가 합리적으로 통제하기
          어려운 사유로 생긴 손해는 관련 법령이 허용하는 범위에서 책임이 제한될 수
          있습니다.
        </p>
        <p>
          이 조항은 운영자의 고의·중대한 과실로 인한 책임이나 관련 법령상 제한할
          수 없는 이용자의 권리를 배제하지 않습니다.
        </p>
      </section>

      <section>
        <h2>10. 준거법과 분쟁 해결</h2>
        <p>
          이 약관과 서비스에는 대한민국 법령을 적용합니다. 분쟁이 발생하면 먼저
          성실히 협의하며, 해결되지 않으면 대한민국 민사소송법상 관할 법원에서
          해결합니다.
        </p>
      </section>

      <section>
        <h2>11. 약관 변경과 문의</h2>
        <p>
          운영자는 법령이나 서비스 내용의 변경을 반영하기 위해 약관을 수정할 수
          있습니다. 이용자에게 불리한 중대한 변경은 시행 전에 서비스 화면에서
          합리적인 기간 동안 안내합니다.
        </p>
        <dl className="legal-contact">
          <div>
            <dt>운영자</dt>
            <dd>{legalConfig.operatorName}</dd>
          </div>
          <div>
            <dt>문의</dt>
            <dd>
              <a href={legalConfig.contactHref}>{legalConfig.contactLabel}</a>
            </dd>
          </div>
          <div>
            <dt>시행일</dt>
            <dd>{legalConfig.effectiveDate}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
