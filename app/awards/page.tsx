import type {Metadata} from 'next';
import {honors} from '@/content/profile';
export const metadata:Metadata={title:'Awards'};
export default function Awards(){return <div className="container inner-page"><div className="page-header"><p className="eyebrow">MILESTONES</p><h1>Awards & Honors<span className="accent">.</span></h1><p>확인된 학술 이정표와 수상 내역을 정리합니다.</p></div><section className="cv-section"><h2>Academic Milestones</h2>{honors.map(x=><div className="timeline-item" key={x.title}><span className="timeline-date">{x.year}</span><div><h3>{x.title}</h3><p className="timeline-role">{x.organization}</p><p className="timeline-desc">{x.note}</p></div></div>)}</section><p className="editorial-note">수상 여부가 확인되지 않은 후보·추천 이력은 수상 내역에 포함하지 않았습니다.</p></div>}
