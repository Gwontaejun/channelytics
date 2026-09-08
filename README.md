<div align="center">

# Channelytics

### 공개 YouTube 데이터에서 채널과 시청자 반응의 흐름을 읽습니다

<p>
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/FastAPI-0.115+-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/Google_Gemini-3.1_Flash_Lite-4285F4?style=flat-square&logo=google&logoColor=white" alt="Google Gemini" />
</p>

</div>

## 소개

**Channelytics**는 YouTube 채널 또는 영상 URL을 입력하면 공개 데이터를 바탕으로 콘텐츠 성과와 시청자 반응을 정리하는 분석 서비스입니다.

영상 분석에서는 댓글을 수집해 AI로 분류하고, 주요 요청·불만·콘텐츠 아이디어를 근거 댓글과 함께 제공합니다. 채널 분석에서는 최근 28일 공개 영상의 성과와 포맷별 흐름, 최근 콘텐츠에 대한 AI 인사이트를 확인할 수 있습니다.

> 공개 YouTube 데이터만 사용합니다. 채널의 비공개 분석 데이터, 구독자 증감 이력, 과거 시점의 조회수 추이는 제공하지 않으며 데이터를 영구 저장하지 않습니다.

## 주요 기능

- **URL 자동 판별** — `youtube.com/watch`, `youtu.be`, `/channel/`, `@handle` 형식의 영상·채널 URL을 구분합니다.
- **영상 댓글 분석** — 일반 시청자 댓글을 최대 1,000개 수집하고, 긍정·질문·콘텐츠 요청·불만·악성·스팸 등으로 분류합니다.
- **개인정보 보호 처리** — Gemini 요청 전에 이메일, 전화번호, 계좌·카드 번호, 주소, 링크, 계정 식별자 등을 마스킹하고 원본 댓글 ID를 요청 범위의 임시 ID로 교체합니다.
- **근거 중심 인사이트** — 상위 요청·불만 토픽과 콘텐츠 아이디어에 분석 대상 댓글을 함께 연결합니다.
- **채널 성과 스냅샷** — 최근 28일 업로드된 공개 영상을 조회하고 롱폼·Shorts별 현재 누적 조회수 흐름을 시각화합니다.
- **채널 AI 인사이트** — 최근 12개 영상의 공개 지표를 바탕으로 강점과 다음 콘텐츠 기회를 구조화해 제안합니다.
- **반응형 대시보드** — 입력, 분석 중 안내, 영상·채널별 결과 화면을 데스크톱과 모바일에서 제공합니다.
- **운영 기본 구성** — SEO 메타데이터, Open Graph 이미지, sitemap, robots, 서비스·개인정보처리방침·이용약관 및 AdSense 레이아웃을 포함합니다.

## 기술 스택

### Frontend

<p>
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Recharts-3-22B5BF?style=flat-square" alt="Recharts" />
</p>

### Backend & AI

<p>
  <img src="https://img.shields.io/badge/Python-3.13-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/FastAPI-0.115+-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/Pydantic-2-E92063?style=flat-square&logo=pydantic&logoColor=white" alt="Pydantic" />
  <img src="https://img.shields.io/badge/YouTube_Data_API_v3-FF0000?style=flat-square&logo=youtube&logoColor=white" alt="YouTube Data API v3" />
  <img src="https://img.shields.io/badge/Google_Gemini-4285F4?style=flat-square&logo=google&logoColor=white" alt="Google Gemini" />
</p>

## 프로젝트 구조

```text
youtube-analyzer/
├─ backend/
│  ├─ app/
│  │  ├─ api/                 # 분석·YouTube API 라우터
│  │  ├─ core/                # 환경 변수 설정
│  │  ├─ schemas/             # Pydantic 요청·응답 모델
│  │  └─ services/            # URL 판별, YouTube, Gemini, 전처리, 집계 파이프라인
│  ├─ tests/                  # 외부 HTTP 호출을 모킹한 단위 테스트
│  └─ requirements.txt
├─ frontend/
│  ├─ app/                    # Next.js App Router, API 프록시, SEO·정적 페이지·스타일
│  └─ src/
│     ├─ components/           # 공용 UI
│     ├─ data/                 # 화면 표시용 데이터
│     ├─ features/analysis/    # 영상·채널 분석 대시보드
│     ├─ shared/               # 광고, 푸터, SEO, 법적 고지 공용 코드
│     └─ types/                # API 응답 타입
├─ scripts/                    # 로컬 백엔드 실행 스크립트
├─ AGENTS.md                   # 프로젝트 작업 가이드
└─ package.json                # 루트 명령어
```

