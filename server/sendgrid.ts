import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY!);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const mailData: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
    };

    if (params.text) {
      mailData.text = params.text;
    }

    if (params.html) {
      mailData.html = params.html;
    }

    await mailService.send(mailData);
    return true;
  } catch (error: any) {
    console.error('=== SendGrid 이메일 전송 오류 상세 정보 ===');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error response:', error.response?.body);
    console.error('From email:', params.from);
    console.error('To email:', params.to);
    console.error('===============================================');
    return false;
  }
}