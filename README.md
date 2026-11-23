# 이동민 연구자 포트폴리오

Next.js(App Router) + TypeScript + CSS 기반 한국어 개인 연구자 포트폴리오.

## 1. 로컬 실행

Node.js 20 이상 설치 후:

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속.

## 2. 내용 수정

- **`content/profile.ts`**: 이름, 소개, 경력, 학력, 연구·논문·수상 이력과 외부 프로필 URL
- **`app/globals.css`**: 색상, 글꼴, 레이아웃
- **`app/page.tsx`**: 첫 화면
- **`app/cv/page.tsx`**, **`app/research/page.tsx`**, **`app/awards/page.tsx`**, **`app/contact/page.tsx`**: 개별 페이지

**주의:** 아직 정확히 확인되지 않은 대학명, 논문 제목/DOI, 수상 내역, 공개 이메일, Google Scholar/GitHub/LinkedIn 주소는 비워 두었거나 명확히 '확인 필요'로 표시했습니다. 배포 전 반드시 점검하세요.

### 프로필 사진 설정

`public/profile.jpg` 파일을 추가한 후 `app/page.tsx`의 `.portrait-placeholder` 내부 SVG 및 안내문을 아래 이미지로 바꾸세요.

```tsx
<img src="/profile.jpg" alt="이동민 프로필 사진" style={{width:'100%',height:'100%',objectFit:'cover'}} />
```

## 3. GitHub에 올리기

GitHub에서 새 빈 저장소를 만들고, 프로젝트 폴더에서:

```bash
git init
git add .
git commit -m "Initial research portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_ID/YOUR_REPO.git
git push -u origin main
```

`YOUR_ID`와 `YOUR_REPO`는 실제 값으로 수정하세요. Git 인증이 필요할 수 있습니다.

## 4. Vercel 배포

1. https://vercel.com 에 GitHub 계정으로 로그인
2. **Add New → Project → Import Git Repository**
3. 생성한 포트폴리오 저장소 선택
4. Framework Preset: **Next.js** (자동 감지)
5. **Deploy** 클릭
6. 배포 후 자동 생성된 `*.vercel.app` 주소로 접속
7. 개인 도메인은 Vercel 프로젝트 **Settings → Domains**에서 추가

GitHub `main` 브랜치에 새 커밋을 push하면 Vercel에서 다시 배포합니다.

## 5. 개인정보·보안

본 사이트는 사용자가 이미 제공한 이력 중 공개 프로필로 표현 가능한 일반적인 사항만 사용합니다. 내부 회의·시제품·시험 조건·비공개 고객 정보는 포함하지 않았습니다. 실제 배포 전 소속 기관의 공개 정책에 맞는지 확인하세요.

## 구현 기능

- Home / CV / Research / Awards / Contact 페이지
- 모바일 반응형, 햄버거 메뉴
- 다크모드, 브라우저 저장
- 연구 분야 필터 버튼
- 한국어 본문, 영문 학술 메뉴
- 정적 콘텐츠 편집 (외부 CMS 불필요)
