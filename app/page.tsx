
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import {
  profile,
  researchAreas,
  publications
} from '@/content/profile';

// ==========================================
// 0. 논문별 IF 및 JCR Rank 설정
// ==========================================
// content/profile.ts의 논문 순서대로 입력
// IF: Impact Factor
// Rank: JCR 백분위 또는 순위
// 빈칸('')이면 화면에 표시되지 않음
// ==========================================
const publicationMetrics = [
  { impactFactor: '7.5', rank: '2.5%' }, // J1
  { impactFactor: '', rank: '' }         // J2
];

// ==========================================
// 1. Home 페이지
// ==========================================
export default function Home() {
  return (
    <div className="container home-page">

      {/* =====================================
          1-1. 메인 프로필 및 자기소개
          이름: content/profile.ts
          직함: profile.tagline
          자기소개: 아래 문구 직접 수정
      ===================================== */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            RESEARCHER · ENGINEER
          </p>
          <h1>
            {profile.nameKo}
            <span className="en-name">
              {profile.nameEn}
            </span>
          </h1>
          <p className="hero-role">{profile.tagline}</p>
          <p className="hero-description">
            기계·전자 시스템의 고장진단 및 잔여수명 예측을 연구하고 있습니다.
            인공지능과 신뢰성공학을 기반으로 시스템의 건전성을 평가하고,
            고장을 예측하기 위한 기술을 개발하고 있습니다.
          </p>

          {/* =====================================
              1-2. 메인 페이지 버튼
          ===================================== */}
          <div className="hero-actions">
            <Link href="/cv" className="primary-link">
              이력서 보기 <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/contact" className="secondary-link">
              연락하기 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* =====================================
            1-3. 프로필 사진
            수정 위치: public/profile.JPG
            사진 크기: maxWidth
            사진 비율: aspectRatio
        ===================================== */}
        <div
          className="profile-frame"
          style={{
            width: '100%',
            maxWidth: '250px',
            height: 'auto',
            alignSelf: 'start'
          }}
        >
          <div
            className="portrait-placeholder"
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '551 / 709',
              overflow: 'hidden',
              backgroundColor: '#ffffff'
            }}
          >
            <img
              src="/profile.JPG"
              alt="이동민 프로필 사진"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center center',
                display: 'block'
              }}
            />
          </div>

          {/* =====================================
              1-4. 사진 하단 설명
          ===================================== */}
          <div className="profile-caption">
            Dongmin Lee
            <span>RELIABILITY / PHM / AI</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* =====================================
          2. Research Overview
          수정 위치: content/profile.ts
          연구 분야: researchAreas
      ===================================== */}
      <section className="main-section">

        {/* =====================================
            2-1. 연구 분야 제목
        ===================================== */}
        <SectionTitle
          title="Research Overview"
          description="기계·전자 시스템을 위한 진단, 예측, 신뢰성 연구"
          href="/research"
          linkText="연구 자세히 보기"
        />

        {/* =====================================
            2-2. 연구 분야 카드
            제목: area.title
            영문명: area.en
            설명: area.description
            키워드: area.tags
        ===================================== */}
        <div className="area-grid">
          {researchAreas.map(area => (
            <article key={area.index} className="area-card">
              <div className="area-index">
                {area.index} / 04
              </div>
              <h3>{area.title}</h3>
              <p className="area-en">{area.en}</p>
              <p className="area-desc">{area.description}</p>
              <div className="tags">
                {area.tags.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================
          3. Selected Publications
          논문 기본 정보: content/profile.ts
          IF / Rank: 코드 상단 0번
      ===================================== */}
      <section className="main-section selected-section">

        {/* =====================================
            3-1. 대표 논문 제목
        ===================================== */}
        <SectionTitle
          title="Selected Publications"
          description="대표 연구 성과"
          href="/cv"
          linkText="전체 이력 보기"
        />

        {/* =====================================
            3-2. 대표 논문 목록
            제목: p.title
            설명: p.subtitle
            저널: p.journal
            연도: p.year
            상태: p.status
            링크: p.url
        ===================================== */}
        <div className="publication-list">
          {publications.map((p, index) => {
            const metrics = publicationMetrics[index];

            return (
              <article key={p.id} className="pub-row">
                <span className="pub-code">{p.id}</span>
                <div>

                  {/* =====================================
                      3-3. 논문 제목 및 링크
                      링크 수정: content/profile.ts
                  ===================================== */}
                  <h3>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'inherit',
                          textDecoration: 'none'
                        }}
                      >
                        {p.title} ↗
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p>{p.subtitle}</p>

                  {/* =====================================
                      3-4. 저널 및 발행 정보
                  ===================================== */}
                  <div className="pub-meta">
                    <em>{p.journal}</em>
                    <span>{p.year}</span>
                    <span>{p.status}</span>
                  </div>

                  {/* =====================================
                      3-5. IF 및 JCR Rank 표시
                      수치 수정: 코드 상단 0번
                  ===================================== */}
                  {(metrics?.impactFactor || metrics?.rank) && (
                    <div
                      className="pub-metrics"
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '16px',
                        marginTop: '10px',
                        marginBottom: '10px',
                        fontSize: '13px'
                      }}
                    >
                      {metrics.impactFactor && (
                        <span>
                          <strong>IF:</strong> {metrics.impactFactor}
                        </span>
                      )}
                      {metrics.rank && (
                        <span>
                          <strong>JCR Rank:</strong> {metrics.rank}
                        </span>
                      )}
                    </div>
                  )}

                  <p className="pub-note">{p.note}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================
          4. Contact 안내
          아래 문구 직접 수정 가능
      ===================================== */}
      <section className="closing-note">
        <div>
          <p className="eyebrow">
            OPEN TO RESEARCH DISCUSSIONS
          </p>
          <h2>
            연구와 기술에 관한
            <br />
            새로운 대화를 환영합니다.
          </h2>
        </div>

        {/* =====================================
            4-1. Contact 이동 버튼
        ===================================== */}
        <Link href="/contact" className="primary-link">
          Contact <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  );
}
