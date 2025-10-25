import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Career Note - 자소서 첨삭 서비스',
    template: '%s | Career Note'
  },
  description:
    '20대 취준생을 위한 전문 자소서 첨삭 서비스. 빠른 피드백과 유료 전환 가이드를 제공합니다.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 bg-gradient-to-b from-white via-sky-50/40 to-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
