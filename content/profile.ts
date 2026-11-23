
/**
 * 홈페이지에 표시되는 콘텐츠를 관리합니다.
 * CV 기반 학력, 연구 경력, 프로젝트 및 수상 이력을 반영했습니다.
 * 회사 보안 규정상 공개 가능한 내용만 작성하세요.
 */

// ==========================================
// 1. 기본 프로필
// ==========================================
export const profile = {
  nameKo: '이   동   민',
  nameEn: 'Dongmin Lee',
  credential: 'Ph.D.',
  tagline: 'Reliability Engineering · PHM · RUL Prediction · Industrial AI',
  summary: '신뢰성공학과 PHM을 기반으로 기계·전자 시스템의 고장진단 및 잔여수명 예측 기술을 연구합니다. 확률론적 신뢰성 평가, 유한요소 및 다물체 동역학 시뮬레이션, 인공지능 기반 고장진단, 가속수명시험 설계와 지속학습 기술을 다루고 있습니다.',
  subline: '신뢰성공학 · 고장진단 · 잔여수명 예측 · 지속학습',
  email: 'dlehdals115@gmail.com',
  github: '',
  scholar: 'https://scholar.google.com/citations?hl=ko&user=c2mmIZ4AAAAJ',
  linkedin: '',
  orcid: '',
  university: 'Gwangju Institute of Science and Technology',
  degree: 'Ph.D. in Mechanical Engineering (2026.02)'
};

// ==========================================
// 2. 연구 분야 (Research Overview)
// ==========================================
export const researchAreas = [
  // ========================================
  // 01. 신뢰성공학
  // ========================================
  {
    index: '01',
    title: '신뢰성공학',
    en: 'Reliability Engineering',
    description: '확률론적 신뢰성 평가, 가속수명시험 설계 및 고장물리 기반 수명평가',
    tags: ['Reliability', 'ALT', 'Physics of Failure']
  },

  // ========================================
  // 02. 고장진단
  // ========================================
  {
    index: '02',
    title: '고장진단',
    en: 'Fault Diagnosis',
    description: '회전체 및 산업 시스템의 시뮬레이션과 인공지능을 활용한 고장진단 기술 개발',
    tags: ['PHM', 'Digital Twin', 'Deep Learning']
  },

  // ========================================
  // 03. 잔여수명 예측
  // ========================================
  {
    index: '03',
    title: '잔여수명 예측',
    en: 'RUL Prediction',
    description: '열화 데이터와 물리 기반 모델을 활용한 고장예측 및 잔여수명 평가',
    tags: ['RUL', 'Prognostics', 'Physics-based Model']
  },

  // ========================================
  // 04. 지속학습 및 도메인 적응
  // ========================================
  {
    index: '04',
    title: '지속학습 및 도메인 적응',
    en: 'Continual Learning',
    description: '설계 단계의 부족한 데이터와 현장 데이터를 연계하는 지속학습 및 도메인 적응 기술',
    tags: ['Continual Learning', 'Domain Adaptation', 'Transfer Learning']
  }
];

// ==========================================
// 3. 학력 (Education)
// ==========================================
export const education = [
  // ========================================
  // 3-1. 박사학위
  // ========================================
  {
    period: '2018.09 – 2026.02',
    university: 'Gwangju Institute of Science and Technology',
    department: 'Department of Mechanical and Robotics Engineering',
    degree: 'Ph.D. in Mechanical Engineering',
    thesis: 'A Study on Fault Diagnosis Incrementally Integrating Field Data from the Data-Limited Design Stage',
    advisor: 'Hyunseok Oh',
    location: 'Gwangju, Korea'
  },

  // ========================================
  // 3-2. 학사학위
  // ========================================
  {
    period: '2011.03 – 2018.03',
    university: 'Pukyong National University',
    department: 'Department of Mechanical Engineering',
    degree: 'B.S. in Mechanical Engineering',
    thesis: 'Variational Asymptotic Beam Sectional Analysis',
    advisor: '',
    location: 'Busan, Korea'
  }
];

// ==========================================
// 4. 경력 (Experience)
// ==========================================
export const experiences = [
  // ========================================
  // 4-1. 한화시스템
  // ========================================
  {
    period: '2026.09 – 현재',
    organization: '한화시스템',
    role: '전문연구원 · IPS2팀',
    description: '레이더 장비의 신뢰성 평가 및 PHM 기술 개발, 인공지능 기반 잔여수명 예측모델 연구.'
  },

  // ========================================
  // 4-2. LG에너지솔루션
  // ========================================
  {
    period: '2026.01 – 2026.08',
    organization: 'LG 에너지솔루션',
    role: '책임연구원 · 조립자동보정팀',
    description: '제조공정 수율 향상을 위한 PLC 기반 자동보정 제어 로직 설계 및 공정 이상 대응을 통한 생산설비 안정화.'
  }
];

