export const metadata = {
  title: '서비스 소개'
};

const services = [
  {
    title: '맞춤형 자소서 분석',
    description: '지원 직무와 회사에 맞춰 키워드 추출, 핵심 경험 정리, 문장 구성까지 꼼꼼히 분석합니다.'
  },
  {
    title: '실전 모의 인터뷰 대비',
    description: '자소서 기반 예상 질문과 답변 피드백으로 면접 준비까지 한번에 진행할 수 있습니다.'
  },
  {
    title: '멘토링 & 커리어 상담',
    description: '경력 설계, 전직 상담 등 커리어 방향성을 잡는 데 필요한 1:1 코칭을 제공합니다.'
  }
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-16 sm:px-6">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900">자소서 첨삭 서비스 소개</h1>
        <p className="text-base text-slate-600">
          Career Note는 데이터 기반 분석과 전문가 인사이트를 결합해 합격 가능성을 높이는 자소서를 만들어 드립니다.
        </p>
      </header>
      <section className="grid gap-8 md:grid-cols-3" aria-label="서비스 구성">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex h-full flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary-light hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
            <p className="text-sm text-slate-600">{service.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
