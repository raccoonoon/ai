"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  position: string;
  request: string;
  fileName?: string;
};

export default function SubmitPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedValues, setSubmittedValues] = useState<FormValues | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const resumeEntry = formData.get("resume");

    const values: FormValues = {
      name: (formData.get("name") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      position: (formData.get("position") as string) ?? "",
      request: (formData.get("request") as string) ?? "",
      fileName: resumeEntry instanceof File ? resumeEntry.name : undefined,
    };

    setIsSubmitting(true);
    console.log("Submit request:", values);
    setSubmittedValues(values);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <section className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-8 shadow-xl shadow-slate-200">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">무료 첨삭 요청</h1>
          <p className="mt-3 text-base text-slate-600">
            정보를 입력하고 자소서 파일을 업로드하면 전문가가 검토 후 연락드립니다.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                이름
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="홍길동"
                className="mt-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="position" className="text-sm font-medium text-slate-700">
                지원 직무
              </label>
              <input
                id="position"
                name="position"
                type="text"
                required
                placeholder="예: 마케팅 인턴"
                className="mt-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="resume" className="text-sm font-medium text-slate-700">
                자소서 파일
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                required
                accept=".pdf,.doc,.docx,.txt"
                className="mt-2 block w-full cursor-pointer rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-sky-500 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:border-sky-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <p className="mt-2 text-xs text-slate-500">PDF, DOCX, TXT 파일 (최대 5MB)</p>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="request" className="text-sm font-medium text-slate-700">
              요청 사항
            </label>
            <textarea
              id="request"
              name="request"
              required
              rows={5}
              placeholder="첨삭이 필요한 부분이나 궁금한 점을 자세히 알려주세요."
              className="mt-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300 disabled:cursor-not-allowed disabled:bg-sky-300"
          >
            {isSubmitting ? "제출 중..." : "무료 첨삭 요청하기"}
          </button>
        </form>
        {submittedValues && (
          <div className="mt-8 rounded-xl border border-slate-100 bg-slate-50 p-6 text-sm text-slate-700">
            <h2 className="text-base font-semibold text-slate-900">최근 제출 정보</h2>
            <dl className="mt-4 grid gap-2">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-slate-600">이름</dt>
                <dd className="font-medium text-slate-900">{submittedValues.name}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-slate-600">이메일</dt>
                <dd className="font-medium text-slate-900">{submittedValues.email}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-slate-600">지원 직무</dt>
                <dd className="font-medium text-slate-900">{submittedValues.position}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-slate-600">요청 사항</dt>
                <dd className="max-w-xs text-right text-slate-900">{submittedValues.request}</dd>
              </div>
              {submittedValues.fileName && (
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-600">첨부 파일</dt>
                  <dd className="font-medium text-slate-900">{submittedValues.fileName}</dd>
                </div>
              )}
            </dl>
          </div>
        )}
      </section>
    </main>
  );
}
