import { MailService } from '@sendgrid/mail';

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error("SENDGRID_API_KEY environment variable must be set");
    return false;
  }

  try {
    const mailData: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
    };

    if (params.replyTo) {
      mailData.replyTo = params.replyTo;
    }

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
