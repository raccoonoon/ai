import { SubmitForm } from './SubmitForm';

export const metadata = {
  title: '자소서 첨삭 요청'
};

export default function SubmitPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">자소서 첨삭 요청</h1>
        <p className="text-base text-slate-600">
          아래 정보를 작성해주시면 전문 첨삭가가 48시간 이내로 1차 피드백을 드립니다. 업로드 가능한 파일 형식은 PDF, DOCX, TXT 입니다.
        </p>
      </header>
      <SubmitForm />
    </div>
  );
}