// ==========================================
// 5. 주요 수행 연구 과제 (Past Projects)
// CV에 기재된 과제명 및 수행 기간 반영
// ==========================================
export const pastProjects = [
  // ========================================
  // 5-1. LG이노텍
  // ========================================
  {
    period: '2018.07 – 2019.06',
    organization: 'LG이노텍',
    role: '확률론적 Simulation 기술 개발을 통한 Solder Joint의 열충격 신뢰성예측',
    description: 'ANSYS APDL 기반 유한요소모델 개발 및 확률론적 수명평가.'
  },

  // ========================================
  // 5-2. 현대자동차
  // ========================================
  {
    period: '2019.02 – 2020.02',
    organization: '현대자동차',
    role: '자동차 부품 신뢰성 TFT',
    description: '통계적 데이터 분석 및 FMEA 기반 가속수명시험 설계.'
  },

  // ========================================
  // 5-3. 국가보안연구소
  // ========================================
  {
    period: '2020.04 – 2020.10',
    organization: '국가보안연구소',
    role: '고장물리학 기반 IoT 장치의 신뢰성 검증에 관한 연구',
    description: '국제규격 기반 양품·불량 판별 가이드 작성, 시뮬레이션 해석 및 수명평가.'
  },

  // ========================================
  // 5-4. 한전KPS
  // ========================================
  {
    period: '2020.09 – 2021.09',
    organization: '한전KPS',
    role: '증기 터빈 로터 중심공 및 로터 림 부착부의 확률론적 해석 및 수명평가 모델 개발',
    description: '비파괴검사(NDE) 데이터를 이용한 불확실성 정량화와 시뮬레이션 기반 확률론적 수명평가.'
  },

  // ========================================
  // 5-5. 한화오션
  // ========================================
  {
    period: '2022.09 – 2026.01',
    organization: '한화오션',
    role: '해양플랜트 동력시스템 PHM 모듈 개발',
    description: '제품 설계 단계의 시뮬레이션 기반 데이터 생성, 이상감지, 고장진단 및 고장예측 연구.'
  }
];

// ==========================================
// 6. 논문 목록 (Journal Publications)
// 기존 J1 / J2 유지: 수정하지 않음
// ==========================================
export const publications = [
  // ========================================
  // J1. 국제학술지 (2025)
  // ========================================
  {
    id: 'J1',
    year: '2025',
    title: 'Multi-fidelity sub-label-guided transfer network with physically interpretable synthetic datasets for rotor fault diagnosis',
    subtitle: '물리적 해석이 가능한 다중 충실도 합성 데이터와 전이학습을 활용한 회전체 고장진단 연구',
    journal: 'Engineering Applications of Artificial Intelligence',
    status: 'Published',
    note: 'Volume 148 · Article 110467 · May 2025',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0952197625004671'
  },

  // ========================================
  // J2. 국내학술지 (2023)
  // ========================================
  {
    id: 'J2',
    year: '2023',
    title: 'Digital Twin Finite Element Model for Fault Diagnosis of Rotor System',
    subtitle: '회전체 시스템의 유한요소모델 구축, 모델 보정 및 고장진단을 위한 디지털 트윈 연구',
    journal: '대한기계학회논문집 A권',
    status: 'Published',
    note: 'Vol. 47, No. 5 · pp. 401–408 · May 2023',
    url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11405402'
  }
];

