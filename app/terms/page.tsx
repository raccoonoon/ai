export const metadata = {
  title: '이용약관'
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-16 sm:px-6">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">이용약관</h1>
        <p className="text-sm text-slate-600">
          Career Note 서비스 이용 시 아래 약관에 동의하는 것으로 간주됩니다. 보다 자세한 약관은 추후 업데이트될 예정입니다.
        </p>
      </header>
      <section className="space-y-6 text-sm leading-6 text-slate-600" aria-label="이용약관 본문">
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">제1조 (목적)</h2>
          <p className="mt-2">
            본 약관은 Career Note(이하 “회사”)가 제공하는 자소서 첨삭 서비스(이하 “서비스”)의 이용 조건과 절차, 회사와 회원 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">제2조 (용어의 정의)</h2>
          <p className="mt-2">
            “회원”은 본 약관에 동의하고 회사와 이용계약을 체결하여 서비스를 이용하는 이용자를 의미하며, “콘텐츠”는 회원이 서비스 내에서 작성하거나 업로드한 모든 자료를 말합니다.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">제3조 (약관의 효력 및 변경)</h2>
          <p className="mt-2">
            회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 사전 공지합니다. 회원은 변경된 약관에 동의하지 않을 경우 이용계약을 해지할 수 있습니다.
          </p>
        </article>
      </section>
    </div>
  );
}
