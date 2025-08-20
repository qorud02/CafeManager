import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    const emailContent = `
새로운 가맹·제휴 문의가 접수되었습니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▶ 문의자 정보
• 이름: ${data.name}
• 이메일: ${data.email}
• 회사명: ${data.company || '미입력'}
• 연락처: ${data.phone || '미입력'}

▶ 문의 내용
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

이 메일은 유니컵컴퍼니 웹사이트에서 자동으로 발송되었습니다.
`;

    await mailService.send({
      to: 'contact@unicup.co.kr', // 실제 수신할 이메일 주소로 변경
      from: 'noreply@unicup.co.kr', // 발신자 이메일 (SendGrid에서 인증된 도메인)
      replyTo: data.email,
      subject: `[유니컵컴퍼니] 가맹·제휴 문의 - ${data.name}`,
      text: emailContent,
    });

    // 문의자에게 자동 응답 메일 발송
    const autoReplyContent = `
${data.name}님, 안녕하세요.

유니컵컴퍼니에 가맹·제휴 문의를 해주셔서 감사합니다.

접수하신 문의 내용을 검토한 후 
영업일 기준 1-2일 내에 담당자가 연락드리겠습니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▶ 접수된 문의 내용
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

추가 문의사항이 있으시면 언제든지 연락주세요.

감사합니다.

유니컵컴퍼니 팀
`;

    await mailService.send({
      to: data.email,
      from: 'noreply@unicup.co.kr',
      subject: '[유니컵컴퍼니] 문의 접수 확인',
      text: autoReplyContent,
    });

    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}