'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

type FormErrors = Partial<Record<'name' | 'email' | 'companyRole' | 'requests' | 'file', string>>;

type Toast = {
  message: string;
  tone: 'success' | 'error';
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function SubmitForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  const validate = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const newErrors: FormErrors = {};
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const companyRole = String(formData.get('companyRole') ?? '').trim();
    const requests = String(formData.get('requests') ?? '').trim();
    const file = formData.get('resume') as File | null;

    if (!name) {
      newErrors.name = '이름을 입력해주세요.';
    }
    if (!email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }
    if (!companyRole) {
      newErrors.companyRole = '지원 회사/직무 정보를 입력해주세요.';
    }
    if (!requests) {
      newErrors.requests = '요청 사항을 입력해주세요.';
    }
    if (!file) {
      newErrors.file = '자소서 파일을 업로드해주세요.';
    } else if (file.size > MAX_FILE_SIZE) {
      newErrors.file = '파일 용량은 최대 5MB까지 업로드할 수 있습니다.';
    }

    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, formData };
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast(null);
    const form = event.currentTarget;
    const { isValid, formData } = validate(form);

    if (!isValid) {
      form.reportValidity?.();
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('요청이 실패했습니다. 다시 시도해주세요.');
      }

      const result = await response.json();
      setToast({ message: result.message ?? '제출이 완료되었습니다!', tone: 'success' });
      form.reset();
      setErrors({});
    } catch (error) {
      console.error(error);
      setToast({ message: '제출에 실패했습니다. 잠시 후 다시 시도해주세요.', tone: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {toast && (
        <div
          role={toast.tone === 'error' ? 'alert' : 'status'}
          aria-live={toast.tone === 'error' ? 'assertive' : 'polite'}
          aria-atomic="true"
          className={`mt-6 flex items-start gap-3 rounded-2xl border p-4 text-sm shadow-sm ${
            toast.tone === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border-rose-200 bg-rose-50 text-rose-700'
          }`}
        >
          <span className="font-semibold">{toast.tone === 'success' ? '완료' : '오류'}</span>
          <span className="flex-1">{toast.message}</span>
          {toast.tone === 'success' && (
            <Link
              href="/submissions"
              className="ml-auto inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary-dark shadow-sm ring-1 ring-primary-light transition hover:bg-primary-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark/50"
            >
              <span aria-hidden>📄</span>
              <span>내 제출 내역 보기</span>
            </Link>
          )}
          <button
            type="button"
            onClick={() => setToast(null)}
            className="-mr-1 -mt-1 rounded-full p-1 text-xs text-slate-500 transition hover:bg-white/80 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark/40"
            aria-label="알림 닫기"
          >
            <span aria-hidden>✕</span>
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-800" htmlFor="name">
              이름
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="홍길동"
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-xs text-rose-600">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800" htmlFor="email">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-xs text-rose-600">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-800" htmlFor="companyRole">
            지원 회사 / 직무
          </label>
          <input
            id="companyRole"
            name="companyRole"
            type="text"
            placeholder="예: Career Note / 서비스 기획"
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
            aria-invalid={Boolean(errors.companyRole)}
            aria-describedby={errors.companyRole ? 'companyRole-error' : undefined}
            required
          />
          {errors.companyRole && (
            <p id="companyRole-error" className="mt-2 text-xs text-rose-600">
              {errors.companyRole}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-800" htmlFor="requests">
            요청 사항
          </label>
          <textarea
            id="requests"
            name="requests"
            rows={5}
            placeholder="첨삭 시 중점을 두고 싶은 부분이나 궁금한 점을 자유롭게 적어주세요."
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
            aria-invalid={Boolean(errors.requests)}
            aria-describedby={errors.requests ? 'requests-error' : undefined}
            required
          />
          {errors.requests && (
            <p id="requests-error" className="mt-2 text-xs text-rose-600">
              {errors.requests}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-800" htmlFor="resume">
            자소서 파일 업로드
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.docx,.txt"
            className="mt-2 w-full rounded-lg border border-dashed border-primary-light px-3 py-3 text-sm text-slate-600 shadow-sm focus:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
            aria-invalid={Boolean(errors.file)}
            aria-describedby={errors.file ? 'resume-error' : 'resume-hint'}
            required
          />
          <p id="resume-hint" className="mt-2 text-xs text-slate-500">
            PDF, DOCX, TXT 파일만 업로드 가능하며 최대 5MB까지 지원합니다.
          </p>
          {errors.file && (
            <p id="resume-error" className="mt-2 text-xs text-rose-600">
              {errors.file}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">제출 시 개인정보 수집 및 이용에 동의한 것으로 간주합니다.</p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primary-dark px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark/50 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={submitting}
          >
            {submitting ? '제출 중...' : '첨삭 요청 제출'}
          </button>
        </div>
      </form>
    </>
  );
}
