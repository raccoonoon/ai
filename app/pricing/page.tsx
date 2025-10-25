export const metadata = {
  title: '요금 안내'
};

const plans = [
  {
    name: 'Starter',
    price: '무료',
    description: '1회 무료 첨삭, 핵심 피드백 제공',
    features: ['자소서 1건 첨삭', '핵심 개선 포인트 제공', '유료 전환 가이드 안내']
  },
  {
    name: 'Professional',
    price: '89,000원',
    description: '심화 첨삭과 면접 대비 자료 포함',
    features: ['자소서 3건 첨삭', '문항별 코칭 & 인터뷰 질의응답', '면접 대비 시뮬레이션 자료']
  },
  {
    name: 'Unlimited',
    price: '월 149,000원',
    description: '무제한 첨삭과 커리어 멘토링',
    features: ['자소서 무제한 첨삭', '커리어 코칭 세션 2회', '실시간 채팅 피드백']
  }
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-16 sm:px-6">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900">요금 안내</h1>
        <p className="text-base text-slate-600">
          필요에 따라 선택할 수 있는 유연한 요금제를 준비했습니다. 무료 체험 후 원하는 플랜을 선택해 보세요.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3" aria-label="요금제">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary-light hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">{plan.name}</h2>
            <p className="mt-2 text-2xl font-bold text-primary-dark">{plan.price}</p>
            <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 text-primary-dark">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
