
import type { Metadata } from 'next';

// ==========================================
// 1. 페이지 기본 정보
// ==========================================
export const metadata: Metadata = {
  title: 'Contact'
};

// ==========================================
// 2. 이메일 및 외부 프로필 링크
// ==========================================
const emails = [
  'dongmin77@hanwha.com',
  'dlehdals115@gmail.com'
];

const links = [
  ['Google Scholar', 'https://scholar.google.com/citations?hl=ko&user=c2mmIZ4AAAAJ'],
  ['LinkedIn', 'https://www.linkedin.com/in/%EB%8F%99%EB%AF%BC-%EC%9D%B4-33aa30286/']
];

// ==========================================
// 3. Contact 페이지
// ==========================================
export default function Contact() {
  return (
    <div className="container inner-page">
      {/* =====================================
          3-1. 페이지 제목
      ===================================== */}
      <div className="page-header">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Contact</h1>
        <p>연구 및 기술 분야에 대한 의견 교환과 학술적 소통을 환영합니다.</p>
      </div>

      {/* =====================================
          3-2. 이메일
      ===================================== */}
      <section className="contact-section">
        <div>
          <h2>Email</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {emails.map(email => (
              <a
                key={email}
                className="contact-main-link"
                href={`mailto:${email}`}
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  overflowWrap: 'anywhere'
                }}
              >
                {email} ↗
              </a>
            ))}
          </div>
        </div>

        {/* =====================================
            3-3. 외부 프로필
        ===================================== */}
        <div>
          <h2>Profiles & Links</h2>
          <div className="contact-link-list">
            {links.map(([name, url]) => (
              <div className="contact-link-row" key={name}>
                <span>{name}</span>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  프로필 방문 ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          3-4. 하단 안내
      ===================================== */}
      <p className="editorial-note">
        연구 및 기술 분야에 대한 의견 교환이나 학술적 소통을 원하시면 위 이메일로 연락해 주시기 바랍니다.
      </p>
    </div>
  );
}
