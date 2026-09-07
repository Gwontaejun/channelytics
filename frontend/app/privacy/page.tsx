import Link from "next/link";

import { legalConfig } from "../../src/shared/legal";
import { createPageMetadata } from "../../src/shared/seo";

export const metadata = createPageMetadata({
  title: "개인정보처리방침",
  description: "Channelytics 서비스의 개인정보 및 광고 데이터 처리 방침입니다.",
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
        {legalConfig.operatorName}(이하 “운영자”)는 Channelytics를 제공하면서
        필요한 최소한의 정보만 처리하고, 그 처리 내용을 다음과 같이 공개합니다.
      </p>
      <dl className="legal-summary">
        <div>
          <dt>회원가입</dt>
          <dd>없음</dd>
        </div>
        <div>
          <dt>분석 결과 DB 저장</dt>
          <dd>없음</dd>
        </div>
        <div>
          <dt>AI 처리</dt>
          <dd>무료 Gemini API</dd>
        </div>
        <div>
          <dt>시행일</dt>
          <dd>{legalConfig.effectiveDate}</dd>
        </div>
      </dl>

      <section>
        <h2>1. 개인정보 처리 목적과 항목</h2>
        <p>
          서비스는 회원가입을 제공하지 않으며 이름, 이메일, 비밀번호 또는
          결제정보를 이용자에게 직접 요구하지 않습니다. 분석 기능과 서비스
          보안을 위해 다음 정보를 처리할 수 있습니다.
        </p>
        <dl className="legal-data-list">
          <div>
            <dt>이용자가 입력한 정보</dt>
            <dd>YouTube 채널 또는 영상 URL</dd>
            <dd>분석 대상을 확인하고 요청한 기능을 제공하기 위해 사용합니다.</dd>
          </div>
          <div>
            <dt>YouTube API에서 조회하는 공개 정보</dt>
            <dd>
              채널·영상 식별자, 제목, 설명, 썸네일, 공개일, 조회수·좋아요 수·댓글
              수, 공개 댓글 본문·식별자·좋아요 수·작성일
            </dd>
            <dd>
              채널 현황, 최근 영상 성과, 댓글 반응과 콘텐츠 인사이트를 생성하기
              위해 사용합니다. 댓글 작성자의 채널 식별자는 채널 운영자가 작성한
              댓글을 제외하기 위한 비교에만 일시적으로 사용하며 저장하거나
              Gemini API로 전송하지 않습니다.
            </dd>
          </div>
          <div>
            <dt>자동 생성 정보</dt>
            <dd>IP 주소, 브라우저·기기 정보, 접속 일시, 요청·오류 기록</dd>
            <dd>보안, 장애 대응, 요청 제한과 부정 이용 방지를 위해 사용합니다.</dd>
          </div>
        </dl>
      </section>

      <section>
        <h2>2. 댓글 보호와 AI 전송 전 처리</h2>
        <p>
          댓글은 중복·공백을 정리한 뒤 이메일, 전화번호, 고유식별정보, 금융정보,
          URL, 계정 식별자와 주소 형식 등을 일반 코드 기반 필터로 마스킹합니다.
          원본 YouTube 댓글 식별자는 요청마다 새로 만든 임시 식별자로 교체하며,
          마스킹된 정보만 남은 댓글은 AI 분석에서 제외합니다. 로컬 AI 모델은
          사용하지 않습니다.
        </p>
        <p>
          Gemini에도 마스킹되지 않은 개인정보·민감정보·연락처 등이 남았는지
          다시 확인하고, 의심되는 댓글은 결과에서 제외하도록 요청합니다. 운영자는
          해당 댓글을 통계, 주제 또는 근거 댓글에 포함하지 않으며, 화면에 표시되는
          근거 댓글에는 마스킹된 문장만 사용합니다.
        </p>
        <p>
          자동 필터는 모든 문맥과 변형을 완벽하게 식별할 수 없으므로 개인정보가
          전혀 처리되지 않는다고 보장하지 않습니다. 누락 사례를 확인하면 관련
          출력을 제거하고 필터를 보완합니다.
        </p>
      </section>

      <section>
        <h2>3. 무료 Google Gemini API를 통한 AI 분석</h2>
        <p>
          운영자는 댓글 분류와 인사이트 생성을 위해 마스킹된 댓글 본문과 임시
          식별자, 채널·영상의 공개 메타데이터 및 집계 결과를 Google LLC의 무료
          Gemini API로 전송합니다. 전송은 이용자가 분석을 요청할 때 HTTPS로
          이루어집니다.
        </p>
        <p>
          Google의 무료 서비스 조건에 따라 입력과 출력은 Google 제품·서비스 및
          머신러닝 기술의 제공·개선·개발에 사용될 수 있고, 품질 개선을 위해 사람
          검토자가 확인할 수 있습니다. Google은 검토 전에 해당 데이터를 Google
          계정, API 키 및 Cloud 프로젝트와 분리하는 조치를 설명하고 있습니다.
          Google의 처리·보관·삭제 기간은 Google의 정책과 설정에 따르며 운영자가
          직접 결정할 수 없습니다.
        </p>
        <p>
          자세한 내용은 Google의{" "}
          <a href="https://ai.google.dev/gemini-api/terms" {...externalLinkProps}>
            Gemini API 추가 이용약관
          </a>
          과{" "}
          <a href="https://policies.google.com/privacy" {...externalLinkProps}>
            Google 개인정보처리방침
          </a>
          에서 확인할 수 있습니다.
        </p>
      </section>

      <section>
        <h2>4. 국외 처리</h2>
        <dl className="legal-data-list">
          <div>
            <dt>이전받는 자와 연락처</dt>
            <dd>
              Google LLC ·{" "}
              <a href="https://support.google.com/policies/troubleshooter/7575787" {...externalLinkProps}>
                Google 개인정보 문의
              </a>
            </dd>
          </div>
          <div>
            <dt>이전 국가·시기·방법</dt>
            <dd>
              미국을 포함해 Google 또는 그 처리자가 시설을 운영하는 국가 · 분석
              요청 시 · 암호화된 네트워크를 통한 전송
            </dd>
          </div>
          <div>
            <dt>이전 항목과 목적</dt>
            <dd>
              마스킹된 공개 댓글, 임시 식별자, 공개 채널·영상 메타데이터와 집계
              정보 · 댓글 분류 및 AI 인사이트 생성
            </dd>
          </div>
          <div>
            <dt>보유·이용 기간</dt>
            <dd>Google의 Gemini API 약관과 개인정보처리방침에 따른 기간</dd>
          </div>
          <div>
            <dt>거부 방법과 효과</dt>
            <dd>
              분석 요청을 하지 않으면 AI 국외 처리를 거부할 수 있습니다. 이 경우
              채널·영상 분석 기능을 이용할 수 없습니다.
            </dd>
          </div>
        </dl>
      </section>

      <section>
        <h2>5. 처리 및 보유 기간</h2>
        <p>
          운영자는 입력 URL, YouTube 공개 데이터, 댓글 원문과 분석 결과를 별도
          데이터베이스에 저장하지 않습니다. 요청 처리 중 서버 메모리에서
          사용하고 응답이 완료되면 운영자가 별도로 보관하지 않습니다. 화면의
          결과는 페이지를 새로고침하거나 닫을 때까지 브라우저 메모리에 남을 수
          있습니다.
        </p>
        <p>
          {legalConfig.hostingProvider}의 인프라에서 생성되는 보안·장애 대응용 접속
          로그는 최대 {legalConfig.hostingLogRetentionDays}일간 보관한 뒤 삭제 또는
          익명화하도록 설정합니다. 호스팅 처리 국가는 {legalConfig.hostingCountry}
          입니다. 법령상 보존 의무가 발생하면 해당 항목을 필요한 기간 동안만
          별도 보관합니다.
        </p>
      </section>

      <section>
        <h2>6. YouTube API 서비스</h2>
        <p>
          서비스는 공개 채널·영상·댓글 정보를 조회하기 위해 YouTube API 서비스를
          사용합니다. Google 또는 YouTube 로그인을 요구하지 않고 계정 권한을
          요청하지 않습니다. YouTube에서 원본 콘텐츠가 삭제되거나 비공개되면 이후
          분석에서 조회되지 않을 수 있습니다.
        </p>
        <p>
          YouTube API 데이터에는{" "}
          <a href="https://www.youtube.com/t/terms" {...externalLinkProps}>
            YouTube 이용약관
          </a>
          ,{" "}
          <a href="https://policies.google.com/privacy" {...externalLinkProps}>
            Google 개인정보처리방침
          </a>
          과{" "}
          <a
            href="https://developers.google.com/youtube/terms/api-services-terms-of-service"
            {...externalLinkProps}
          >
            YouTube API 서비스 이용약관
          </a>
          이 적용됩니다.
        </p>
      </section>

      <section>
        <h2>7. Google AdSense와 쿠키</h2>
        <p>
          광고가 활성화된 경우 Google을 포함한 광고 사업자는 광고 제공·측정,
          반복 노출 방지, 보안과 맞춤 설정을 위해 쿠키, 웹 비콘, IP 주소, 기기 및
          광고 식별자와 광고 상호작용 정보를 처리할 수 있습니다. 광고 태그는
          AdSense 게시자 ID가 배포 환경에 설정된 경우에만 불러옵니다.
        </p>
        <p>
          이용자는{" "}
          <a href="https://adssettings.google.com/" {...externalLinkProps}>
            Google 광고 설정
          </a>
          에서 맞춤 광고를 관리하거나 브라우저에서 쿠키를 차단·삭제할 수 있습니다.
          자세한 내용은{" "}
          <a href="https://policies.google.com/technologies/partner-sites" {...externalLinkProps}>
            Google 파트너 사이트 데이터 사용 안내
          </a>
          를 확인하세요.
        </p>
        <p>
          유럽경제지역, 영국 또는 스위스 이용자에게 광고를 제공하는 경우 Google이
          인증한 동의 관리 플랫폼을 통해 필요한 선택권을 제공합니다. 관련 설정이
          준비되지 않은 지역에서는 광고를 제한합니다.
        </p>
      </section>

      <section>
        <h2>8. 제3자 제공 및 처리위탁</h2>
        <p>
          운영자는 개인정보를 판매하지 않습니다. 분석을 위한 Google Gemini API,
          공개 데이터 조회를 위한 YouTube API, 광고가 활성화된 경우의 Google
          AdSense, 서비스 제공을 위한 {legalConfig.hostingProvider} 외에 새로운
          외부 처리업체를 사용하게 되면 업체명, 목적, 항목과 보유 기간을 이 방침에
          반영합니다.
        </p>
      </section>

      <section>
        <h2>9. 파기와 안전성 확보 조치</h2>
        <p>
          보유 목적이 끝난 전자적 정보는 복구하기 어려운 방식으로 삭제합니다.
          운영자는 HTTPS, API 키의 서버 환경변수 보관, 접근권한 최소화, 원문 및 AI
          요청·응답의 애플리케이션 로그 기록 금지, 의존성 보안 업데이트 등 합리적인
          기술적·관리적 조치를 적용합니다.
        </p>
      </section>

      <section>
        <h2>10. 정보주체의 권리와 행사 방법</h2>
        <p>
          정보주체는 개인정보의 열람, 정정·삭제, 처리정지 또는 동의 철회를 요청할
          수 있습니다. 서비스가 분석 기록을 저장하지 않아 요청 시점에 보유 정보가
          없을 수 있습니다. YouTube 원본 콘텐츠의 삭제·정정은 YouTube에서 직접
          처리해야 합니다.
        </p>
        <p>
          요청은 <a href={legalConfig.contactHref}>{legalConfig.contactLabel}</a>로
          접수할 수 있습니다. 공개 문의 게시판에는 개인정보나 민감정보를 작성하지
          마세요.
        </p>
      </section>

      <section>
        <h2>11. 아동의 이용</h2>
        <p>
          Gemini API 이용 조건에 따라 서비스는 만 18세 이상 이용자를 대상으로
          합니다. 만 18세 미만 이용자의 정보가 처리된 사실을 알게 되면 문의처로
          알려주세요.
        </p>
      </section>

      <section>
        <h2>12. 권익침해 구제</h2>
        <p>
          개인정보 침해 상담이나 신고가 필요한 경우{" "}
          <a href="https://www.privacy.go.kr/" {...externalLinkProps}>
            개인정보 포털
          </a>
          , 개인정보침해 신고센터(국번 없이 118) 또는 개인정보 분쟁조정위원회
          (1833-6972)를 이용할 수 있습니다.
        </p>
      </section>

      <section>
        <h2>13. 방침 변경 및 문의처</h2>
        <p>
          처리 항목이나 외부 서비스가 변경되면 시행 전에 이 페이지를 통해
          알립니다. 정보주체의 권리에 중대한 영향을 주는 변경은 합리적인 기간을
          두고 별도로 안내합니다.
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
          <div>
            <dt>시행일</dt>
            <dd>{legalConfig.effectiveDate}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
