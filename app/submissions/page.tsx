export const metadata = {
  title: '제출 내역'
};

const submissionGuides = [
  {
    title: '제출 상태 확인',
    description:
      '첨삭 요청 진행 상황과 피드백 완료 여부를 한눈에 확인할 수 있도록 준비 중입니다. 곧 더 편리한 대시보드를 제공해 드릴게요.'
  },
  {
    title: '피드백 히스토리',
    description:
      '완료된 첨삭 결과와 파일을 여기에서 다시 내려받을 수 있습니다. 개선 사항을 빠르게 반영해 보세요.'
  },
  {
    title: '후속 가이드',
    description:
      '면접 대비 자료, 유료 전환 혜택 등 다음 단계에서 필요한 정보를 정리해 안내해 드릴 예정입니다.'
  }
];

export default function SubmissionsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-16 sm:px-6">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900">내 제출 내역</h1>
        <p className="text-sm text-slate-600">
          로그인 후 첨삭 진행 상황과 피드백 결과를 확인할 수 있는 공간입니다. 서비스가 곧 오픈될 예정이에요.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3" aria-label="제출 내역 안내">
        {submissionGuides.map((item) => (
          <article
            key={item.title}
            className="flex h-full flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary-light hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>
      <p className="rounded-2xl border border-dashed border-primary-light bg-primary-light/20 p-6 text-sm text-primary-dark">
        로그인 기능과 제출 내역 대시보드는 2024년 베타 출시를 목표로 준비하고 있습니다. 이용자분들의 의견을 기다릴게요!
      </p>
    </div>
  );
}
