export const metadata = {
  title: '문의'
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-6">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">문의하기</h1>
        <p className="text-base text-slate-600">
          서비스 관련 문의나 제휴 제안은 아래 이메일로 보내주세요. 빠르게 답변드릴게요.
        </p>
      </header>
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <dl className="space-y-4 text-sm text-slate-600">
          <div>
            <dt className="font-medium text-slate-900">이메일</dt>
            <dd>support@careernote.co.kr</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">운영 시간</dt>
            <dd>평일 10:00 ~ 18:00 (주말·공휴일 휴무)</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">오피스</dt>
            <dd>서울특별시 강남구 테크로 123, Career Note Lab</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
