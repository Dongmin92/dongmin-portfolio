
import type { Metadata } from 'next';
import { researchAreas } from '@/content/profile';
import ResearchFilter from '@/components/ResearchFilter';

// ==========================================
// 1. 페이지 기본 정보
// ==========================================
export const metadata: Metadata = {
  title: 'Research'
};

// ==========================================
// 2. Research 페이지
// ==========================================
export default function Research() {
  return (
    <div className="container inner-page">

      {/* =====================================
          2-1. 페이지 상단 소개
      ===================================== */}
      <div className="page-header">
        <p className="eyebrow">FOCUS & PROJECTS</p>
        <h1>Research</h1>
        <p>산업 시스템의 신뢰성 평가, 고장진단 및 건전성 예측을 위한 연구</p>
      </div>

      {/* =====================================
          2-2. 연구 분야
      ===================================== */}
      <div className="research-intro">
        {researchAreas.map(x => (
          <div key={x.index}>
            <span>{x.index}</span>
            <h3>{x.title}</h3>
            <p>{x.en}</p>
          </div>
        ))}
      </div>

      {/* =====================================
          3. Research & Projects
      ===================================== */}
      <section className="main-section research-projects">
        <h2 className="filter-title">Research & Projects</h2>
        <ResearchFilter />
      </section>
    </div>
  );
}