분석 요청은 다음 경로를 따릅니다.

```text
Browser → Next.js /api/analyze → FastAPI /api/analyze
        → YouTube Data API → 댓글 전처리·개인정보 마스킹
        → Gemini 분류 → Python 집계 → Gemini 최종 인사이트 → Dashboard
```

채널 URL은 댓글을 수집하지 않습니다. 최근 공개 영상과 채널 공개 지표를 가져온 뒤 채널 인사이트를 생성합니다.

## 시작하기

### 요구 사항

- Node.js 20 이상
- Python 3.13 이상
- YouTube Data API v3 키
- Gemini API 키

### 1. 환경 변수 설정

```powershell
Copy-Item backend/.env.example backend/.env
Copy-Item frontend/.env.example frontend/.env.local
```

`backend/.env`에 API 키를 설정합니다.

```env
YOUTUBE_API_KEY=your_youtube_data_api_key
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3.1-flash-lite
```

`frontend/.env.local`에서는 필요에 따라 백엔드 주소, 사이트 URL, 법적 고지 정보, AdSense 식별자를 설정합니다. 공개 환경에서는 `SITE_URL`을 실제 도메인으로 지정해야 canonical URL, sitemap, robots 및 Open Graph URL이 올바르게 생성됩니다.

### 2. 실행

프로젝트 루트에서 백엔드와 프런트엔드를 각각 실행합니다.

```powershell
npm run dev
npm run frontend
```

- Frontend: `http://localhost:3000`
- Backend API 문서: `http://127.0.0.1:8000/docs`

백엔드 가상환경과 의존성은 최초 `npm run dev` 실행 시 자동으로 준비됩니다. 수동 실행은 아래와 같습니다.

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

## API

서비스 화면은 `POST /api/analyze`만 호출합니다. 프런트엔드의 Route Handler가 백엔드로 요청을 프록시하므로 API 키는 브라우저에 노출되지 않습니다.

```http
POST /api/analyze
Content-Type: application/json

{
  "url": "https://www.youtube.com/watch?v=...",
  "maxComments": 1000
}
```

개발 및 검증을 위한 세부 엔드포인트도 제공합니다.

- `POST /api/youtube/resolve` — URL 판별 및 채널·영상 메타데이터 조회
- `POST /api/youtube/comments` — 댓글 수집
- `POST /api/youtube/comments/prepare` — 전처리, 개인정보 마스킹, Gemini 배치 생성
- `POST /api/youtube/comments/analyze` — 댓글 분류·집계·최종 인사이트까지 실행

예상 가능한 URL, 조회 실패, 댓글 비활성화, AI 응답 검증 오류는 안전한 HTTP 오류 응답으로 변환합니다. 외부 제공자의 오류 본문이나 traceback은 반환하지 않습니다.

## 분석 범위와 제한

- 영상 분석은 일반 시청자 댓글만 반영하며, 영상·채널 소유자가 작성한 댓글은 제외합니다.
- 채널 분석의 댓글 수집은 채널 최신 영상 기준으로 동작하고, 영상당 최대 200개의 일반 시청자 댓글을 수집합니다.
- 댓글이 비활성화된 영상은 건너뜁니다.
- YouTube API가 제공하지 않는 공개 싫어요 수는 표시하지 않습니다.
- 채널 성과 차트는 업로드 날짜별 **현재 누적 조회수**를 보여 주는 공개 데이터 스냅샷이며, 과거 성장 추이나 비공개 YouTube Analytics를 의미하지 않습니다.
- AI 출력은 참고용 인사이트이며, 사실 판단 또는 성과를 보장하지 않습니다.

## 검증

```powershell
npm run test:backend
npm run lint
npm run build
```

백엔드 테스트는 YouTube·Gemini HTTP 호출을 모킹하므로 실제 API 키나 네트워크 연결이 필요하지 않습니다.

## 작업 원칙

- API 키는 백엔드 환경 변수에서만 관리하고 소스·프런트엔드에 포함하지 않습니다.
- URL 파싱은 `backend/app/services/youtube_target.py`, YouTube 연동은 `backend/app/services/youtube_service.py`에 유지합니다.
- 외부·API 경계 데이터는 Pydantic 스키마로 검증합니다.
- 버그 수정에는 회귀 테스트를 추가하고, 변경 후 관련 테스트와 프런트 lint/build를 실행합니다.
- 커밋 메시지는 Conventional Commits 형식을 사용하며 변경 내용은 한국어로 작성합니다.

---

<div align="center">
  공개 데이터에서 시청자 반응을 읽고, 다음 콘텐츠의 방향을 찾습니다.
</div>
