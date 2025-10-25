import Link from 'next/link';

const featureCards = [
  {
    title: '전문가 첨삭',
    description: '현직 리크루터와 HR 전문가가 문장 구조부터 콘텐츠 전략까지 정밀하게 코칭합니다.'
  },
  {
    title: '빠른 피드백',
    description: '48시간 이내 1차 피드백 제공, 취업 일정에 맞춰 빠르게 수정하고 대비할 수 있어요.'
  },
  {
    title: '유료 전환 가이드',
    description: '무료 이후 유료 전환 시 차별화 전략, 면접 대비 자료까지 맞춤 가이드로 도와드립니다.'
  }
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 sm:py-20">
      <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-primary-light/40 via-white to-primary-light/40 px-6 py-16 text-center shadow-lg sm:px-16">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-dark">20대 취준생 전용</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            20대 취준생 대상 1회 무료 첨삭 이벤트
          </h1>
          <p className="text-base text-slate-600 sm:text-lg">
            나만의 스토리를 돋보이게 만드는 전문 첨삭 서비스. 지금 무료로 신청하고 완성도 높은 자소서를 만들어 보세요.
          </p>
          <div className="flex justify-center">
            <Link
              href="/submit"
              className="rounded-full bg-primary-dark px-6 py-3 text-base font-semibold text-white shadow-lg transition duration-200 hover:scale-[1.02] hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark/60"
              aria-label="무료로 첨삭받기 페이지로 이동"
            >
              무료로 첨삭받기
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(127,181,255,0.25),_transparent_60%)]" aria-hidden />
      </section>

      <section aria-label="서비스 특징" className="grid gap-8 md:grid-cols-3">
        {featureCards.map((card) => (
          <article
            key={card.title}
            className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary-light hover:shadow-lg focus-within:-translate-y-1 focus-within:border-primary-light focus-within:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">{card.title}</h2>
            <p className="text-sm text-slate-600">{card.description}</p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary-dark opacity-0 transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
              더 알아보기
              <span aria-hidden>→</span>
            </span>
          </article>
        ))}
      </section>
    </div>
  );
}
