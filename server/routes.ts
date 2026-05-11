import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendEmail } from "./sendgrid";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "ceo@unicupcompany.com";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "info@unicupcompany.com";

const inquiryLabels: Record<string, string> = {
  franchise: "가맹점 개설",
  partnership: "사업 제휴",
  supply: "공급업체 등록",
  other: "기타",
};

function escapeHtml(value: unknown) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const {
        name,
        company,
        email,
        phone,
        message,
        inquiryType,
        interest,
        honeypot,
      } = req.body;

      if (honeypot) {
        return res.status(204).end();
      }

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ error: "필수 필드가 누락되었습니다." });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res
          .status(400)
          .json({ error: "유효한 이메일 주소를 입력해주세요." });
      }

      const inquiryKey = inquiryType || interest || "partnership";
      const inquiryTypeText = inquiryLabels[inquiryKey] || "문의";
      const submittedAt = new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
      });
      
      // Email content
      const emailSubject = `[유니컵컴퍼니] ${inquiryTypeText} 문의 - ${name}`;
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1F3B83 0%, #4A90E2 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
              🏢 유니컵컴퍼니 ${inquiryTypeText} 문의
            </h1>
            <p style="color: #E8F2FF; margin: 10px 0 0 0; font-size: 16px;">
              새로운 ${inquiryTypeText} 문의가 접수되었습니다
            </p>
          </div>
          
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1F3B83; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px;">
              📋 문의자 정보
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4A5568; width: 100px;">담당자명:</td>
                <td style="padding: 8px 0; color: #2D3748;">${escapeHtml(name)}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4A5568;">회사명:</td>
                <td style="padding: 8px 0; color: #2D3748;">${escapeHtml(company)}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4A5568;">이메일:</td>
                <td style="padding: 8px 0; color: #2D3748;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #1F3B83; text-decoration: none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4A5568;">연락처:</td>
                <td style="padding: 8px 0; color: #2D3748;">${escapeHtml(phone)}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4A5568;">문의 유형:</td>
                <td style="padding: 8px 0;">
                  <span style="background: #1F3B83; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
                    ${escapeHtml(inquiryTypeText)} 문의
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4A5568;">접수 시각:</td>
                <td style="padding: 8px 0; color: #2D3748;">${escapeHtml(submittedAt)}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
            <h2 style="color: #1F3B83; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px;">
              💬 문의 내용
            </h2>
            <div style="background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #1F3B83; line-height: 1.6; color: #2D3748;">
              ${escapeHtml(message).replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; background: #E8F2FF; border-radius: 8px;">
            <p style="margin: 0; color: #4A5568; font-size: 14px;">
              📧 이 메일은 유니컵컴퍼니 웹사이트 문의 양식을 통해 자동으로 발송되었습니다.<br>
              빠른 시일 내에 담당자가 연락드릴 예정입니다.
            </p>
          </div>
        </div>
      `;

      const emailText = `
        [유니컵컴퍼니 ${inquiryTypeText} 문의]
        
        담당자명: ${name}
        ${company ? `회사명: ${company}` : ''}
        이메일: ${email}
        ${phone ? `연락처: ${phone}` : ''}
        문의 유형: ${inquiryTypeText} 문의
        접수 시각: ${submittedAt}
        
        문의 내용:
        ${message}
        
        ---
        이 메일은 유니컵컴퍼니 웹사이트를 통해 자동으로 발송되었습니다.
      `;

      // 개발 환경에서도 콘솔 로그와 함께 실제 이메일 전송
      if (process.env.NODE_ENV === 'development') {
        // 개발 환경에서는 콘솔에 이메일 내용 출력
        console.log('=== 📧 이메일 전송 (개발 환경) ===');
        console.log('To:', CONTACT_TO_EMAIL);
        console.log('Subject:', emailSubject);
        console.log('Content:');
        console.log(emailText);
        console.log('================================');
      }

      // 실제 이메일 전송 (개발/프로덕션 공통)
      const emailSent = await sendEmail({
        to: CONTACT_TO_EMAIL,
        from: CONTACT_FROM_EMAIL,
        replyTo: email,
        subject: emailSubject,
        text: emailText,
        html: emailHtml
      });

      if (emailSent) {
        const message = process.env.NODE_ENV === 'development' 
          ? "문의가 성공적으로 전송되었습니다. (실제 이메일 전송됨)" 
          : "문의가 성공적으로 전송되었습니다.";
        res.json({ success: true, message });
      } else {
        res.status(500).json({ error: "이메일 전송에 실패했습니다." });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "서버 오류가 발생했습니다." });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
