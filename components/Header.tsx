'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: '홈' },
  { href: '/services', label: '서비스 소개' },
  { href: '/submit', label: '자소서 첨삭 요청' },
  { href: '/contact', label: '문의' },
  { href: '/login', label: '로그인' }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="홈으로 이동">
          <span className="text-xl font-semibold text-primary-dark">CAREER NOTE</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="주요 메뉴">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-3 py-2 transition-colors duration-200 hover:bg-primary-light/30 ${
                pathname === href ? 'bg-primary-light/60 text-primary-dark' : 'text-slate-700'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 transition hover:bg-primary-light/40 hover:text-primary-dark focus:outline-none focus-visible:ring focus-visible:ring-primary-dark/50 md:hidden"
          aria-label="네비게이션 토글"
          aria-expanded={open}
        >
          {open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 py-4 shadow md:hidden" aria-label="모바일 메뉴">
          <ul className="space-y-2">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeMenu}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition hover:bg-primary-light/40 ${
                    pathname === href ? 'bg-primary-light/60 text-primary-dark' : 'text-slate-700'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
