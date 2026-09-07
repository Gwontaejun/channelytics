import Link from "next/link";

import { legalConfig } from "../../src/shared/legal";
import { createPageMetadata } from "../../src/shared/seo";

export const metadata = createPageMetadata({
  title: "개인정보처리방침",
  description: "Channelytics 서비스의 개인정보 처리 방침입니다.",
  path: "/privacy",
  noIndex: true,
});

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
} as const;

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">
        ← 분석 화면으로 돌아가기
      </Link>
      <p className="eyebrow">PRIVACY</p>
      <h1>개인정보처리방침</h1>
      <p className="legal-lead">
        {legalConfig.operatorName}(이하 “운영자”)는 Channelytics 제공 과정에서
        처리하는 정보와 보호 조치를 다음과 같이 공개합니다.
      </p>

      <section>
        <h2>1. 처리하는 정보와 목적</h2>
        <p>
          서비스는 회원가입을 제공하지 않으며 이용자의 이름, 이메일, 비밀번호,
          결제정보를 직접 요구하지 않습니다. 다음 정보는 분석 제공과 서비스 보호에
          필요한 범위에서 처리될 수 있습니다.
        </p>
        <dl className="legal-data-list">
          <div>
            <dt>분석 대상 정보</dt>
            <dd>이용자가 입력한 YouTube 채널 또는 영상 URL</dd>
            <dd>분석 대상을 확인하고 요청한 기능을 제공하는 데 사용합니다.</dd>
          </div>
          <div>
            <dt>YouTube의 공개 정보</dt>
            <dd>
              채널·영상 식별자, 제목, 설명, 썸네일, 공개일, 조회·좋아요·댓글 수,
              공개 댓글 본문·식별자·좋아요 수·작성일
            </dd>
            <dd>채널 현황, 영상 성과, 댓글 반응과 AI 인사이트 생성에 사용합니다.</dd>
          </div>
          <div>
            <dt>접속 정보</dt>
            <dd>IP 주소, 브라우저·기기 정보, 접속 일시, 요청·오류 기록</dd>
            <dd>보안, 장애 대응, 요청 제한과 부정 이용 방지에 사용합니다.</dd>
          </div>
        </dl>
      </section>

      <section>
        <h2>2. 보유 기간과 파기</h2>
        <p>
          운영자는 입력 URL, YouTube 공개 데이터, 댓글 원문과 분석 결과를 별도
          데이터베이스에 저장하지 않습니다. 해당 정보는 요청 처리 중 서버
          메모리에서 사용하고 응답 완료 후 별도로 보관하지 않습니다. 화면의 결과는
          페이지를 새로고침하거나 닫을 때까지 브라우저 메모리에 남을 수 있습니다.
        </p>
        <p>
          {legalConfig.hostingProvider}에서 생성되는 보안·장애 대응용 접속 로그는
          최대 {legalConfig.hostingLogRetentionDays}일간 보관 후 삭제됩니다. 법령상
          보존 의무가 있는 경우에는 해당 정보만 정해진 기간 동안 보관합니다.
        </p>
      </section>

      <section>
        <h2>3. 외부 서비스와 국외 처리</h2>
        <p>
          서비스 제공에 필요한 다음 외부 서비스를 사용합니다. 운영자는 개인정보를
          판매하지 않습니다.
        </p>
        <dl className="legal-data-list">
          <div>
            <dt>Google LLC — Gemini API</dt>
            <dd>
              마스킹된 댓글과 임시 식별자, 공개 채널·영상 정보 및 집계 결과를 댓글
              분류와 AI 인사이트 생성을 위해 전송합니다.
            </dd>
            <dd>
              분석 요청 시 HTTPS로 미국을 포함한 Google의 처리 시설 소재 국가에
              전송되며, 보유 기간은 Gemini API 약관과 Google 개인정보처리방침을
              따릅니다. 무료 서비스에서는 입력과 출력이 Google 서비스 개선에
              사용되거나 사람 검토자가 확인할 수 있습니다.
            </dd>
          </div>
          <div>
            <dt>Google LLC — YouTube API</dt>
            <dd>
              채널·영상 식별자를 전송해 요청한 대상의 공개 정보를 조회합니다.
            </dd>
            <dd>
              분석 요청 시 HTTPS로 Google의 처리 시설 소재 국가에서 처리되며,
              Google의 관련 약관과 개인정보처리방침을 따릅니다.
            </dd>
          </div>
          <div>
            <dt>{legalConfig.hostingProvider}</dt>
            <dd>
              입력 URL, API 응답과 접속 정보가 서비스 제공, 보안 및 장애 대응을 위해
              {legalConfig.hostingCountry}에서 처리될 수 있습니다.
            </dd>
            <dd>
              요청 시 암호화된 네트워크로 처리되며, 분석 데이터는 요청 처리 동안,
              접속 로그는 최대 {legalConfig.hostingLogRetentionDays}일간 보관됩니다.
            </dd>
          </div>
        </dl>
        <p>
          국외 처리를 원하지 않으면 분석 요청을 하지 않을 수 있으며, 이 경우 분석
          기능을 이용할 수 없습니다. 자세한 내용은 Google의{" "}
          <a href="https://ai.google.dev/gemini-api/terms" {...externalLinkProps}>
            Gemini API 추가 이용약관
          </a>
          과{" "}
          <a href="https://policies.google.com/privacy" {...externalLinkProps}>
            개인정보처리방침
          </a>
          에서 확인할 수 있습니다.
        </p>
      </section>

      <section>
        <h2>4. 안전성 확보 조치</h2>
        <p>
          댓글은 AI 전송 전에 이메일, 전화번호, 계정 식별자 등 개인정보 형식을
          마스킹하고 원본 댓글 식별자를 임시 식별자로 교체합니다. 또한 HTTPS 통신,
          API 키의 서버 환경변수 보관, 접근권한 제한, 댓글 및 AI 요청·응답의
          애플리케이션 로그 기록 금지 등의 조치를 적용합니다.
        </p>
      </section>

      <section>
        <h2>5. YouTube API</h2>
        <p>
          서비스는 공개 채널·영상·댓글 정보를 조회하기 위해 YouTube API 서비스를
          사용하며 Google 또는 YouTube 계정 로그인을 요구하지 않습니다. YouTube
          API 데이터에는{" "}
          <a href="https://www.youtube.com/t/terms" {...externalLinkProps}>
            YouTube 이용약관
          </a>
          과{" "}
          <a href="https://policies.google.com/privacy" {...externalLinkProps}>
            Google 개인정보처리방침
          </a>
          이 적용됩니다.
        </p>
      </section>

      <section>
        <h2>6. 정보주체의 권리와 문의</h2>
        <p>
          정보주체는 개인정보의 열람, 정정·삭제 및 처리정지를 요청할 수 있습니다.
          분석 기록을 저장하지 않으므로 요청 시점에 운영자가 보유한 정보가 없을 수
          있으며, YouTube 원본 콘텐츠의 삭제·정정은 YouTube에서 처리해야 합니다.
          요청은 <a href={legalConfig.contactHref}>{legalConfig.contactLabel}</a>로
          접수할 수 있습니다.
        </p>
        <dl className="legal-contact">
          <div>
            <dt>개인정보 보호업무 담당</dt>
            <dd>{legalConfig.privacyOfficerName}</dd>
          </div>
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
        </dl>
      </section>

      <section>
        <h2>7. 시행일과 변경</h2>
        <p>
          시행일은 {legalConfig.effectiveDate}입니다. 처리 내용이 변경되면 시행 전에
          이 페이지에 반영합니다.
        </p>
      </section>
    </main>
  );
}