// ==========================================
// 7. Research & Projects
// 기존 필터 및 디자인과 호환되도록 type 유지
// ==========================================
export const projects = [
  // ========================================
  // 01. 신뢰성공학
  // ========================================
  {
    year: '2018 – 2021',
    title: '신뢰성공학',
    type: 'Reliability Engineering',
    desc: '솔더 접합부, IoT 장치 및 증기터빈 로터를 대상으로 확률론적 수명평가, 불확실성 정량화, 고장물리 분석 및 가속수명시험 설계 연구.',
    tags: ['Reliability', 'Accelerated Life Test', 'Physics of Failure']
  },

  // ========================================
  // 02. 고장진단
  // ========================================
  {
    year: '2022.09 – 2026.01',
    title: '고장진단',
    type: 'Fault Diagnosis',
    desc: '회전체와 해양플랜트 동력시스템을 대상으로 시뮬레이션 기반 고장 데이터 생성, 디지털 트윈, 인공지능 및 현장 데이터 기반 고장진단 연구.',
    tags: ['PHM', 'Digital Twin', 'Deep Learning']
  },

  // ========================================
  // 03. 잔여수명 예측
  // ========================================
  {
    year: '2022.09 – 2026.01',
    title: '잔여수명 예측',
    type: 'RUL Prediction',
    desc: '시뮬레이션 기반 물리 지식, 열화 데이터 및 데이터 기반 예측기술을 활용한 고장예측과 잔여수명 평가 연구.',
    tags: ['RUL', 'Prognostics', 'Life Prediction']
  },

  // ========================================
  // 04. 지속학습 및 도메인 적응
  // ========================================
  {
    year: '2026.02',
    title: '지속학습 및 도메인 적응',
    type: 'Continual Learning',
    desc: '설계 초기의 데이터 부족 문제를 해결하기 위한 다중 충실도 시뮬레이션 데이터와 현장 데이터의 단계적 통합 및 지속학습 기반 고장진단 연구.',
    tags: ['Continual Learning', 'Domain Adaptation', 'Transfer Learning']
  }
];

// ==========================================
// 8. 수상 이력 (Awards & Honors)
// ==========================================
export const honors = [
  // ========================================
  // 8-1. 한국PHM학회 우수학위논문상
  // ========================================
  {
    year: '2026.06',
    title: '우수학위논문상',
    organization: '한국PHM학회',
    note: ''
  },

  // ========================================
  // 8-2. 대한기계학회 우수논문상
  // ========================================
  {
    year: '2023.05',
    title: 'Best Paper Award',
    organization: '대한기계학회 CAE 및 응용역학부문',
    note: ''
  }
];

