export const metadata = {
  title: '로그인'
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 px-4 py-16 sm:px-6">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-slate-900">이메일 로그인</h1>
        <p className="text-sm text-slate-600">Career Note 계정으로 로그인하고 내 첨삭 내역을 확인하세요.</p>
      </header>
      <form className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700" htmlFor="login-email">
            이메일
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            placeholder="example@email.com"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
          />
        </div>
        <button
          type="button"
          className="mt-6 w-full rounded-full bg-primary-dark px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark/50"
        >
          로그인 링크 받기
        </button>
        <p className="mt-4 text-center text-xs text-slate-500">
          * 실제 로그인 기능은 준비 중입니다.
        </p>
      </form>
    </div>
  );
}
