
import type { Metadata } from 'next';
import {
  education,
  experiences,
  pastProjects,
  publications,
  honors,
  conferences
} from '@/content/profile';

// ==========================================
// 1. 페이지 기본 정보
// ==========================================
export const metadata: Metadata = {
  title: 'CV'
};

// ==========================================
// 2. 공통 이력 표시 컴포넌트
// 모든 항목의 글자 스타일 통일
// ==========================================
function Entry({
  period,
  title,
  role,
  description
}: {
  period: string;
  title: string;
  role: string;
  description?: string;
}) {
  return (
    <div className="timeline-item">
      <span className="timeline-date">{period}</span>

      <div>
        <h3>{title}</h3>

        <p className="timeline-role">{role}</p>

        {description && (
          <p className="timeline-desc">{description}</p>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 3. 공통 섹션 제목 컴포넌트
// 모든 제목에 동일한 디자인 적용
// ==========================================
function CVHeading({ title }: { title: string }) {
  return (
    <div className="cv-unified-heading">
      <h2>{title}</h2>
    </div>
  );
}

// ==========================================
// 4. CV 페이지
// ==========================================
export default function CV() {
  // ========================================
  // 4-1. Conference 최신순 정렬
  // 원본 데이터는 변경하지 않음
  // ========================================
  const sortedConferences = [...conferences].sort((a, b) =>
    b.year.localeCompare(a.year)
  );

  return (
    <div className="container inner-page cv-page">

      {/* =====================================
          4-2. 페이지 상단 제목
      ===================================== */}
      <div className="page-header">
        <p className="eyebrow">BACKGROUND & EXPERIENCE</p>
        <h1>Curriculum Vitae</h1>
        <p>학력, 연구 경력, 수상 및 주요 연구 성과</p>
      </div>

      {/* =====================================
          5. Education
      ===================================== */}
      <section className="cv-section">
        <CVHeading title="Education" />

        {education.map(x => (
          <div
            className="timeline-item"
            key={x.university}
          >
            <span className="timeline-date">
              {x.period}
            </span>

            <div>
              <h3>{x.university}</h3>

              <p className="timeline-role">
                {x.degree}
              </p>

              <p className="timeline-desc">
                {x.department}
              </p>

              <p className="timeline-desc">
                Thesis: {x.thesis}
              </p>

              {x.advisor && (
                <p className="timeline-desc">
                  Advisor: {x.advisor}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* =====================================
          6. Professional Experience
      ===================================== */}
      <section className="cv-section">
        <CVHeading title="Professional Experience" />

        {experiences.map(x => (
          <Entry
            key={x.organization}
            period={x.period}
            title={x.organization}
            role={x.role}
            description={x.description}
          />
        ))}
      </section>

      {/* =====================================
          7. Research Projects
          연구 기간 / 과제명 / 수행 기관
      ===================================== */}
      <section className="cv-section">
        <CVHeading title="Research Projects" />

        <div className="cv-reference-list">
          {pastProjects.map(x => (
            <div
              className="cv-reference-row"
              key={`${x.organization}-${x.period}`}
            >
              <span className="cv-reference-date">
                {x.period}
              </span>

              <div className="cv-reference-content">
                <h3>{x.role}</h3>

                <p className="cv-reference-organization">
                  {x.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          8. Awards & Honors
      ===================================== */}
      <section className="cv-section">
        <CVHeading title="Awards & Honors" />

        {honors.map(x => (
          <Entry
            key={`${x.year}-${x.title}`}
            period={x.year}
            title={x.title}
            role={x.organization}
            description={x.note}
          />
        ))}
      </section>

      {/* =====================================
          9. Journal Publications
          기존 논문 정보 유지
      ===================================== */}
      <section className="cv-section">
        <CVHeading title="Journal Publications" />

        {publications.map(x => (
          <div
            className="timeline-item"
            key={x.id}
          >
            <span className="timeline-date">
              {x.year}
            </span>

            <div>
              <h3>{x.title}</h3>

              <p className="timeline-role">
                <i>{x.journal}</i> · {x.status}
              </p>

              <p className="timeline-desc">
                {x.note}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* =====================================
          10. Conference Presentations
          최신순 정렬 / 저자 정보 포함
      ===================================== */}
      <section className="cv-section">
        <CVHeading title="Conference Presentations" />

        {sortedConferences.map((x, index) => (
          <div
            className="timeline-item"
            key={`${x.year}-${x.title}-${index}`}
          >
            <span className="timeline-date">
              {x.year}
            </span>

            <div>
              <h3>{x.title}</h3>

              <p className="timeline-role">
                {x.authors}
              </p>

              <p className="timeline-desc">
                <i>{x.conference}</i>
              </p>

              <p className="timeline-desc">
                {x.location} · {x.type}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* =====================================
          11. CV 페이지 공통 디자인
      ===================================== */}
      <style>{`
        /* =====================================
           11-1. CV 공통 글자 크기 설정
        ===================================== */
        .cv-page {
          --cv-heading-size: 24px;
          --cv-title-size: 16px;
          --cv-date-size: 13px;
          --cv-role-size: 15px;
          --cv-description-size: 14px;
          --cv-line-color: #d5dce7;
          --cv-title-color: #172033;
          --cv-muted-color: #626d7d;
        }

        /* =====================================
           11-2. 섹션 사이 불필요한 선 제거
        ===================================== */
        .cv-page .cv-section {
          border-top: none !important;
          border-bottom: none !important;
        }

        .cv-page .cv-section > .timeline-item:last-child {
          border-bottom: none !important;
        }

        /* =====================================
           11-3. 모든 섹션 제목
           오른쪽 회색 가로선 유지
        ===================================== */
        .cv-page .cv-unified-heading {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          width: 100%;
        }

        .cv-page .cv-unified-heading::after {
          content: "";
          display: block;
          flex: 1;
          height: 1px;
          background-color: var(--cv-line-color);
        }

        .cv-page .cv-section .cv-unified-heading h2 {
          margin: 0;
          padding: 0;
          border: none;
          background: none;
          font-size: var(--cv-heading-size);
          font-weight: 700;
          line-height: 1.35;
          color: var(--cv-title-color);
        }

        .cv-page .cv-unified-heading h2::before,
        .cv-page .cv-unified-heading h2::after {
          content: none !important;
          display: none !important;
        }

        /* =====================================
           11-4. 모든 이력 제목 크기 통일
           대학명 / 회사명 / 연구 과제명
           수상명 / 논문명 / 발표 제목
        ===================================== */
        .cv-page .timeline-item h3,
        .cv-page .cv-reference-content h3 {
          margin: 0 0 6px;
          padding: 0;
          font-size: var(--cv-title-size);
          font-family: inherit;
          font-weight: 700;
          line-height: 1.5;
          color: var(--cv-title-color);
        }

        /* =====================================
           11-5. 모든 날짜 크기 통일
        ===================================== */
        .cv-page .timeline-date,
        .cv-page .cv-reference-date {
          font-size: var(--cv-date-size);
          font-weight: 400;
          line-height: 1.7;
          color: #929aaa;
        }

        /* =====================================
           11-6. 소속 / 학위 / 저자 / 수행 기관
        ===================================== */
        .cv-page .timeline-role,
        .cv-page .cv-reference-organization {
          margin: 0;
          font-size: var(--cv-role-size);
          font-weight: 400;
          line-height: 1.6;
          color: var(--cv-muted-color);
        }

        /* =====================================
           11-7. 상세 설명 글자 크기 통일
        ===================================== */
        .cv-page .timeline-desc {
          margin: 0;
          font-size: var(--cv-description-size);
          font-weight: 400;
          line-height: 1.6;
          color: var(--cv-muted-color);
        }

        /* =====================================
           11-8. Research Projects 목록
           기존 날짜 / 과제명 정렬 유지
        ===================================== */
        .cv-page .cv-reference-list {
          width: 100%;
        }

        .cv-page .cv-reference-row {
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr);
          column-gap: 26px;
          padding: 24px 0;
          border-bottom: 1px solid var(--cv-line-color);
          align-items: start;
        }

        .cv-page .cv-reference-row:last-child {
          border-bottom: none;
        }

        /* =====================================
           11-9. 모바일 화면
        ===================================== */
        @media (max-width: 640px) {
          .cv-page {
            --cv-heading-size: 22px;
            --cv-title-size: 16px;
            --cv-date-size: 13px;
            --cv-role-size: 15px;
            --cv-description-size: 14px;
          }

          .cv-page .cv-unified-heading {
            gap: 12px;
          }

          .cv-page .cv-reference-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 20px 0;
          }
        }
      `}</style>
    </div>
  );
}
