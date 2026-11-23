
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { profile } from '@/content/profile';

const menu = [
  { href: '/', label: 'Home' },
  { href: '/cv', label: 'CV' },
  { href: '/research', label: 'Research' },
  { href: '/awards', label: 'Awards' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const path = usePathname();

  const [dark, setDark] = useState(false);
  const [mobile, setMobile] = useState(false);

  // 다크모드 설정 불러오기
  useEffect(() => {
    const stored = localStorage.getItem('dm-theme');
    const on = stored === 'dark';

    setDark(on);

    document.documentElement.dataset.theme =
      on ? 'dark' : 'light';
  }, []);

  // 다크모드 전환
  const toggle = () => {
    const value = !dark;

    setDark(value);

    localStorage.setItem(
      'dm-theme',
      value ? 'dark' : 'light'
    );

    document.documentElement.dataset.theme =
      value ? 'dark' : 'light';
  };

  return (
    <header className="site-header">
      <div className="header-inner">

        {/* 왼쪽 위 이름: 마침표 제거 */}
        <Link
          href="/"
          className="brand"
          onClick={() => setMobile(false)}
        >
          {profile.nameEn}
        </Link>

        {/* 상단 메뉴 */}
        <nav
          aria-label="주 메뉴"
          className={mobile ? 'nav-links open' : 'nav-links'}
        >
          {menu.map(item => (
            <Link
              key={item.href}
              className={
                path === item.href ? 'active' : ''
              }
              href={item.href}
              onClick={() => setMobile(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 언어 및 다크모드 */}
        <div className="header-actions">

          <span
            className="lang"
            aria-label="현재 언어 한국어"
          >
            KR
          </span>

          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={
              dark ? '라이트 모드' : '다크 모드'
            }
            title={
              dark ? '라이트 모드' : '다크 모드'
            }
          >
            {dark ? '☀' : '☾'}
          </button>

          {/* 모바일 메뉴 */}
          <button
            type="button"
            className="hamburger"
            aria-label="메뉴 열기"
            aria-expanded={mobile}
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? '✕' : '☰'}
          </button>

        </div>
      </div>
    </header>
  );
}
