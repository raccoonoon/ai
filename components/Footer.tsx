import Link from 'next/link';

const footerLinks = [
  { href: '/pricing', label: '요금 안내' },
  { href: '/terms', label: '이용약관' },
  { href: '/privacy', label: '개인정보처리방침' }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-medium text-slate-700">© {new Date().getFullYear()} Career Note. All rights reserved.</p>
        <nav aria-label="푸터 메뉴">
          <ul className="flex flex-wrap items-center gap-4">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-md px-2 py-1 transition hover:bg-primary-light/40 hover:text-primary-dark focus:outline-none focus-visible:ring focus-visible:ring-primary-dark/50"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
