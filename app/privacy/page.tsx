export const metadata = {
  title: '개인정보처리방침'
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-16 sm:px-6">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">개인정보처리방침</h1>
        <p className="text-sm text-slate-600">
          Career Note는 이용자의 개인정보를 소중히 다루며, 관련 법령을 준수하여 안전하게 관리합니다. 자세한 정책은 아래 내용을 참고해주세요.
        </p>
      </header>
      <section className="space-y-6 text-sm leading-6 text-slate-600" aria-label="개인정보처리방침 본문">
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">1. 수집하는 개인정보 항목</h2>
          <p className="mt-2">
            회사는 회원 가입, 서비스 이용, 고객 상담을 위해 이름, 이메일, 연락처, 첨삭 요청과 관련된 파일 등을 수집할 수 있습니다. 수집 목적에 필요한 최소한의 정보만 요청드립니다.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">2. 개인정보의 이용 목적</h2>
          <p className="mt-2">
            수집된 개인정보는 첨삭 서비스 제공, 고객 상담, 서비스 품질 개선 및 신규 서비스 안내를 위해 활용됩니다. 동의 없이 다른 목적으로 사용하지 않습니다.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">3. 개인정보의 보관 및 파기</h2>
          <p className="mt-2">
            개인정보는 이용 목적 달성 시 지체 없이 파기하며, 관련 법령에 따라 일정 기간 보관이 필요한 경우 안전하게 분리 보관합니다. 파기 시에는 복구가 불가능하도록 조치합니다.
          </p>
        </article>
      </section>
    </div>
  );
}
