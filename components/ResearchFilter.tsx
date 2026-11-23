
'use client';

import { useState } from 'react';
import { projects } from '@/content/profile';

// ==========================================
// 1. 연구 분야 필터 설정
// ==========================================
const tabs = [
  '전체',
  '신뢰성공학',
  '고장진단',
  '수명예측',
  '지속학습'
];

// ==========================================
// 2. 필터와 연구 분야 연결
// ==========================================
const filterTypes: Record<string, string> = {
  '신뢰성공학': 'Reliability Engineering',
  '고장진단': 'Fault Diagnosis',
  '수명예측': 'RUL Prediction',
  '지속학습': 'Continual Learning'
};

// ==========================================
// 3. 연구별 분류 및 그림 설정
// category: First Author / Project
// images: 그림 경로와 설명
// ==========================================
type ResearchImage = {
  src: string;
  caption: string;
};

type ResearchDetail = {
  category: string;
  images: ResearchImage[];
};

const researchDetails: Record<string, ResearchDetail> = {
  // ========================================
  // 3-1. 신뢰성공학
  // ========================================
  'Reliability Engineering': {
    category: 'Project',
    images: [
      // {
      //   src: '/research/reliability-01.png',
      //   caption: 'Figure 1. Reliability assessment'
      // }
    ]
  },

  // ========================================
  // 3-2. 고장진단
  // ========================================
  'Fault Diagnosis': {
    category: 'First Author',
    images: [
      // {
      //   src: '/research/fault-01.png',
      //   caption: 'Figure 1. Fault diagnosis framework'
      // }
    ]
  },

  // ========================================
  // 3-3. 잔여수명 예측
  // ========================================
  'RUL Prediction': {
    category: 'Project',
    images: [
      // {
      //   src: '/research/rul-01.png',
      //   caption: 'Figure 1. RUL prediction framework'
      // }
    ]
  },

  // ========================================
  // 3-4. 지속학습 및 도메인 적응
  // ========================================
  'Continual Learning': {
    category: 'First Author',
    images: [
      // {
      //   src: '/research/continual-01.png',
      //   caption: 'Figure 1. Continual learning framework'
      // }
    ]
  }
};

// ==========================================
// 4. ResearchFilter 컴포넌트
// ==========================================
export default function ResearchFilter() {
  const [filter, setFilter] = useState('전체');

  // ========================================
  // 4-1. 연구 분야별 필터링
  // ========================================
  const filteredProjects = projects.filter(
    p => filter === '전체' || p.type === filterTypes[filter]
  );

  return (
    <>
      {/* =====================================
          4-2. 연구 분야 필터 버튼
          기존 CSS 디자인 유지
      ===================================== */}
      <div
        className="filter-tabs"
        role="group"
        aria-label="연구 분야 필터"
      >
        {tabs.map(t => (
          <button
            key={t}
            type="button"
            className={filter === t ? 'selected' : ''}
            onClick={() => setFilter(t)}
            aria-pressed={filter === t}
          >
            {t}
          </button>
        ))}
      </div>

      {/* =====================================
          5. 연구 프로젝트 목록
      ===================================== */}
      <div className="research-list">
        {filteredProjects.map((p, i) => {
          const detail = researchDetails[p.type];

          return (
            <article className="project-item" key={p.title}>

              {/* =================================
                  5-1. 번호 / 분류 / 연구 기간
              ================================= */}
              <div className="project-meta">
                <span>{String(i + 1).padStart(2, '0')}</span>
                {detail?.category && (
                  <span>{detail.category}</span>
                )}
                <span>{p.year}</span>
              </div>

              {/* =================================
                  5-2. 연구 분야명 및 설명
              ================================= */}
              <div style={{ minWidth: 0 }}>
                <p className="eyebrow">{p.type}</p>
                <h3>{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                {/* =============================
                    5-3. 연구 그림 목록
                    그림이 있을 때만 표시
                ============================= */}
                {detail?.images.map((img, index) => (
                  <figure
                    key={`${img.src}-${index}`}
                    style={{
                      margin: '24px 0',
                      maxWidth: '760px'
                    }}
                  >
                    <img
                      src={img.src}
                      alt={`${p.title} 연구 그림 ${index + 1}`}
                      loading="lazy"
                      style={{
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb'
                      }}
                    />

                    {/* =========================
                        5-4. 그림 설명
                    ========================= */}
                    {img.caption && (
                      <figcaption
                        style={{
                          marginTop: '10px',
                          fontSize: '13px',
                          lineHeight: '1.6',
                          color: '#64748b',
                          textAlign: 'center'
                        }}
                      >
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}

                {/* =============================
                    5-5. 연구 키워드
                ============================= */}
                <div className="tags">
                  {p.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* =================================
                  5-6. 기존 화살표
              ================================= */}
              <span
                className="project-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          );
        })}
      </div>
    </>
  );
}