// ==========================================
// 9. 학술대회 발표 (Conference Presentations)
// 총 19건, 최신 발표순 정렬
// ==========================================
export const conferences = [
  // ========================================
  // 9-1. 대한기계학회 (2025.04)
  // ========================================
  {
    year: '2025.04',
    authors: '오현석, 이동민',
    title: '엔지니어링 시스템 설계 초기 데이터 부족 극복을 위한 다충실도 합성 데이터 기반 결함 진단 접근법',
    conference: '대한기계학회 CAE 및 응용역학부문 2025년 춘계학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-2. 대한기계학회 (2025.04)
  // ========================================
  {
    year: '2025.04',
    authors: '정상준, 이동민, 오현석',
    title: '잔여유효수명 실시간 예측을 위한 가벼운 다중 충실도 신경망',
    conference: '대한기계학회 CAE 및 응용역학부문 2025년 춘계학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-3. 대한기계학회 (2024.11)
  // ========================================
  {
    year: '2024.11',
    authors: '정상준, 이동민, 오현석',
    title: '회전 기기 수명 예측을 위한 저충실도 물리 지식 기반 베이지안 신경망',
    conference: '대한기계학회 2024년 학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-4. 대한기계학회 (2024.05)
  // ========================================
  {
    year: '2024.05',
    authors: '박천하, 장영우, 이동민, 이준규, 오현석, 김창완',
    title: '건전성 진단관리를 위한 다물체 동역학 기반 회전체 시스템 동특성 해석 모델 개발',
    conference: '대한기계학회 CAE 및 응용역학부문 2024년 춘계학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-5. 대한기계학회 (2024.03)
  // ========================================
  {
    year: '2024.03',
    authors: '이동민, 이준규, 오현석, 박천하, 김창완',
    title: '설계 단계에서 다중 충실도 모델 활용 회전기계 건전성 데이터 구축 및 진단 모델 개발',
    conference: '대한기계학회 신뢰성부문 2024년 춘계학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-6. 대한기계학회 (2023.11)
  // ========================================
  {
    year: '2023.11',
    authors: '이동민, 이준규, 오현석, 김창완',
    title: '다중 충실도 모델 이용한 회전체 시스템 진단 모델 개발',
    conference: '대한기계학회 2023년 학술대회',
    location: 'Incheon, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-7. 대한기계학회 (2023.11)
  // ========================================
  {
    year: '2023.11',
    authors: '이준규, 이동민, 김창완, 이동민',
    title: '확률 잔차 활용 다물체 동역학 모델을 통한 회전체 시스템 결함 데이터 생성 및 검증',
    conference: '대한기계학회 2023년 학술대회',
    location: 'Incheon, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-8. WCSMO (2023.06)
  // ========================================
  {
    year: '2023.06',
    authors: 'Dongmin Lee, Hyunseok Oh, Chang Wan Kim',
    title: 'Digital Twin of Rotating Machines for Proactive Maintenance of Plant Facilities',
    conference: 'World Congress of Structural and Multidisciplinary Optimization',
    location: 'Cork, Ireland',
    type: 'Oral'
  },

  // ========================================
  // 9-9. 대한기계학회 (2023.05)
  // ========================================
  {
    year: '2023.05',
    authors: '이동민, 이준규, 오현석, 박천하, 김창완',
    title: '디지털 트윈 구축 위한 회전체 다물체 동역학 모델 개발',
    conference: '대한기계학회 CAE 및 응용역학부문 2023년 춘계학술대회',
    location: 'Busan, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-10. 대한기계학회 (2023.05)
  // ========================================
  {
    year: '2023.05',
    authors: '이준규, 이동민, 오현석, 김창완',
    title: '다물체 동역학 및 탄성유체역학 시뮬레이션 모델을 활용한 저널 베어링 오일 훨 데이터 생성',
    conference: '대한기계학회 CAE 및 응용역학부문 2023년 춘계학술대회',
    location: 'Busan, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-11. 대한기계학회 (2023.03)
  // ========================================
  {
    year: '2023.03',
    authors: '최민석, 황미경, 이동민, 유동휘, 오현석',
    title: '실제 현장 회전 기계 고장 진단을 위하여 디지털 트윈 모델 데이터를 활용한 도메인 적응 방법',
    conference: '대한기계학회 신뢰성부문 2023년 춘계학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-12. 대한기계학회 (2022.11)
  // ========================================
  {
    year: '2022.11',
    authors: '이동민, 오현석, 김창완',
    title: '유한요소모델을 이용한 회전체 질량 불균형 및 오정렬 구현',
    conference: '대한기계학회 2022년 학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-13. 대한기계학회 (2021.11)
  // ========================================
  {
    year: '2021.11',
    authors: '이동민, 김정언, 오현석, 황미경, 조기현',
    title: '일차 신뢰도법 이용한 로터 중심공 확률론적 수명 평가',
    conference: '대한기계학회 2021년 학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-14. 대한기계학회 (2021.11)
  // ========================================
  {
    year: '2021.11',
    authors: '김정언, 이동민, 오현석, 황미경, 조기현',
    title: '증기터빈 로터 림 부착부의 응력 부식 균열에 의한 균열 성장과 확률론적 수명 평가',
    conference: '대한기계학회 2021년 학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-15. AP PHM (2021.09)
  // ========================================
  {
    year: '2021.09',
    authors: 'Dongmin Lee, Donghwi Yoo, Hyunseok Oh',
    title: 'Accelerated Life Test Design of Solenoid Actuator Using a Mission Profile',
    conference: 'Asia Pacific Conference of the Prognostics and Health Management',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-16. 대한기계학회 (2021.04)
  // ========================================
  {
    year: '2021.04',
    authors: '이동민, 김정언, 오현석, 황미경, 조기현',
    title: '로터 보어 단순 열응력 해석 모델 이용한 확률론적 피로 수명 계산',
    conference: '대한기계학회 신뢰성부문 2021년 춘계학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-17. 대한기계학회 (2020.12)
  // ========================================
  {
    year: '2020.12',
    authors: '김정언, 이동민, 오현석',
    title: '인공지능 CAM 이용한 배관계 파손 감지 센서 위치 선정',
    conference: '대한기계학회 2020년 학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-18. ICMR (2019.11)
  // ========================================
  {
    year: '2019.11',
    authors: 'Dongmin Lee, Chungeon Kim, Hyunseok Oh',
    title: 'Probabilistic Fatigue Life Estimation of Film Capacitor Assemblies Under Thermal Cycling',
    conference: 'Fifth International Conference on Materials and Reliability',
    location: 'Jeju, Korea',
    type: 'Oral'
  },

  // ========================================
  // 9-19. 대한기계학회 (2019.02)
  // ========================================
  {
    year: '2019.02',
    authors: '이동민, 오현석',
    title: '확률적 피로 수명 예측을 위한 PTH 솔더 조인트 시뮬레이션 모델 개발',
    conference: '대한기계학회 신뢰성부문 2019년 춘계학술대회',
    location: 'Jeju, Korea',
    type: 'Oral'
  }
];
