import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const companyRole = formData.get('companyRole');
    const requests = formData.get('requests');
    const file = formData.get('resume');

    console.log('[Submit Request]', {
      name,
      email,
      companyRole,
      requests,
      file:
        file instanceof File
          ? { name: file.name, type: file.type, size: file.size }
          : '파일이 포함되지 않았습니다.'
    });

    // TODO: S3 업로드 연결
    // TODO: 이메일 알림(Resend) 발송
    // TODO: DB 저장(Planetscale/Prisma) 구현

    return NextResponse.json({ success: true, message: '첨삭 요청이 접수되었습니다. 곧 피드백을 드릴게요!' });
  } catch (error) {
    console.error('[Submit Request Error]', error);
    return NextResponse.json({ success: false, message: '요청을 처리하는 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
