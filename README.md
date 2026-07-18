# 🐹 두더지팡팡 (Mole Tap!)

황금·폭탄·보스 두더지와 피버 타임이 있는 무료 브라우저 두더지 잡기 게임.

**서비스 주소**: https://mole.dobal-e.com

## 파일 구성

| 파일 | 역할 |
|---|---|
| `index.html` | 게임 본체 (단일 파일, 외부 의존성: Google Fonts만) |
| `manifest.json` | PWA 매니페스트 (홈 화면 추가 지원) |
| `icon.svg`, `icon-192.png`, `icon-512.png` | 파비콘 / 앱 아이콘 |
| `og-image.png` | 카톡·SNS 공유 미리보기 카드 이미지 (1200×630) |
| `robots.txt`, `sitemap.xml` | 검색엔진 크롤링/색인 |
| `_headers` | Cloudflare Pages 보안·캐시 헤더 |
| `guide.html` | 게임 방법 & 공략 가이드 |
| `blog.html`, `blog-*.html` | 블로그 (역사 / 반응속도 과학 / 캐주얼 게임 활용) |
| `about.html` | 사이트 소개 & 문의처 |
| `privacy.html` | 개인정보처리방침 |
| `site.css`, `consent.js` | 콘텐츠 페이지 공용 스타일 / 쿠키 동의 배너 |
| `ads.txt` | AdSense 게시자 ID 등록 파일 (승인 후 수정 필요) |

## 배포 절차

### 1) GitHub 저장소에 올리기

```bash
cd mole-game
git init
git add .
git commit -m "feat: 두더지팡팡 v1.0"
git branch -M main
git remote add origin https://github.com/<내계정>/mole-game.git
git push -u origin main
```

### 2) Cloudflare Pages 연결

1. Cloudflare 대시보드 → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. `mole-game` 저장소 선택
3. 빌드 설정: **Framework preset: None**, 빌드 명령어·출력 디렉터리 **모두 비워두기** (정적 파일이므로 빌드 불필요)
4. **Save and Deploy** → `mole-game.pages.dev` 임시 주소로 배포 확인

### 3) 커스텀 도메인 연결 (mole.dobal-e.com)

1. 해당 Pages 프로젝트 → **Custom domains** → **Set up a custom domain**
2. `mole.dobal-e.com` 입력
3. `dobal-e.com`이 Cloudflare에서 DNS 관리 중이면 **CNAME 레코드가 자동 생성**됩니다 (수동 설정 불필요)
   - 타사 DNS 사용 중이라면: `mole` CNAME → `mole-game.pages.dev` 레코드를 직접 추가
4. SSL 인증서는 자동 발급 (수 분 소요)

### 4) 배포 후 확인 체크리스트

- [ ] https://mole.dobal-e.com 접속 및 게임 동작
- [ ] 모바일에서 터치·진동·사운드 확인
- [ ] 카카오톡에 링크 보내서 미리보기 카드(og-image) 표시 확인
  - 카드가 안 나오면: https://developers.kakao.com/tool/debugger/sharing 에서 캐시 초기화
- [ ] Google Search Console에 도메인 등록 + sitemap.xml 제출

## 이후 업데이트 방법

파일 수정 → `git push` 하면 Cloudflare가 **자동으로 재배포**합니다 (약 30초).

```bash
git add . && git commit -m "fix: 밸런스 조정" && git push
```

## 로드맵 (계획안 기준)

- [x] 1단계: MVP + 특수 두더지/피버/보스/서바이벌
- [x] 2단계: 배포 (GitHub + Cloudflare Pages + 커스텀 도메인)
- [x] 3단계: AdSense 승인 준비 (콘텐츠 페이지, 개인정보처리방침, 쿠키 동의, ads.txt)
- [ ] 4단계: AdSense 광고 배치

## AdSense 신청 절차 (3단계 배포 후)

1. **배포 확인**: 모든 페이지(/, /guide.html, /blog.html, /about.html, /privacy.html)가 정상 접속되는지 확인
2. **수정할 것**:
   - `about.html`, `privacy.html`의 문의 이메일(`contact@dobal-e.com`)을 실제 사용하는 주소로 변경
3. **AdSense 가입**: https://adsense.google.com → 사이트 추가 → `mole.dobal-e.com`
4. AdSense가 제공하는 **사이트 소유 확인 코드**(`<script ...adsbygoogle...>`)를 `index.html`의 `</head>` 바로 위에 붙여넣고 push
5. 심사 요청 (통상 1일~4주 소요)
6. **승인 후**:
   - `ads.txt`의 주석을 해제하고 본인 게시자 ID(pub-XXXX)로 교체
   - 광고 단위를 생성해 게임오버 화면·콘텐츠 페이지에 배치 (4단계)
   - AdSense 설정에서 GDPR 동의 메시지(Google CMP) 활성화 — EEA 지역 필수
- [ ] 5단계: PWA 오프라인 지원(Service Worker), 추가 두더지 타입
- [ ] 6단계: Cloudflare Workers + D1 글로벌 리더보드
